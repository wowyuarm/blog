---
title: Coding Model Usage and the Divergence and Convergence of Model Ecosystems
pubDatetime: 2025-10-13T06:44:00.000Z
slug: coding-model-usage-and-ecosystem-evolution
description: An exploration of coding model usage patterns, the differentiation and convergence of model ecosystems, and the evolving landscape of AI reasoning and agentic capabilities.
tags:
  - AI/model
  - AI/coding
---

I've been using 4.5-sonnet on Cursor recently, and Cursor's product experience has been polished exceptionally well. From planning to execution, paired with very fast 4.5, both task completion and code quality are excellent in long tasks—perhaps it's the powerful model, but the UI/UX is truly unique.

A major complaint is that it loves writing documentation too much, while augment enjoys writing tests. The same model shows different characteristics under different prompts through in-context learning. In this regard, [Claude Code](https://claude.com/product/claude-code) is impeccable.

In terms of file search commands in the terminal, the success rate and efficiency of calling them are far inferior to cc—it often can't find needed files, and insufficient context acquisition is unfriendly for exploratory tasks.

Under TDD and detailed prompt specifications, whether it's a coding agent or CLI, capabilities differ little. Open source models like GLM, DeepSeek, and Kimi are already sufficiently usable when integrated into cc.

However, Cursor is very suitable for vibe coding, especially when paired with Claude.

Of course, I still prefer converting vague requirements into verifiable goals through documentation/specifications, combined with execution feedback loops.

What's important isn't wanting a certain effect, but thinking about and weighing how to implement it within the existing architecture, comprehensively considering the project's long-term development, gradually clarifying it through exploratory communication, and transforming it into specific requirements for quick implementation and verification through AI.

---

One can perceive the shifting sentiment regarding model capabilities, with more developers choosing GPT-5-high or GPT-5-codex.

Model capability improvement has reached a state where, in certain identical task sets, environments beyond model capabilities such as context and toolsets are completely identical, and task completion and quality levels differ little.

Some model series, purely in terms of capabilities, have long been dominated by Claude in coding (broadly speaking, tool calling), while the o-series models always produce unexpected results in reasoning (representative examples include deep research and meta-cognition, among others). (Which model do I like best? Without a doubt, Gemini)

claude-3.5-sonnet represents a powerful autonomous capability, followed by the reasoning paradigm introduced by o1.

Other representative open-source models that have emerged from behind include R1 and K2, which are respectively reasoning and agentic. Reinforcement learning of language models has become a consensus—first reasoning, then agentic.

In terms of effectiveness, 3.5-sonnet leads in agentic versions with astonishing results and continues to iterate and persist; however, the lack of reasoning capability is the price of this aspect, and although the later 3.7 series introduced a hybrid reasoning mode, the comprehensive effect is average.

It's known that the Opus series are models with long reasoning times and powerful reasoning capabilities, combined with agentic abilities, yet cost remains an insurmountable hurdle.

The GPT-5 series brings new changes: routing brings the powerful reasoning of the o-series, enhanced agentic capabilities after version validation, additional cost control—reversing sentiment perfectly.

Whether in my actual use of the GPT-5 series in coding tasks (especially high) or from the community perspective, its capabilities are excellent in complex codebase development and bug fixing (especially autonomous error correction).

The sonnet series models have become an accessory, used for quickly updating tests, completing small changes, and following detailed tasks (detailed specifications, such as SDD, TDD).

The synthesis of reasoning and agentic is becoming the next consensus. From the subsequent minor version series of deepseek-v3, v3.1-think replacing R1, and v4 definitely representing the powerful synthesis of reasoning and agentic, combined with consistent cost, there's no doubt it will be highly competitive and represent the consensus of reasoning and agentic.

Before that, the next most anticipated series is undoubtedly the Gemini-3 series.

<!-- zh-CN -->

最近 4.5-sonnet 都是在 cursor 上用的，cursor 产品体验打磨得很不错，从 plan 到执行，配合非常快的 4.5，长任务下不管是任务完成度、代码质量都很好，或许还是模型强大，但 UI/UX 独一份。

很大的槽点是太爱写文档，而 augment 却很喜欢写测试，同一个模型却在 prompt 下通过上下文学习表现出不同的特性。这方面对比 cc，后者无可挑剔。

在终端关于文件搜索命令方面，调用成功以及效率远不如 cc 高，总是搜不到需要的文件，获取不够的上下文进行工作对于探索型任务不够友好。

在 TDD 与细致化 prompt 规范下，无论是 coding agent、CLI ，能力都相差不大，而开源模型 glm、deepseek、kimi 接入 cc 中都已足够可用。

不过 cursor 非常适合 vibe coding，尤其是和 claude 搭配。

当然，我仍然更喜欢文档/规范把模糊要求转成可验证的目标，配合执行反馈闭环。

重要的不是想要某种效果，而是思考权衡如何在现有架构中实现这种效果，并综合考虑项目长远发展，在探索沟通中逐渐明晰，将其转化为具体要求并通过 AI 快速实现作验证。

---

能够感受到模型能力风评的转向，更多开发者选择 GPT-5-high 或者 GPT-5-codex

模型能力的提升已经达到这样一种状态：在某些相同任务集中，上下文与工具集等模型能力外的环境完全相同，任务完成度与水平相差不多。

有的模型系列仅就能力而言，长久以来比如 Claude 在 coding （广义上是工具调用）占据上风，o 系列模型在推理方面总有出乎意料的效果（代表性的 deep research、还有元认知等）。（我最喜欢哪个模型？毋庸置疑 Gemini）

claude-3.5-sonnet 代表一种强大的自主能力，随后又有 o1 引入的推理范式。

后来居上的其他有代表性的开源模型，R1、K2，分别是推理与 Agentic，语言模型的强化学习已成为共识，先是推理再是 agentic

从效果而言，3.5-sonnet 在 agentic 方面版本领先，效果惊人，并继续迭代，不断延续下来；然而，推理能力的欠缺也是这方面的代价，尽管后来 3.7 系列推出了混合推理模式，但综合效果一般。

可以知道，Opus系列就是推理时间长且推理能力强大的模型，并结合 agentic 能力，然而，成本始终是过不去的坎。

GPT-5 系列带来新的变化，路由带来的 o 系列的强大推理，经过版本验证后的 agentic 能力的加强，成本的额外控制，恰到好处风评能够逆转。

不管是我在 coding类任务实际使用 GPT-5 系列（尤其是 high），还是社区方面，就复杂代码库的开发与 bug 修复（尤其是自主纠错），其能力卓越。

sonnet 系列模型却成为了一种附属，用来快速的更新测试、完成小的更改、遵循详细的任务（细致化规范的，比如 SDD、TDD）。

推理与 agentic 的综合正成为下一个共识，从 deepseek-v3 后续小版本系列的模型，同时取代了 R1 的 v3.1-think，v4 一定代表着推理与 agentic 的强大综合，综合一贯的成本，毫无疑问将极具竞争力并代表 reasoning 与 agentic 的共识。

在这之前，下一个更具期待性的无疑是 Gemini-3 系列。
