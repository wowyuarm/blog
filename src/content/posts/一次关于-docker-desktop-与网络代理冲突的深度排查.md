---
title: 一次关于 Docker Desktop 与网络代理冲突的深度排查
publishDate: 2025-06-23 19:31:00
excerpt: 软件的自动化行为往往是默认设置 + 环境状态 +历史行为的函数，只有追踪到底层的“注入时机”与“读取路径”，才能真正控制它。
featuredImage: /uploads/屏幕截图-2025-06-24-193700.png
tags:
  - 计算机
---
起初只是一个很常见的错误：

```bash
docker pull redis:7-alpine
Error response from daemon: failed to do request: Head "https://...": proxyconnect tcp: dial tcp 127.0.0.1:7890: connect: connection refused
```

熟悉的 127.0.0.1:7890，这显然是 Clash for Windows 设置的本地代理端口，但我清楚地知道 —— 当时 Clash 并没有开启该代理，甚至我在各类配置中已经明确 **关闭了代理**。

于是我开始了这场探索。

- - -

我做的第一件事，是从最显而易见的路径排查：

* 检查了 Docker Desktop 的 GUI 设置中的 **Settings → Resources → Proxies**，HTTP 和 HTTPS Proxy 字段确实清空；
* 查看了 `~/.docker/config.json`、`/etc/docker/daemon.json`，文件不存在或未设置代理；
* 清理了 Linux 系统中的 `/etc/systemd/system/docker.service.d/http-proxy.conf`；
* 重启 Docker Desktop 与 WSL；
* 查询系统环境变量 `HTTP_PROXY`，无；
* 执行 `netsh winhttp show proxy`，显示为「直接访问」；
* 在 `%APPDATA%\Docker\settings.json` 中设置 `"ProxyHTTPMode": "manual"` 并清空 `OverrideProxyHTTP` 字段。

**一切都「清空」了，但 Docker 依旧在注入 127.0.0.1:7890。**

我开始怀疑是不是 Docker 的代理注入逻辑还有其它通道。

- - -

中途尝试使用 host.docker.internal 代替 127.0.0.1，并通过 No Proxy 配置绕过镜像仓库，也做过一定效果测试，但始终发现一个现象：

只要 Docker 一启动，它就会在 `docker info` 中自动显示：

```bash
HTTP Proxy: http://127.0.0.1:7890
```

而这发生的前提是 —— 我的 Clash 曾打开过系统代理（即开启 System Proxy 开关）。尽管我后来关闭了它，甚至从 Windows 设置中关闭了系统代理设置，但似乎 Docker Desktop 已“记住”了这个地址，并强行注入进来。

这很可能与 Windows 系统中的 WinINET 注册表代理设置有关，而 Docker Desktop 的守护进程则会在启动时默认读取并应用它。

- - -

我意识到这是一个系统性的“注入幽灵代理”问题。于是我去 GitHub 上查找是否有类似的 issue，果然找到了：

* **[Issue #14818](https://github.com/docker/for-win/issues/14818)**：有用户提出 Docker Desktop 会在 GUI 设置空白、系统代理关闭的情况下依旧注入 127.0.0.1 代理，导致拉镜像失败；
* 官方的回应是：“你可能只是没关闭系统代理，去 Windows 设置里关一下。”

我尝试了他的方法 —— 并非在 Clash 中关闭 System Proxy，而是进入 **Windows 设置 → 网络和 Internet → 代理**，关闭“使用代理服务器”这一项。

紧接着，我并没有完全退出 Docker Desktop， 直接**Restart**

这次不同了。Docker 不再注入代理了。

- - -

这让我意识到两个关键点：

1. Docker Desktop 并不是实时读取当前代理，而是**在启动时一次性读取系统代理配置**（可能是注册表 `ProxyServer` 键）；
2. 如果你在启动前系统代理是开启的，那么它就会将当时的代理地址注入进来，即使你之后关闭也无效（即使我在clash处关闭代理并重启。）；
3. 但如果你在**启动后**关闭系统代理（必须在windows处关闭），然后点击 “Restart Docker”，它会重新读取代理配置，此时就能“解除注入”。

- - -

相比我早期尝试的更激进的方式：

* 修改 settings.json；
* 彻底关闭 Docker Desktop；
* 用脚本清理代理路径；
* 重启 WSL；

这个方法更直接、更温和、更可靠。

- - -

回望这次排查，整个问题的根因可以归结为：

> **Docker Desktop 在 Windows 环境下，缺乏一个显式的选项来关闭系统代理注入机制。**

而一旦你的系统曾打开过代理，Docker 就会执念地将其注入进 daemon 环境，哪怕你后来已经关闭它。

最终，我在 GitHub 上对该 issue 作出评论反馈，感谢了官方的建议，并提出了一个请求：

> 是否可以在 future version 中提供 GUI 开关或设置项，彻底控制 proxy 注入。

- - -

> 软件的自动化行为往往是**默认设置 + 环境状态 +历史行为的函数**，只有追踪到底层的“注入时机”与“读取路径”，才能真正控制它。

- - -

我最后退而求其次地采用了“需要时关闭系统代理 + Restart Docker”的方式作为稳定解决方案。

不是理想，但足够实用。

我仍然期待未来 Docker 能让用户清楚而直接地控制代理注入行为 —— 而不是陷入这种幽灵般的默认状态。

- - -
