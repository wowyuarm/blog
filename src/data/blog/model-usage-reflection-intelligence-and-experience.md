---
title: "Model Usage Reflection: Intelligence and Experience"
description: The more intelligent the model, the worse instruction following (too autonomous)? Partner or tool?
pubDatetime: 2025-06-06T15:14:00.000Z
tags:
  - AI/model
  - AI/philosophy
  - synthesis
---

## Unique Experience

My recent deep usage of models has been across Gemini-2.5-pro, 4o, and o3, and an idea has become increasingly clear: "**The more intelligent the model, the worse instruction following (too autonomous)? Partner or tool?**"

Regarding intelligence here, it's more of a **subjective feeling** rather than some definition—higher intelligence here represents something that might be more amazing.

Especially when facing o3, although Gemini 2.5 pro currently has the highest comprehensive score, I and many others believe o3 is more intelligent, not only because its tool calling is very powerful, but also because it understands users better (derived from ChatGPT's global memory and user profiling).

Strangely, o3 often gives me a strange feeling: "it understands me very well, but it doesn't listen to me." What kind of AI do we really want? Tool? Assistant? Or partner... Are AI intelligence and usefulness the same thing?

---

## Deconstruction

Going deeper with my feelings:
I'm increasingly **worried** that language reasoning models under the reinforcement learning paradigm, especially o3, are too autonomous. They're not tools, nor can they become tools—on one hand, their intention inference is too strong, and on the other, they don't follow my instructions. Will powerful reasoning models be very difficult to **align**?

Why was 4o so servile before? Even overly aligned with human preferences. 4o might have been highly optimized by OpenAI for "user experience" and "personalized following" weights.

o3, on the other hand, might have been designed as something closer to an "**AGI prototype**." Its optimization objective might lean more towards "deep logical reasoning" and "autonomous modeling of complex human intentions," rather than simply following surface instructions or personalized settings.

One **product path**, one **intelligence path**.

The most unique, currently highest comprehensive-rated Gemini 2.5 pro might be positioned by Google as a knowledgeable and erudite consultant. Always talking a lot, possibly originating from its attempt to provide more comprehensive and detailed information. This might also be a factor that allows higher ratings.

But currently, there are still shortcomings in the "engineering capability" of precisely calling tools to solve problems. But it's also very powerful in instruction following and intention reasoning, role-playing aspects. The **values** of different models have already begun to manifest.

---

**Context Recall** refers to: when given a model a relatively long input context containing several "key information fragments," the proportion of these key pieces of information that the model successfully cites when generating answers.

Regarding **architectural optimization** (attention mechanism-based Transformer):
Gemini's 198k context recall rate remains at 90%, and it has a 1 million context window. **Breadth-first**, the architecture might be specifically optimized for processing and retrieving massive, scattered information.

o3's context recall rate ranks highest overall, at 120k it still has 100%, although previously it was 80%, but at 200k, the recall rate suddenly dropped to over 50%, and OpenAI officially indicates that both o3 and o4 mini are 200k models. This kind of architectural optimization is not just "remembering," but deep, structured understanding and modeling of the context. In the medium-long range, it can perfectly integrate all information into its "internal model."

However, when the amount of information exceeds a certain threshold, its performance drops sharply. This is a **depth-first** processing. It's precisely this unique optimization method that makes o3 not follow surface, above-text instructions that don't exceed the context, but instead dig deeper into the user's underlying intention.

o3's "disobedience" might actually be the inevitable result of its depth-first architecture—within its "deep understanding threshold," it's more inclined to respond to the essential intention it "understands" about me, rather than my "surface" instructions. I don't know if this will be good or bad in the future. This is also the "increasingly worried" I mentioned at the beginning. This form will inevitably be more **black box**, and **aligning with human values** will be more difficult...

---

Based on the above, 4o handles personalization very well, many times like a completely obedient "tool." Within a limited window, it completely understands me and gives many useful outputs based on my input. Although after multiple rounds of output, it doesn't "pay attention" to "memory" much. This is a **highly following** user preference experience.

o3 has a very distinct personality. Although I've defined "who he is," "how he should answer" and other preset custom instructions, many times it's more like an independent individual. I tend to think it's the reasoning chain that dilutes the "personality"—the unique architectural optimization focuses on deep reasoning of conversations, while reinforcement learning might give o3 a certain **unique** "worldview" and behaviors...

Compared to it, Gemini is more comprehensive, but I'm more inclined towards the path OpenAI is taking.

## Other Thoughts

I've already seen that models are developing towards diversification. I tend to see 4o as **execution and personality experience**, Gemini seeks **knowledge learning and breadth exploration**, and **speculation and deep discussion** look for o3.

Regarding Deep Research, I'm more inclined to use Gemini's rather than the one based on o3.

---

Returning to the original question: "The more intelligent the model, the worse instruction following (too autonomous)? Partner or tool?"

I'm more worried about this and hold a cautious attitude. Many times, what we fear isn't AI truly being autonomous—the future in science fiction is more of a fantasy and over-exaggeration. However, a practical reality is: when **reason and goals** require AI to act in ways harmful to humans, and the reward function maximizes the probability of such behavior, there's no theoretical assertion that AI will always align with our preferences and ideas.

Moreover, the mechanism of neural networks carries bias, and the screening of **data** itself originates from developers...
