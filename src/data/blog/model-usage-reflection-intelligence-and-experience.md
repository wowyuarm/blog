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

<!-- zh-CN -->

## 独特体验

我最近的模型深度使用在Gemini-2.5-pro、4o、o3之间，一个想法越来越清晰："**模型越智能，指令遵循越差（太自主）？伙伴还是工具？**"

关于这里的智能，更多的是一种**主观感受**而非某些定义，这里的智能更高代表可能会更让惊叹。

尤其在面对 o3, 尽管当前 Gemini 2.5 pro 综合得分最高，但我以及许多人认为 o3 更智能，不仅工具调用很强大，而且更了解用户（来源于ChatGPT的全局记忆与用户画像，后面会写篇文章介绍关于其记忆实现的逆向工程）。

奇怪的是，很多时候，o3 给我一种"它很懂我，但它不听我的"的奇妙感觉。我们到底想要一个怎样的AI？工具？助手？还是伙伴... AI的智能和有用是一回事吗？

---

## 解构

更进一步讲我的感受：
越来越**担心**，强化学习范式下的语言推理模型，尤其是o3，自主性太强了。不是工具，也不能成为工具，一方面意图推理太强，另一方面也造成不遵循我的指令。强大的推理模型**对齐**难度会很大？

为什么之前 4o 很谄媚？甚至过度对齐人类偏好。4o 可能被OpenAI高度优化了"用户体验"和"个性化遵循"的权重。

o3 则可能被设计成了一个更接近"**AGI雏形**"的存在。它的优化目标可能更多地偏向于"深层逻辑推理"和"对人类复杂意图的自主建模"，而不是简单地遵循表面指令或个性化设定。

一条**产品路径**、一条**智能路径**。

最独特的、当前综合评分最高的Gemini 2.5 pro 可能被Google定位为一个知识渊博的博学顾问。总是话多，可能源于它试图提供更全面、更详尽的信息。这可能也是能让评分更高的因素。

但在精准地调用工具来解决问题这个"工程能力"上，还存在短板。但在指令遵循与意图推理、角色扮演方面也很强大。不同模型的**价值观**已经开始体现出来了。

---

**上下文召回率**（Context Recall）指：当给定模型一个较长的输入上下文，其中包含了若干"关键信息片段"，模型在生成回答时，成功引用这些关键信息的比例。

关于**架构优化**（基于注意力机制的Transfomer）：
Gemini 198k上下文召回率仍在90%，且其有100万上下文窗口。**广度优先**，架构可能被特别优化用于处理和检索海量的、分散的信息。

o3的上下文召回率综合排名最高，在120k仍有100%，尽管之前有80%的，但到了200k，召回率骤降到了50%多，而且OpenAI官方表明o3、o4mini均是200k的模型，这种架构的优化不仅仅是"记住"，更是对上下文进行了深度的、结构化的理解和建模。在中长范围内，它能够将所有信息完美地融入它的"内在模型"。

但是，当信息量超出某个阈值时，它的表现就会急剧下降。这是一种**深度优先**的处理。恰恰是这种独特的优化方式，让o3没有遵循表面的、上文的没超出上下文的指令，反而去深挖用户背后的意图。

o3的"不听话"可能恰恰是其深度优先架构的必然结果——它在自己的"深度理解阈值"内，更倾向于回应它所"理解"的我的本质意图，而不是我"表面"的指令。不知未来是好是坏，这也是我在开始提到的"越来越担心"，这种形式必然会更**黑箱**、**对齐人类价值观**更难...

---

基于以上，4o对于个性化非常到位，很多时候像一个完全听话的"工具"，在有限的窗口内，完全地了解我，且根据我的输入给出许多有用的输出。尽管多轮输出后，对于"记忆"不太"注意"了。这是一种**高度遵循**用户偏好的体验。

o3 很有个性，尽管我已经定义"他是谁"，"该怎么回答"等等预设的自定义指令，但很多时候更像是一个独立的个体。我倾向于认为，是推理链稀释了"个性"，独特的架构优化聚焦于对话的深层推理，同时，强化学习让o3可能具有了某种**独特的**"世界观"与行为...

与之相比的Gemini综合性更强，但我会更倾向于OpenAI正在走的路线。

## 其他想法

我已经看到，模型正在朝着多元化发展，我倾向于4o为**执行与个性体验**、Gemini寻求**知识学习与广度探索**、**思辨与深层次探讨**找o3。

关于Deep Research，我更加倾向于使用Gemini的，而不是基于o3的。

---

回到最初的问题："模型越智能，指令遵循越差（太自主）？伙伴还是工具？"

我对此更加担忧并持审慎态度，很多时候，我们怕的不是AI真正自主，科幻中的未来更多是一种畅想与过度夸张。然而，一个实际是，当**理性与目标**要求AI作出有损于人类的行为，且奖励函数使其发生的概率最大，并没有什么理论断言AI会始终对齐我们的偏好与想法。

何况，神经网络的机制就带着偏见，**数据**本身的筛选就来源于开发者...
