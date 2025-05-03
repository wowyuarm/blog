---
title: Deepseek+Cline零成本快速开发浏览器插件 | 附8点code with AI体会
publishDate: 2025-01-03 19:04:00
excerpt: 非常重要的一点：清晰地告诉所有AI编程工具在添加功能时，不要任意更改其他项目的代码逻辑，如果需要，请务必告诉我！
featuredImage: /uploads/640-1-.png
tags:
  - AI
  - 共创
  - vibe_coding
---
## 01 项目准备

之前一篇文章提到的关于deepseek在代码编写能力的体验评测（[深思 | 国内开源大模型对齐国际顶尖闭源模型：重新定义2025大模型竞争格局]()）在本文实践中展开。

我们开发这样一个插件的成本几乎为0（deepseek API注册即送500万tokens）  

接下来用到的是VS Code中的AI助手插件：Cline，直接搜索即可。

![图片](https://mmbiz.qpic.cn/mmbiz_png/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDzsrj4gls6rRWmhCLiaONI4iavnoSZKvkOOC3n2EPzm4CSbrnDczbz6yw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDlqOcplpaEmouhiap9HWFzmWdVbibeJMWtLSVG7YpEXPtrp35uuqH7xtA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDwzicMA6MHiaGD7Fawza1gbyo6xAvJCoLiaht8smOFbDhKoo5vlX90QGAw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)![图片](https://mmbiz.qpic.cn/mmbiz_png/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDyWLJOKxzvBLqiavibulnawWd43QIpnLATPCYV7yNj9uqWjjmeaAImxbQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDF8YETNNgaBqMvZnFxG9NIYEPDJIjoibZZP3JN8kMFLPfPJndqjTWvgQ/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

左图是API配置，选择deepseek模型并将在官网获得的API key输入进去。

另外，Custom Instrutions可以理解为系统提示词，比较重要。如果你想快速开发一个插件，可以参考下方prompt：

```
Always respond in Chinese
```

设置中的选项没有其他需求全选即可。

接下来正式进入编程。

---

  

**02 实践操作**

在上一篇文章（[从0到1，利用扣子与Cursor，开发过去价值上万的项目——人人都是开发者的时代](https://mp.weixin.qq.com/s?__biz=Mzk1NzM4NzQ4Mg==&mid=2247483708&idx=1&sn=2e5e8b598b4d181581deae0147fa776d&scene=21#wechat_redirect)）提到过接下来AI开发的一个简化流程：  

**创意/需求 => 实现方式 => 具体实践 => 优化调整**

我们从一个很小的需求出发：网页截长图插件。  

实现方式：Cline + Deepseek-V3 + 需求prompt（你可以借助AI帮助）。

具体实践：首先拆解项目，清楚需求以及想要实现的功能。将这些总结成一个文档创建在项目目录中。

![图片](https://mmbiz.qpic.cn/mmbiz_png/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDusibr9yN8CSibG232QHBVK4icW4mSvDccR3rHW2pR25abEj2r90o9wRZg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

接着，在对话框中@出这个文件并提出要求。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJD8v0q45hibkK5DAYvU818hFE6I6HXAtCy357D3sU0xFiaGPCe8xRA6XDQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

等待2分钟，你就几乎得到了一个完整的项目。  

这么多代码，花费的Tokens的价钱为0.01元。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJD0TyvP9UnQoOTXibTdsICPUdJFZf4MVSTnWicAf7hia6f4WNsFte8bwcyA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

---

**03 调整优化**

进入优化调整测试阶段，如果是第一次开发这样一个插件如何去测试并发布呢？不用担心，请教Cline+deepseek。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJD76LfmRNDicPfLDB2Dplywvo891tCc045ChaZecKEobUEamY7QHrqyQQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

进入谷歌浏览器插件开发者模式：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDGVF4uSpPxILmjApwQYU2m0ftr63QX1kDYIzGFicjibCqxdGQmD1o4ia2A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

接下来按照步骤一步一步操作即可。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDVDPYSX0G8yoEShJ6veNPJmaAqsAPKZJ0Xtiap3rCdvYMkBunSaFsFGQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

出错是不可避免的，但是Cline修复bug的效率还不错（可能是他按照我提供的prompt），将报错信息发送给他，他会一步一步检查，而且是有逻辑的。

这一点我觉得比cursor强一些，Cline将思考过程列了出来并严格按照这个思维链进行（尽管这会极大消耗Token数），大大增加了优化效率。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gggRtFrz9VSQRLuLWDYoJA6HHH17xgJDTTSkDSgKSLOanpibZ2IA0MhR9TPNbFlFYDm5JP1NvQ27naGicAX4iatLQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1)

_思维链解决问题__，自己在推理尝试_

在我要求cursor用思维链进行问题修复时，他有时并不遵循。

幻觉问题也很严重，不考虑我的输入而根据上下文内容输出。

后面，我们实现了这个插件的基本功能之后，可以试着增加其他功能了。  

非常重要的一点：清晰地告诉所有AI编程工具在添加功能时，不要任意更改其他项目的代码逻辑，如果需要，请务必告诉我！

这些AI工具的首要目标是完成你的任务以及目标，如果你没有提及这一点，他一定不会考虑。

关于deepseek-V3模型的体验，这个价位获得这样的体验，无需过多评测了。

---

**04**

分享一些我与AI合作开发项目的**经验**也是以上的一些**总结**：

**一**  

1. 项目开始之前，完善创意或明确需求。

2\. 构思应用场景，重要的是你想实现什么样的功能，更注重业务逻辑和用户场景的阐述。  

3\. 将1、2两点总结出一个**具体可行的方案**，具体的技术细节可以询问AI。  

4. 构建出一个整体prompt交给AI编程工具。  

**二**

1\. 造出一个MVP后，一定要git保存这个版本。  

2\. 优化调整前，还是需要明确需求，即我想要如何美化现在的项目（一定要具体）。

3\. 遇到bug时（要有平常心），一定要耐心（说多都是泪![图片](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/Broken.png?tp=webp&wxfrom=5&wx_lazy=1)）。

4. 对于较复杂的项目，对于零基础，需要去学习，否则应付不过来，多看看就熟了。  

暂时就这么多，后面我会单独总结![图片](https://res.wx.qq.com/t/wx_fed/we-emoji/res/v1.3.10/assets/newemoji/2_06.png?tp=webp&wxfrom=5&wx_lazy=1)

来自AI总结：

> 这篇文章详细介绍了如何使用Deepseek模型和VS Code的Cline插件开发一个网页截长图Chrome插件，展示了AI辅助开发的**低成本**(约0.01元)和**高效率**特点。作者特别强调了**思维链**在问题解决中的重要性，重点分享了与AI工具协作时需要注意的**关键点**。
