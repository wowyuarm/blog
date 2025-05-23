---
title: 阶段性vibe coding模型使用经验分享
publishDate: 2025-04-06T22:58:00.000Z
excerpt: 推荐Gemini作为架构师，Claude作为工程师的组合，以达到高效与创新的平衡。
tags:
  - AI
  - 模型
  - 分享
  - vibe_coding
slug: 20250407065800-vibe-coding
---
关于模型使用方面，先说Gemini-2.5-pro，被Sam发布4o图片生成“狙击”，我认为他的强大被低估了。

Gemini在**查找bug与修复方面**出乎意料的强大，但是他的工具调用积极性不高，如果不去引导他，甚至不知道项目的文件以及代码逻辑。（具体可见[从Cursor出发：对于Agent更好的理解与运用](https://mp.weixin.qq.com/s?__biz=Mzk1NzM4NzQ4Mg==&mid=2247483951&idx=1&sn=6c7c1b70c70d91bed0c82ced534d6f4e&scene=21#wechat_redirect))

因此，我建议，对于一个比较完善的项目进行优化。现阶段Gemini旗舰模型是首选。

然而，除非将全部项目代码全告诉他；在AI IDE中使用时为了让他了解项目，可以通过Claude任意一款模型prompt：“**最大化调用工具了解所有的代码逻辑**”，甚至可能需要重复2-3轮，视项目大小而定。

3.7系列模型不可否认的是**代码方面、工具调用很强大**，然而在协作过程Claude-3.7犹如脱缰的野马，他不会在意项目的结构。甚至基于他认为“牵一发而动全身”，往往每增添一个小功能，如果在没有监管的情况下，Claude会将项目改得面目全非，需要慎用。

如果寻求高创意，追求Vibe coding（氛围编程），不害怕出错，只作为反馈者与需求提出者，完全可以只使用Claude-3.7-thinking。

如果需要安全性与高效率，Gemini作为架构师，Claude作为工程师，个人作为链接者的组合，我认为是很不错的。
