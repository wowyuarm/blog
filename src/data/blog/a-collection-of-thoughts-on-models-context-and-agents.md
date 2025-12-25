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
