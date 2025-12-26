---
title: The Trinity of AI Coding and Context Engineering
description: How do we design a runnable cognitive environment and operating system for AI? We need to know not only what to do, but also how to make AI understand.
pubDatetime: 2025-07-04T07:29:28.000Z
tags:
  - AI/coding
  - AI/context
---

AI coding requires a **trinity**. I'm not inclined to call it vibe coding, although this process can be fully automated. However, the most important part is the continuous communication and dynamic adjustment optimization process.

- The requirement proposer and current integrator (human core);
- The architect who understands the requirements and has **complete context** of the project from 0 to 100 (Gemini-2.5-pro);
- The engineer who can specifically execute the architect's requirements (I currently prefer using the VS Code plugin Augment).

Both the architect and engineer are AI. Every system prompt must be **customized for specific projects** and kept **dynamically updated in real-time**. Remember not to use generic architect or engineer prompts. This can also be achieved by continuously communicating with AI to clarify direction and requirements. What's needed is constant iteration.

Through this structure, an individual can completely run a relatively complex project, not just ordinary frontend web pages.

This process essentially requires individuals to exercise **top-level design and specific choices**, demanding high individual capability and high selection costs; the architect AI focuses on architecture, functional implementation, logical completeness, and reasonable design, facing issues like possibly insufficient understanding of the latest technical documentation, inadequate knowledge updates, and more serious hallucination problems; the engineer AI focuses on executing tasks given by the architect AI, with problems also including knowledge update issues, etc.

Additionally, there's information loss and errors from mutual transmission, and even small hallucinations causing larger errors.

This can also be **transferred** to other fields. For example, in film and video production. The most important thing is still to let AI understand comprehensively—they know much more than we do. How to extract it? In the past, this was actually so-called prompt engineering, but this is not enough. How to **transmit sufficiently accurate context** is the most important.

---

This process is the manual practice of **Context Engineering**. After automation, it becomes the artistic expression of context engineering.

After [vibe coding](https://x.com/karpathy/status/1886192184808149383), [system prompt learning](https://x.com/karpathy/status/1921368644069765486), and [Software 3.0](https://x.com/karpathy/status/1935518272667217925), Andrej Karpathy proposed [Context Engineering](https://x.com/karpathy/status/1937902205765607626) (or more accurately, popularized it).

Tobi Lutke (Shopify CEO) described it as ["the art of providing all necessary context so that LLMs can reasonably complete tasks."](https://x.com/tobi/status/1935533422589399127)

First, back to system prompt learning. AK proposed that human learning often relies more on explicit prompts: we take notes, refine strategies, and use them to enhance memory and behavior. He sees this as the third paradigm: **System Prompt Learning**—models accumulate, store, and apply problem-solving strategies by editing system prompts.

AK previously gave a speech at YC, viewing System Prompt Learning as an important component of the Software 3.0 era, i.e., treating prompts as programs and giving them autonomous growth capabilities. He believes system prompts will become AI's notebooks, continuously accumulating experience and problem-solving strategies.

Before returning to `Context Engineering`, let's look at prompts—what they specifically mean won't be explained in detail; then to prompt engineering, which is essentially the engineering practice of continuously optimizing prompts.

The most important optimization is the prompt with the role of system, not just user_input_prompt. Typically, it defines roles, describes environments, task requirements, etc.

Now, as **long-term memory**, **tool usage**, etc., continuously become necessary, how can a originally stateless LLM possess these elements? This is achieved by injecting them into the system prompt. Prompt engineering treats fixed prompts as dogma; but now, the system prompt must become a **dynamically changing**, **dynamically developing**, continuously iterating and optimizing operating system.

I believe the implementation of system prompt learning and context engineering is similar, i.e., through engineering means (even adding multiple models with different functions) dynamically constructing a `structured, continuously optimized system prompt`, one containing role definitions, memory (conversation history, long-term memory), tool descriptions and parameters, external knowledge injection (RAG, tool return results), current state and task instructions, etc.

Prompts should no longer be viewed as simple strings, but as structured, dynamically generated **miniature operating systems** containing the entire world model (current system). LLMs are the CPUs running on this operating system.

---

Our hippocampus and neocortex are responsible for storing facts, experiences, and skills. Through specific modules injected into the system prompt. Forming the **basic personality**.

Our attention mechanisms and associative networks. They determine which most relevant information we recall from vast memory when facing a problem. RAG and other technologies perform semantic similarity retrieval and return to the LLM brain. LLMs autonomously call tools to return content.

Do LLMs need specific personalities? They can have them. Will it affect output quality (such as requiring high accuracy)? Not necessarily. When executing tasks, conversation history and long-term memory with users are not needed, so don't inject them; when we humans focus, we don't recall the past unless we get distracted. Is distraction a deeper optimization?

Our **working memory** and prefrontal cortex are responsible for integrating `sensory input, short-term memory, and long-term memory`, forming the current focus of thought. How does the brain assemble that system prompt? Can engineering means achieve similar functions?

---

So, essentially, we have been discussing an `information orchestration system` for our collaboration with AI, and future AI-AI collaboration.

True Context Engineering is not simply an upgraded version of Prompt Engineering, but redefines the information interface between humans and AI, and between AIs. This system requires:

- On-demand injected `context and memory`;
- `Precise, low-loss` transmission between task objectives and execution details;
- Transition between different roles and capabilities.

Perhaps compared to software engineers designing complex software systems, AI engineers design `how to communicate` between AI and humans, between AIs, `how context is shared and transmitted`, `respective tasks and specific collaboration processes`. How do we design runnable cognitive environments and operating systems for AI? We need to know not only what to do, but also how to make AI understand.

<!-- zh-CN -->

AI coding 需要**三位一体**，我并不倾向于将其叫作 vibe coding，当然，这套流程完全可自动化，但是就是不断沟通、动态调整优化的过程最重要。

- 需求提出者与现阶段的整合者；（人类核心）
- 知晓理解需求并有着项目从 0 到 100 **全部上下文**的架构师；（Gemini-2.5-pro）
- 能够具体地执行架构师要求的工程师（我目前更倾向于使用 VS code 的插件 Augment）。

架构师与工程师均是 AI，每一个 system prompt 都要针对**具体项目具体定制**，并保持**实时动态更新**。切记不要使用通用的架构师或工程师 prompt 。这也可以通过与 AI 进行交流不断明确方向与需求。需要的也是不断的迭代。

通过这样的结构，个体完全可以运行一个较为复杂的项目，而不是普通前端网页页面。

这套流程本质是要求个人发挥**顶层设计与具体选择**，对个体能力要求高、选择成本高；架构师AI专注于架构、功能实现、逻辑完整、设计合理，面临着可能对最新技术文档不够了解、知识更新不到位等问题，还有更严重的幻觉问题；工程师AI则专注于执行架构师AI给出的任务，问题也在于知识更新的问题等问题。

同时，还有就是相互传递带来的信息损失与误差，甚至是小的幻觉造成更大的错误。

这同样可以**迁移**到其他领域。比如制作影视作品中。最重要的还是让AI了解全面，他们懂得比我们多得多，如何提取出来？这在过去其实就是所谓的提示工程（prompt engineering），但这还不够，如何**传递足够准确的上下文**才是最重要的。

---

这套流程是**上下文工程**（Context Engineering）的手动实践。自动化后，就成了上下文工程的艺术体现。

继 vibe coding、system prompt learning、Software 3.0 后，Andrej Karpathy 又提出了 Context Engineering（准确地讲是带火了）

Tobi Lutke（Shopify CEO）将其描述为"提供所有必要的上下文，让 LLM 能够合理地完成任务的一门艺术"

先回到 system prompt learning ，AK 提出，人类学习往往更依赖显式提示：我们写笔记、提炼策略，并以此增强记忆与行为。他将这视为第三范式：**系统提示学习**（System Prompt Learning）—— 模型通过编辑系统提示来累积、存储并运用解决问题的策略。

AK 之前在 YC 的演讲，将 System Prompt Learning 视为 Software 3.0 时代的重要组成，即：将 prompt 视作程序，并赋予其自主成长能力。他认为系统提示将成为 AI 的笔记本，不断积累经验与问题解决策略。

再回到 `Context Engineering` 之前，我们先看 prompt，具体是什么含义就不多解释；再到提示词工程（Prompt Engineering），本质就是不断优化 prompt 的工程实践。

最重要优化的是那个 role 为 system 的 prompt，不只是 user_input_prompt。通常，其定义角色、描述环境、任务要求等等。

现在，随着**长期记忆**、**工具使用**等不断成为必需的，如何能够让一个原本无状态的 LLM 具备这些要素呢？这就是通过注入到 system prompt 中去实现，prompt engineering 将固定的 prompt 奉为圭臬；而现在，system prompt 必须成为**动态变化**、**动态发展**，不断迭代与优化的一个操作系统。

我认为 system prompt learning 与 context engineering 的实现是类似的，即通过工程手段（甚至可以添加多个不同作用的模型去进行）动态地构建一个`结构化、不断优化的 system prompt`，一个包含角色定义、记忆（历史对话、长期记忆）、工具描述与参数、外部知识注入（RAG、工具返回结果）、当前状态与任务指令等等。

不应再将 Prompt 视为一个简单的字符串，而应将其视为一个结构化的、动态生成的、包含了整个世界模型（当前系统）的**微型操作系统**。LLM 就是运行在这个操作系统之上的 CPU。

---

我们的海马体与新皮层，负责存储事实、经验和技能。通过特定模块注入到 system prompt 中。构成**基础人格**。

我们的注意力机制与联想网络。它决定了我们在面对一个问题时，会从庞大的记忆中想起哪些最相关的信息。RAG等技术，进行语义相似度检索并返回到 LLM大脑。LLM 自主调用工具返回内容。

LLM 是否需要特定人格？可以有。会不会影响输出质量（如要求高度准确性）？并不一定。在执行任务时，并不需要与用户的对话历史与长期记忆，那就不要注入；我们人类在专注时，并不会回想起过去，除非走神。走神又是否是一种更深层次的优化呢？

我们的**工作记忆** (Working Memory) 与前额叶皮层，负责整合`感官输入、短期记忆和长期记忆`，并形成当前的思考焦点。大脑是如何进行拼接那个 system prompt 的？工程手段能否实现类似功能？

---

所以，本质上我们一直在探讨，我们与 AI 协作、未来 AI与AI 协作的一套`信息编排系统`。

真正的 Context Engineering 不是简单的 Prompt Engineering 的升级版，而是重新定义了人与 AI、AI与AI 之间的信息接口。这套系统要求：

- 按需注入的`上下文和记忆`；
- 在任务目标与执行细节之间`精确、低损耗`的传递；
- 不同角色、能力间进行过渡。

这也许对比软件工程师去设计复杂软件系统，AI工程师则去设计AI与人、AI与AI之间的`如何沟通`、`上下文如何共享与传递`、`各自的任务与具体的协作流程`。我们如何去为 AI 设计可运行的认知环境和操作系统？我们不仅需要知道要做什么，还要知道要让 AI 如何知道。
