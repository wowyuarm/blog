---
title: My coding experience with Gemini-2.5-pro & Claude-3.7-Sonnet
description: Recommending Gemini as the architect and Claude as the engineer to achieve a balance between efficiency and innovation.
pubDatetime: 2025-04-06T14:58:00.000Z
tags:
  - AI/model
  - AI/coding
---

Regarding model usage, let's start with [Gemini-2.5-pro](https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/). Although overshadowed by Sam's release of [4o image generation](https://openai.com/index/introducing-4o-image-generation/), I believe its power is underestimated.

Gemini is surprisingly powerful in **finding and fixing bugs**, but its tool-calling initiative is low. Without guidance, it might not even understand the project's files and code logic.

Therefore, I recommend Gemini's flagship model as the first choice for optimizing a relatively mature project.

However, unless you provide it with the entire project code; when using it in an AI IDE, to help it understand the project, you can prompt any Claude model with: "**Maximize tool calls to understand all code logic**", possibly needing 2-3 rounds of repetition depending on the project size.

[The 3.7 series models](https://www.anthropic.com/news/claude-3-7-sonnet) are undeniably **powerful in coding and tool calling**. However, during collaboration, Claude-3.7 is like a runaway horse—it doesn't care about the project structure. Based on its belief that "pulling one hair affects the whole body," often when adding a small feature, without supervision, Claude can completely transform the project beyond recognition, requiring cautious use.

If seeking high creativity, pursuing Vibe coding, not afraid of errors, and only acting as a feedback provider and requirement proposer, you can solely use Claude-3.7-thinking.

If safety and high efficiency are needed, the combination of Gemini as the architect, Claude as the engineer, and the individual as the connector is, in my opinion, quite excellent.

<!-- zh-CN -->

关于模型使用方面，先说Gemini-2.5-pro，被Sam发布4o图片生成"狙击"，我认为他的强大被低估了。

Gemini在**查找bug与修复方面**出乎意料的强大，但是他的工具调用积极性不高，如果不去引导他，甚至不知道项目的文件以及代码逻辑。

因此，我建议，对于一个比较完善的项目进行优化。现阶段Gemini旗舰模型是首选。

然而，除非将全部项目代码全告诉他；在AI IDE中使用时为了让他了解项目，可以通过Claude任意一款模型prompt："**最大化调用工具了解所有的代码逻辑**"，甚至可能需要重复2-3轮，视项目大小而定。

3.7系列模型不可否认的是**代码方面、工具调用很强大**，然而在协作过程Claude-3.7犹如脱缰的野马，他不会在意项目的结构。甚至基于他认为"牵一发而动全身"，往往每增添一个小功能，如果在没有监管的情况下，Claude会将项目改得面目全非，需要慎用。

如果寻求高创意，追求Vibe coding（氛围编程），不害怕出错，只作为反馈者与需求提出者，完全可以只使用Claude-3.7-thinking。

如果需要安全性与高效率，Gemini作为架构师，Claude作为工程师，个人作为链接者的组合，我认为是很不错的。
