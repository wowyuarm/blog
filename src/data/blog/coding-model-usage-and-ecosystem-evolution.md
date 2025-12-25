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
