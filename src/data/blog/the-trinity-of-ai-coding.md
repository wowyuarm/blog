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
