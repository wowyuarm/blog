---
title: "Two Weeks After GPT-5 Release: Coding Experience and Other Observations—Product, Metacognition"
description: Two weeks after GPT-5 release, observations on AI coding model selection, metacognition capabilities, and product strategy in the AI era.
pubDatetime: 2025-08-21T05:18:00.000Z
tags:
  - AI/model
  - AI/coding
  - AI/philosophy
  - synthesis
---

Regarding model selection in **AI Coding**, based on recent actual usage in Augment, my conclusion is: GPT-5 performs better in **cost-effectiveness, complex task completion, and reliability**, especially suitable for development scenarios with certain complexity that require careful handling. It not only provides capabilities close to Claude-Sonnet-4 at a lower price, but also performs better in **fuzzy requirements, cross-file modifications, and long context** maintenance.

[Cline official evaluation](https://cline.bot/blog/gpt-5):

> - Thorough and comprehensive during planning, concise and crisp during execution
> - Good at asking precise clarification questions, providing multiple options at appropriate times
> - Possesses strong memory and continuous tracking capabilities with 256k context window
> - Skilled at diff-style editing and multi-file collaborative changes (will continue to optimize)
> - Execution mode is silent and focused—code output without redundant information

[Augment Code](https://www.augmentcode.com/blog/gpt-5-is-here-and-we-now-have-a-model-picker) testing also points out that GPT-5 is better at cross-file refactoring, complex debugging tasks, performs stably in large contexts, and is especially suitable for small-scale modifications requiring higher robustness and completeness;

From my own usage, GPT-5 in Augment is indeed more reliable when **handling problem debugging, multi-file editing, and careful logic adjustments**, with `fewer hallucinations`, and `summary quality` (detailed reports after each task completion) is also very practical.

When GPT-5 was first released, I briefly tried it, but due to being accustomed to Claude's response style (point-and-shoot, no need to care about implementation), I temporarily couldn't adapt to its `more cautious` pace. At that time, I preferred using Claude-Sonnet for feature development tasks because it **responds fast, modifies directly, and is very efficient when intentions are clear**.

But there were some bugs that Claude couldn't solve, so I returned to GPT-5. Its response speed is slow (background inference), but the effect is excellent. It always handles bugs with minimal changes, doesn't introduce over-design components, and reasonably optimizes other related parts (one modification affects multiple places, able to find the problem).

In multiple comparisons, I clearly felt its advantages: **more stable instruction following**, especially when emphasizing "minimal changes," violations are fewer, and it maintains `better semantic consistency` in large context environments.

In terms of Coding, GPT-5 is suitable for both vibe coding—handing over tasks to it, even with fuzzy requirements, it can handle them well—and pair programming, discussing with it bit by bit, and implementing after detailed planning.

However, Claude still has irreplaceable capabilities, especially with Claude Code enhancement.

---

Has GPT-5's reputation reversed? I don't think so.

When it was first released, I thought GPT-5 was a good product, an intelligent routing selection model, but not a good model.

No longer the surprise of GPT-4, no longer the reasoning paradigm of o1.

The "failure" of GPT-4.5 (although this model is very useful), researchers leaving...

OpenAI is no longer an AI lab, but a **product company** with the ambition to replace Google.

Although GPT-5 still has noteworthy points, especially the recent experience under Coding.

At the same time, **fewer hallucinations** is also a very good point. All GPT-5 series models (thinking, mini, nano) have significantly reduced hallucinations.

---

On the other hand, GPT-5 has unique aspects in **metacognition**.

I believe a capability is crucial in the AI era. Providing context for stateless LLMs, the more detailed, the more outstanding the ability. But we need to avoid the drawbacks brought by few-shot examples.

Then, a **perspective of examining and detached metacognition** will be very important.

Specifically, when you can stand on a `rational perspective to examine` a thing, plan, task, or person, describe it with rational language, and place it in the constructed prompt (context) world, some force will naturally hit the logical associations between certain vectors.

LLMs find the better ones from countless paths. Through detailed **meta-prompts**, they have the ability to spawn unexpected aha moments.

Past approaches (prompt engineering) were to provide as clear instructions as possible and a few examples (few-shot learning). But this is just teaching AI how to imitate.

This metacognitive approach is a higher-dimensional strategy: it's building a `complete, logically self-consistent scenario` for it.

GPT-5 in this situation has an indescribable ability. Powerful association and reasoning capabilities, conducting deep exploration along the laid-out logical paths. It's like solving a clearly defined problem, not a fuzzy request.

This isn't to say it has "self-awareness"—it's still pattern matching. But **long context consistency, low hallucination rate, instruction stability** makes its handling of global context and detail constraints rise by an order of magnitude.

This will bring about intelligent emergence of human-machine collaboration, the ability for humans and models to co-construct in context.

<!-- zh-CN -->

关于 **AI Coding** 中的模型选择，基于近期在 Augment 中的实际使用，我的结论是：GPT-5 在**性价比、复杂任务完成度和可靠性**上表现更优，尤其适合有一定复杂度、需谨慎处理的开发场景。它不仅以更低价格提供了接近 Claude-Sonnet-4 的能力，还在**模糊需求、跨文件修改和长上下文**维护方面更为出色。

[Cline 官方评价](https://cline.bot/blog/gpt-5)：

> - 规划时详尽周全，执行时简洁利落
> - 善提精准澄清问题，适时提供多选项方案
> - 具备256k上下文窗口的强记忆与持续追踪能力
> - 擅长差异比对式编辑及多文件协同更改（将持续优化）
> - 执行模式静默专注——代码产出不伴冗余信息

[Augment Code](https://www.augmentcode.com/blog/gpt-5-is-here-and-we-now-have-a-model-picker) 测试也指出，GPT-5 更擅长跨文件重构、复杂调试类任务，在大型上下文中表现稳定，尤其适合对稳健性和完整性要求较高的小规模修改；

从我自己的使用来看，GPT-5 在 Augment 中**处理问题debug、多文件编辑、谨慎逻辑调整**时确实更可靠，幻觉少，总结质量（每次任务完成后的详细报告）也很实用。

最初在 GPT-5 刚发布时我曾短暂试用，但由于习惯 Claude 的响应风格（指哪打哪，无需关心实现），一时未适应其较谨慎的节奏。当时我在功能开发类任务中更倾向使用 Claude-Sonnet，因它**响应快、修改直接，在意图明确时效率很高**。

但有一些bug，Claude无法解决，我重新回归 GPT-5，其响应速度慢（后台推理），但是效果优秀，总是最小化能够处理bug，且不引入过度设计成分、合理优化其他相关部分（一处修改影响多处，能够找到问题）。

在多次对比中我明确感受到它的优势：指令遵循更稳定，尤其强调"最小变更"时违反情况更少，且在大上下文环境中保持更好的语义一致性。

在Coding方面，GPT-5既适合vibe coding，交由其任务，哪怕是模糊的需求，也能够处理得不错；也适合结对编程，和他一点点讨论，详细的规划后实施。

不过，Claude 仍然有着不可替代的能力，尤其是 Claude Code 加持下。

---

GPT-5风评反转了吗？我想并没有。

刚发布那时我就认为 GPT-5 是一个好产品，智能路由选择模型，但不是一个好模型。

不再是 GPT-4 的惊讶，不再是 o1 的推理范式。

GPT-4.5 的"失败"（尽管这个模型很好用），研究员离职...

OpenAI 不再是 AI lab，而是一家有着取代 Google 的野心的**产品公司**。

尽管GPT-5仍有可圈可点之处，尤其是近一段时间的 Coding 下的体会。

同时，**幻觉少**也是一个很好的一点。GPT-5全系列模型（thinking、mini、nano）幻觉都大幅下降。

---

另外一方面，GPT-5在**元认知**方面有独特之处。

我认为一种能力在 AI 时代至关重要。为无状态的 LLM 提供上下文，越详细能力越出色。又要避免少样本示例带来的弊端。

那么，一种**审视与抽离的元认知**视角将很重要。

具体讲，当你能够站在一个理性视角审视一件事、计划、任务、一个人，用理性语言将其描述，放在构建的 prompt（上下文）世界中，自会有某种力量切中某些向量间的逻辑关联。

LLM 从无数路径中找出较优的那些，通过详细的**元提示**，有能力催生出超出意外的aha moment

过去的思路（提示词工程，prompt engineering）是尽可能提供清晰的指令和几个例子（少样本学习）。但这只是在教 AI 如何模仿。

而这种元认知方法，是更高维的策略：是在为它构建一个完整的、逻辑自洽的场景`。

GPT-5 在这种情况下，有着说不清的能力。强大的关联和推理能力，沿着铺设的逻辑路径进行深度探索。就好像在解决一个被明确定义的问题，而不是模糊的请求。

这并不是说其有了"自我意识"，仍然是模式匹配。但**长上下文一致性、低幻觉率、指令稳定性**使得其处理全局上下文、细节约束都上升了一个量级。

这会带来一种人机协作的智能涌现，人类与模型在上下文中共建的能力。
