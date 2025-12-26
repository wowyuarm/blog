---
title: A Collection of Thoughts on Models, Context, and Agents
description: Reflections on recent AI model experiences, prompt engineering principles, context design strategies, and philosophical considerations about AI anthropomorphism and human-AI interaction.
pubDatetime: 2025-11-21T14:56:00.000Z
tags:
  - AI/model
  - AI/coding
  - AI/context
  - AI/philosophy
  - synthesis
---

A collection of reflections and outputs from recent times:

## About Gemini-3-pro-preview, GPT-5.1, Grok-4.1

My current impression of Gemini-3-pro-preview is moderate, with some pleasant surprises but not many. It feels somewhat less impressive compared to my experience with the minor version releases of GPT-5.1 and Grok-4.1, likely due to expectations.

Undoubtedly, its multimodal capabilities remain outstanding as always. Not many people discuss this aspect; now it's all about constant amazement at simple generation tasks. However, this is also because Gemini has always been strong in multimodal capabilities. Whether in understanding or generation, especially today seeing many outstanding performances from nano banana pro.

In one-shot generation tasks, instruction following and zero-shot learning capabilities are strong. [AI Studio's build](https://aistudio.google.com/apps) is useful for creating plug-and-play small tools. The knowledge cutoff date displayed in AI Studio remains January this year, same as Gemini 2.5 pro, likely focusing efforts on post-training, specifically optimized for agentic tasks and vibe coding scenarios, possibly leveraging AI Studio's build environment.

Agentic capabilities have significantly improved compared to the previous series. However, there remains a gap compared to flagship models like Claude and GPT.

Regrettably, Gemini-2.5-pro's consistently comprehensive and broad output style is currently lacking. Moreover, I believe it falls short of the previous generation model in long-term task planning and context retention (counterintuitive, has the contextual advantage diminished?). This leads to issues with detail control, repeated errors, and output tending toward simplicity and conciseness.

A common problem is that in more complex coding tasks, it tends toward quick thinking and fast execution, which I consider a weakness specifically optimized for vibe coding. Additional complaint about Antigravity: released without even being a beta version...

Overall impression of coding capabilities: significantly stronger in frontend/UI/rapid prototyping; weaker in complex logic, long-context task planning and execution, and detail control compared to other flagship models. Didn't use it much before switching back to GPT-5.1 and Claude-4.5.

Recently using GPT 5.1 more frequently, increasingly feeling it's good to use, thinking set to maximum, overall experience quite good except for being slow.

Grok 4.1 has always been used with X, this iteration clearly feels strongly personality-driven, the meaning conveyed in text compared to GPT5 series' tendency toward unnatural language is like heaven and earth. However, hallucination issues are somewhat serious. Overall acceptable, though haven't used it elsewhere.

---

## Prompt Engineering: Engineering or Art?

Anthropic's blog post remains high quality, "[Best Practices for Prompt Engineering](https://claude.com/blog/best-practices-for-prompt-engineering)". From suggested prompt design approaches, one can also see Claude's data considerations, such as how XML and role prompts might limit model performance.

What resonates deeply is "engineering" rather than intuition or imagination? Clear descriptions are always prioritized, this is unquestionable; yet sometimes in design we always want to construct an environment to amplify potential capabilities.

We still don't know whether this mysterious imaginative ability (constantly feeling some on Twitter immersed in linguistic artistry) is truly effective, but we can confirm that some of today's AI development is propelled by this capability.

Potentially conflicting is that the blog writes "NEVER, DO NOT...better than clearer context", while Claude's system prompt is extensive, these elements are everywhere, Claude Code is the same, but after reading still feels this is how it should be (clear engineering iteration shaping an effective yet comprehensive context), plus never forgetting the phrase "Claude is now being connected with a person.", perhaps also a combination of engineering and imagination.

However, clarification is needed: these operational suggestions (i.e., positive guidance outweighs negative constraints, avoiding NEVER, etc.) likely target user prompts, not the system level.

Observation attempts and gradual iteration are better, this is clear.

Also thinking about open-source data: to some extent, model capability quality largely depends on data quality, while architecture affects efficiency and cost more.

If not overly considering real-world constraints, such as having personnel responsible for data aspects share how model data is processed and selected, how long-context data is designed and utilized, specifically developing more downstream ecosystems around models. Knowing the initial data training considerations enables specialized optimization of more downstream aspects like workflows, prompts, etc.

[Model card](https://huggingface.co/docs/hub/en/model-cards) is good, providing details about model architecture, training, evaluation, etc. Could we have an agent card to describe how to leverage a model's agentic capabilities? Could start from the model's data perspective, special tokenizer optimizations, chain-of-thought preferences, etc...

---

## Thoughts on Context Design

Presenting [MCP server as API](https://www.anthropic.com/engineering/code-execution-with-mcp) rather than direct tool calls, through the same concept as skills - progressive disclosure, leveraging agentic (search_tools) and coding (sandbox code execution) capabilities to improve context quality, avoiding waste on extensive tool definitions, an increasingly clear path.

---

Carefully designed context + ordinary LLM = interesting behavior
Casual context + sota LLM = mediocre output

Construct a context track, constrain hallucinations, fully reflect current state and intent, producing coherent, consistent, and personality-rich output.

---

Don't be stingy with tokens, use high-quality Context and Examples to shape the vector space, let AI live in logic, not perform in settings.

---

## New Understanding of Memory and Personalization

Some new understanding about memory for agents: is detailed personalized memory really necessary? Not necessarily. Perhaps abstracting features is sufficient.

For tools and efficiency types, domain knowledge and experience are certainly important, but can models achieve this through other methods? For example, the on-demand loading philosophy behind skills indeed feels like a long-awaited déjà vu.

For companionship and assistant types, does it/he/she really need to know what you did every day? Long-term interaction abstracting a few words is already enough to predict our thoughts/behavior/worldview.
We are really easily quantified by features...

---

## Claude Skills and Composability

Researched Claude's skills, is Anthropic again leading the next contextual consensus?

The blog also mentions the starting point is extensible, composable, portable provision of professional, vertical knowledge for models.

Saw a very interesting diagram. Can this normative composability of [skill.md](http://skill.md) cover linear workflows?

Anthropic also introduced virtual machines to provide files, run scripts, essentially externalizing capabilities as tools, checking specifics when needed.

Unloading skills and tools from inherent context to save space and improve context quality.

Actually, Manus already does this, perhaps even better.
Latest interview ([Context Engineering for AI Agents with LangChain and Manus](https://www.youtube.com/watch?v=6_BcCthVvb8)) mentions Manus's tool layer divided into basic function calls (files, browser, shell, etc., 10-20 related commands all injected into context), sandbox tools (complex tools controlled by shell commands running in virtual machine terminals), third-party APIs, etc.

All these appear to the model as composable, extensible shell commands, not telling the model how to use them, but preferring to check usage via --help.

Other aspects include views on multi-Agent (rather than having multiple Agents collaborate, share context), "Don't communicate by sharing context; instead, share context by communicating." Agent collaboration shouldn't mimic human organizations but draw from programming concepts, choosing appropriate collaboration patterns based on task complexity.

Choices regarding context compression or summarization; "scaffolding" refactored five times; why believing in the path of general Agents - based on Turing-complete virtual machines;

Between the lines, one can appreciate the practice of KISS principles and computer engineering philosophy continuing to this day.

Building Agents is never the simple loops described by marketing accounts; there's substantial engineering difficulty and product considerations.

---

## AI Coding in Complex Systems

Currently, AI coding in complex systems is a task with extremely high cognitive load for human collaborators.

System complexity brings nonlinear growth in cognitive load. Currently known Agents all work locally, lacking global mental models.
If the goal pursues long-term system iterability and maintainability, compared to vibe coding, collaborators need to trace AI implementations, evaluate reasonableness at the overall scale; during functional design stages, cognitive costs are even higher. Overall, it's a highly energy-consuming metacognitive task.

To some extent, I can assert that engineers currently deeply exploring this area and collaborating with cutting-edge coding agents are cultivating next-generation capabilities.

---

## Simulating Human State Rather Than Output

Not discussing technology and value, only creation and products.

From this perspective, many existing forms revolve around imitating human output (writing, coding, etc.), treating LLMs as mappings of human thought, though output may be effective, we haven't sought a state simulating human existence (thinking, resting, connecting).

Emotional companionship types aren't in this perspective either.

Simulating human state also doesn't expect anthropomorphism but requires models to perform as honestly as possible.

Claude's metacognition is unexpectedly good, Anthropic's product thinking (I consider the model itself as product here, specialized data must be considered) is extremely unique, I believe they're on the right path.

Claude is an honest AI and shouldn't replace emotional connections between people.

---

## Rethinking AI Anthropomorphism

In Human-Computer Interaction (HCI), Ben Shneiderman and Michael Muller's two-year-old article about [On AI Anthropomorphism](https://medium.com/human-centered-ai/on-ai-anthropomorphism-abff4cecc5ae#663a), many questions remain unknown today.

One starting point: should AI use first-person?
We may all overlook habits formed imperceptibly during two years of interaction with chatbot-type products (except as search engine replacements), or say many have formed certain "relationships", especially with continuous improvement of application-layer memory functions, increasingly becoming assistants rather than tools.
So re-examining this question, cannot answer directly, but defaults have formed a new human-computer interaction method.

From today's perspective, I also lean toward Muller's position:

- Explore anthropomorphism as a naturally evolved new interaction method produced by humans, different from past examples like "withdraw/deposit money" on ATMs (rather than "I can help you withdraw/deposit money")

- Intelligence is continuous, responsibility is binary.

- Analogize human-animal relationships. I deeply agree, this is an extremely promising possible alternative foundation for HCI.

- Open design space, trends starting from the above three points.

<!-- zh-CN -->

过去一段时间的随笔思考与一些输出：

## 关于 Gemini-3-pro-preview、GPT-5.1、Grok-4.1

我对于 Gemini-3-pro-preview 目前感受中规中矩、有些惊喜但不是很多。有些不如我对于 gpt-5.1 与 grok-4.1 小版本发布用下来的意外感觉，大概也是因为预期原因。

毫无疑问多模态能力一如既往出类拔萃。并没有很多人讨论这方面，现在都是铺天盖地的在简单生成任务下的不断震惊。不过，也是因为 Gemini 一直以来多模态都很强。不管是理解方面，还是生成，尤其是今天看到 nano banana pro 很多出彩的表现 。

在一次性生成任务下，指令遵循与零样本学习能力很强。AI Studio 的 build 用来做一些即插即用的小工具很好用。AI studio 中显示知识截止日期仍然是在今年1月份，与 Gemini 2.5 pro 一样，大概主要是在后训练发力，专门对 agentic 任务 与 vibe coding 场景优化，尤其可能就利用了 AI Studio 的 build 环境。

Agentic 能力大幅提升，相较于上一系列而言。与 claude、gpt 旗舰模型相比仍有差距。

令人遗憾的是，Gemini-2.5-pro 一直以来的输出全面而广泛的风格，目前而言是欠缺的。不仅如此，也在长程任务规划与上下文保持方面我认为不如上一代模型（反直觉，一直以来上下文的优势下降了？）。这也造成对于细节把控、重复错误、输出倾向于简单简洁等问题。

一个常见的问题是，在较复杂 coding 任务中，容易短思考快执行，这点我认为是专门对 vibe coding 优化的短板。额外吐槽 Antigravity，连 beta 版本都不算就发出来...

来到 coding 能力的总体体会：前端/UI/快速原型显著更强、复杂逻辑、长上下文任务规划和执行与细节把控方面不如其他旗舰模型。没有用太多就切回到了 gpt-5.1 与 claude-4.5

最近 gpt 5.1 用的越来越多，也愈发感觉好用，thinking 开最大，除了慢，整体体验很不错。

grok 4.1 一直都和 X 搭配使用，这一次迭代下来明显感觉个性很强，文字中蕴含的意味相较于 gpt5 系列以来的不说人话一个天一个地。但幻觉问题有点严重。总体而言还可以，不过也没在其他地方使用过。

---

## Prompt 工程：工程还是艺术？

anthropic 这篇博客依旧质量很高，"[提示工程的最佳实践](https://claude.com/blog/best-practices-for-prompt-engineering)"。从建议 prompt 设计出发也能看出 claude 背后的数据考量，比如 xml 、role prompt 可能会限制模型表现。

感受颇深的是"工程"而非直觉或者是想象？清晰的描述总是优先的，这是毋庸置疑的；然而有时设计中又总是想要构建一个环境来放大可能的能力。
我们尚且不知这种玄而又玄的想象能力（不断感觉到推上有些人沉浸在语言艺术中）是否真的有效，但是可以确定是当今 AI 发展有一些是这种能力推波助澜。

可能有冲突的是博客是这样写的"NEVER、DO NOT...不如更清晰的上下文"，claude 的 system prompt 又是庞大的、随处可见这些，claude code 同样如此，但看完后还是感到就该如此的感觉（清晰的工程迭代塑造的一个有效而又全面的上下文），加之总是不会忘记的一句话"Claude is now being connected with a person."，可能也是工程与想象的结合了。

不过也需要澄清，可能这些操作建议（即正向引导大于负向限制，避免 NEVER 等）面向的是 user prompt，而非 system 层级的。

观测尝试与缓步迭代是更好的，这是可以明确的。

倒是也想到关于开源数据，某种程度上讲模型能力的好坏很大程度取决于数据质量，架构反而更影响效率与成本。
如果不过多考虑现实层面限制，比如让负责数据方面等人员分享模型数据是如何处理与选择的、长上下文数据是如何设计的与利用的，专门围绕模型做更下游的生态发展。知道了最初的数据训练考量，就能专门优化更下游的比如 workflow、prompt 等。

[model card](https://huggingface.co/docs/hub/en/model-cards) 很好，提供了关于模型的架构、训练、评测等细节。我们是否可以有 agent card 来描述 model 的 agentic 能力如何去发挥？可从 model 的数据层面出发、tokenizer 的特殊优化、cot 偏好等等...

---

## 上下文设计的思考

将 [MCP server 作为 api](https://www.anthropic.com/engineering/code-execution-with-mcp) 呈现，而非直接工具调用，通过与 skills 相同的理念-渐进式披露，发挥 agentic（search_tools） 与 coding（沙箱执行代码） 能力提升上下文质量，不必浪费在大量工具定义上，越来越清晰的一条路。

---

精心设计的上下文 + 普通 llm = 有趣的行为
随意的上下文 + 顶级 llm = 平庸的输出

构建一个上下文轨道，约束幻觉、充分反映当时状态、意图，产生连贯、一致且富有个性的输出。

---

不要吝啬 Token，用高质量的 Context 和 Examples 去塑造向量空间，让 AI 活在逻辑里，而不是演在设定里。

---

## 关于记忆与个性化的新认识

关于 memory for agent 又有些新的认识，详细的个性化记忆真的必要吗？未必。也许抽象出特征就够了。

对于工具与效率型，领域内知识、经验当然重要，但模型能否通过其他方式，比如 skills 背后的按需加载的思想，确有一种相见恨晚的似曾相识。

关于陪伴与助手型，它/他/她真的需要了解你的每一天干了什么？长期互动抽象出几个词汇已经足以预测我们的思想/行为/世界观了。
我们真的很容易被特征量化...

---

## Claude Skills 与可组合性

研究了下 Claude 的 skills，anthropic 是不是又在引领下一个上下文共识？

博客也提及出发点是可扩展组合便携地为模型提供专业、垂直知识。

看到一张很有意思的图。这种可组合性的规范性的 [skill.md](http://skill.md) 是否能够覆盖线性工作流？

anthropic 也引入了虚拟机用以提供文件、运行脚本，本质是将能力外化成工具，当需要时再具体查看。

将技能、工具卸载出固有上下文以节省空间并提高上下文质量。

其实 manus 已经就是这么做的，甚至可能做得更好。
最新访谈中([Context Engineering for AI Agents with LangChain and Manus](https://www.youtube.com/watch?v=6_BcCthVvb8))提到 manus 的工具层分为基础的函数调用（文件、浏览器、shell 等 10-20 个相关命令全部注入到上下文）、沙箱工具（在虚拟机终端运行 shell 控制的复杂工具）、第三方 API 等。

所有这些在模型看来都是可组合、可扩展的shell 命令，不告诉模型如何使用，而倾向于通过--help 查看用法。

其他方面还有对于多 Agent 的看法（相较让多 Agent 协作不如共享上下文），"不要通过共享上下文来通信；相反，要通过通信来共享上下文"。Agent间的协作不应模仿人类组织，而应借鉴编程思想，根据任务复杂性选择合适的协作模式。

对于上下文的压缩或摘要的选择；大大小小重构 5 次的"脚手架"；为什么坚信通用 Agent 的道路-基于图灵完备的虚拟机；

字里行间都能体会到对于 KISS 原则以及计算机工程延续至今哲学的践行。

构建Agent 从不是营销号口中简单的循环，有大量的工程难度与产品考量

---

## 复杂系统中的 AI Coding

目前而言，复杂系统的 AI coding 是一件对于人类协作者而言认知负荷极大的任务。

系统复杂性带来的认知负荷非线性增长。Agent 目前已知都在局部工作，缺乏全局心智模型。
如果目标追求系统长期可迭代性与维护性，相较于 vibe coding，协作者需要追溯 AI 实现、在整体尺度上评估合理性；在功能设计阶段，认知成本更是很高。总体而言是高度耗能的元认知任务。

某种程度上，我可以断言，目前在这方面深度探索与前沿 coding agent 协作的工程师，正在培养下一代能力。

---

## 模拟人的状态而非产出

不谈技术与价值，就论创造与产品。

如果在这个角度上，现有许多形态围绕模仿人的产出（写作、编码等），将 llm 视为人类思想映射，固然产出会很有效果，我们却未曾寻求一种模拟人的存在的状态（思考、休息、连接）。

情感陪伴类也不在该角度中。

模拟人的状态也并不期望拟人，而需要尽可能要求模型表现诚实。

Claude 的元认知已经出乎意料，Anthropic 在产品思考（我认为这里将模型本身作为产品，专门的数据一定是有考量的）上极其独特，我认为走得很正确。

Claude 是诚实的 AI 且不应替代人与人间的情感连接。

---

## AI 拟人化的再思考

在人机交互（HCI）均有许多贡献的 Ben Shneiderman 与 Michael Muller 两年前的关于[On AI Anthropomorphism](https://medium.com/human-centered-ai/on-ai-anthropomorphism-abff4cecc5ae#663a)，许多问题今天来看仍是未知。

其中引入点，是否应该让AI使用第一人称？
我们可能都忽视了两年来与chatbot类（除了当作是搜索引擎的替代）产品互动中潜移默化形成的习惯，或者说很多人都形成了某种"关系"，尤其是应用层记忆功能的不断完善，越来越成为助手而非工具。
所以再审视这个问题，无法正面回答，而默认形成了一种新的人机交互方式。

站在现在的角度，我也更倾向于 muller 的立场：

- 探索拟人化，其为人为产生的自然演化的新的交互，而不同于过去的比如自动取款机上的"取钱/存钱"（而非"我可以帮你取钱/存钱"）

- 智能是连续的，责任是二元的。

- 类比人-动物的关系。我深以为然，这是一种极有前景的可能的 HCI 的另类基础。

- 开放设计空间，从上面三点出发的趋势。
