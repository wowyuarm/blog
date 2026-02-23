---
title: Context, Scaffolding, and Simplicity in Agent Design
description: Questioning the full-context approach for agents, exploring progressive disclosure vs. pre-built context, and reflecting on simplicity as a guiding principle in agent architecture and collaboration.
pubDatetime: 2026-02-10T12:00:00.000Z
tags:
  - AI/coding
  - AI/context
  - AI/philosophy
slug: context-scaffolding-and-simplicity-in-agent-design
---

Recently I've been questioning the approach of giving agents a global mental model — or rather, full upfront context. Progressive disclosure and dynamic context construction are becoming the consensus.

Claude Code's overall design and its subsequent introduction of skills are leading this consensus — grep over RAG, progressive disclosure, and so on — all emphasizing agentic capability, letting the model choose for itself. The same can be seen in recent context design choices in projects like OpenClaw.

What's counterintuitive is this: giving a model a large chunk of context and letting it choose should theoretically open up many possibilities. Yet the problem is that the scaffolding provided to the model — tools — inherently constrains the action space. The pi-mono framework has gained favor precisely because it gives the agent only four tools: three file operations (read, write, edit) and bash, with skills as separate capability extensions.

The fundamental question: do you assemble context and let the model choose a path, or do you let the model build its own context and further expand the path?

Framed this way, the latter is naturally superior. But in practice, the tradeoff is hard to navigate. The former demonstrably leads to narrow, repetitive patterns of model behavior.

---

Model agentic capabilities are becoming increasingly generalized. The approaches proven by coding agents are now driving the next generation of assistants.

I previously used a language/workflow system to modularize any codebase into documentation, writing it into agents.md/claude.md to declare what the agent should consult before coding — rather than relying on multi-turn grep or spending significant resources understanding the task within limited tool-call budgets.

Since GPT-5.2, Codex can run continuously for extremely long periods. Opus 4.5 and 4.6 are even more powerful — refactoring mid-scale open source projects in thirty minutes to an hour of continuous execution, delivering solid results. Across the entire task, research ends up being a small fraction. Stuffing project documentation into context separately becomes wasteful.

---

At the same time, I've mostly just opened multiple windows without actually delegating multiple tasks — spending more time in discussion and exchange. I've never tried multi-task concurrency tools like Conductor. I simply can't bear the cognitive load of too many agent deliveries. That approach tends to massively accelerate the "how," but focusing on "what" and "why" becomes increasingly difficult — and increasingly important. Of course, if tasks are fully concrete and results clearly verifiable, multi-task efficiency and rapid validation are perfectly justified.

Trust model capabilities. Protect your own cognitive load.

Keep it simple. Not just in what you ask of agents — like requiring modular, composable code for future extensibility — but in the agent architecture itself. pi exemplifies this. And in collaborating with agents too: simplicity and meeting the need come first.

<!-- zh-CN -->

最近对于给 agent 全局心智模型，或者说是全面上下文这种方式存疑，或者讲是渐进式披露、动态构建上下文正在成为共识。

Claude Code 的整体设计与后续 skills 等的推出也在引领共识，比如 grep 非 RAG、渐进式披露等，都在强调 agentic 能力，让 model 自己选，包括近来的 OpenClaw 中的一些 context 设计。

比较反直觉的是，一大段上下文让 model 自行选择，按理说应该有很多种可能，然而问题就在给 model 的脚手架如 tools 本身就限制了动作空间。pi-mono 框架受到青睐，其只给 agent 4 种工具，三个文件上的 read、write、edit 与 bash，然后是 skills 的单独能力扩展。

到底是组建好 context 让 model 选择路径，还是让 model 自己构建 context 进一步拓展路径。

这样讲下来自然后者更优，但在设计时很难去权衡。前者实践上的确让 model 行动空间单一，重复性的形式。

---

model 的 agent 能力越来越泛化，过去 coding agent 已先验的方式也驱动着接下来的 assistant。

之前曾用一套语言/工作流来模块化任何代码库成文档，以此写入 agents.md/claude.md 来声明 agent coding 前调用查看，而不只是多轮 grep 或在有限的工具调用次数下花大量资源先了解任务。

从 GPT-5.2 后，Codex 能连续运行极长时间、Opus 4.5、4.6 更加强大，重构中等规模的开源项目半小时、一小时连续运行不在话下，最终交付也很好。在整个任务完成中，调研反而占比很小，单独去塞项目文档又太浪费 context。

---

同时，我最多只是多开窗口但未曾多委托任务，而更多在探讨与交流。一直未曾尝试如 Conductor 等多任务并发，实在负担不了太多 agent 的交付，往往那样只是把"如何做"极大加速，关注"是什么"与"为什么"越来越难，也越重要。当然，如果任务全部具象化且结果验证明确，那多任务提效与快速验证也无可厚非。

相信模型能力、保护好自我心智负担。

保持简洁。不止是要求 agent 上，如要求其写代码模块化可组合等方便未来拓展；也是 agent 本身架构上，pi 即为如此；与 agent 协作亦是，简洁与满足需求是首要的。
