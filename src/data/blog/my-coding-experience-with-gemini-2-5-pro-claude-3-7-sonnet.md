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
