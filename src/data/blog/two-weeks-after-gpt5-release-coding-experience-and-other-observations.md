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

Regarding model selection in **AI Coding**, based on recent actual usage in Augment, my conclusion is: GPT-5 performs better in `cost-effectiveness, complex task completion, and reliability`, especially suitable for development scenarios with certain complexity that require careful handling. It not only provides capabilities close to Claude-Sonnet-4 at a lower price, but also performs better in `fuzzy requirements, cross-file modifications, and long context` maintenance.

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

In multiple comparisons, I clearly felt its advantages: `more stable instruction following`, especially when emphasizing "minimal changes," violations are fewer, and it maintains `better semantic consistency` in large context environments.

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

Then, a `perspective of examining and detached metacognition` will be very important.

Specifically, when you can stand on a `rational perspective to examine` a thing, plan, task, or person, describe it with rational language, and place it in the constructed prompt (context) world, some force will naturally hit the logical associations between certain vectors.

LLMs find the better ones from countless paths. Through detailed **meta-prompts**, they have the ability to spawn unexpected aha moments.

Past approaches (prompt engineering) were to provide as clear instructions as possible and a few examples (few-shot learning). But this is just teaching AI how to imitate.

This metacognitive approach is a higher-dimensional strategy: it's building a `complete, logically self-consistent scenario` for it.

GPT-5 in this situation has an indescribable ability. Powerful association and reasoning capabilities, conducting `deep exploration` along the laid-out logical paths. It's like solving a clearly defined problem, not a fuzzy request.

This isn't to say it has "self-awareness"—it's still pattern matching. But `long context consistency, low hallucination rate, instruction stability` makes its handling of global context and detail constraints rise by an order of magnitude.

This will bring about `intelligent emergence of human-machine collaboration`, the ability for humans and models to co-construct in context.
