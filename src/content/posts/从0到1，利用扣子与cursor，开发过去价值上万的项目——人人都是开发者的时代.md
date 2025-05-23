---
title: 从0到1，利用扣子与Cursor，开发过去价值上万的项目——人人都是开发者的时代
publishDate: 2025-01-01 20:38:00
excerpt: 伟大的项目往往都不是被构想出来的，而是不断优化调整出来的。未来的开发与创作的门槛都在大大降低，但降低的也许只是开始的人力物力财力成本，技术与知识门槛还是存在的，需要通过系统地学习与实践获得。
featuredImage: /uploads/640.png
tags:
  - AI
  - 共创
  - vibe_coding
---
## 01 成果展示

我将整个项目的README.me文档（图中是一部分）发给Claude，并让他来评估这个项目在互联网时代（不利用各种AI工具）大概需要的成本。

Claude预估项目成本在15万。  

当然，基于目前的**UI设计或者使用体验**肯定不值得这个价格。

但是这样的一个项目对于一个利用AI工具1天甚至更少（大部分时间在修bug）时间的没有太多编程经验的人可以开发，那么未来的独立开发又是什么样的呢？值得深思与实践。  

![图片](/uploads/屏幕截图-2025-01-01-172050.png)

这是我让Claude总结的分析（全部分析过长）

![图片](/uploads/屏幕截图-2025-01-01-172324.png)

- - -

项目所有代码均是Cursor来完成，包括前后端、API调用、UI设计。

目前，整个项目处于MVP（最小可行化产品）阶段，接下来，我会做更多的优化（加入注册登录功能、美化UI）。

![图片](/uploads/屏幕截图-2025-01-01-170445.png)

![图片](/uploads/屏幕截图-2025-01-01-171747.png)

- - -

*API调用的是在扣子搭建的智能体。*  

![图片](/uploads/屏幕截图-2025-01-01-171136.png)

- - -

## 02

**创意/需求 =>实现方式 => 具体实践 => 优化调整**

如何完成这样一个MVP？从创意或需求出发，我认为，这或许是将来AI开发时代很重要的出发点。

**创意/需求**

我的灵感来源于我认为一味被动式接受课堂或网课教导的内容效果是微乎甚微的，那么能否通过较为简单和有效的手段达到**快速学习并掌握对应知识**？（以大学数学为例）。还有一个原因是现在的教材编写为了**追求严谨性而高度概念化**，非常不利于刚接触的学生进行学习。

我想到结合大模型，利用**对话的方式**能够做到从题目中进行学习。  

因此，我最开始是想利用prompt调出一个能够从图片中提取题目并进行结构化解答的大模型。接着，根据这个解答，利用prompt使大模型从这个解答中分析概念、公式、解题方法、同类型题目等等。这样，一个基础薄弱的学生可以很自主性地去理解相关知识。

这意味着他将从题目中主动学习，当了解如何应用这些概念时，再进行深入学习时，对于教材的理解会更容易了。

我发现，现在的AI解题普遍侧重于解答题目而忽略了如何让学生从题目中去**学习吃透一个题目具有的价值**。尽管在这些app中有类似的AI追问功能，但对于我以上的要求并没有满足。  

**实现方式**

扣子这个平台就可以很好地实现与大模型对话的这个功能。接下来就是“捏”一个bot出来。

我选择了多Agent模式（我可以使用多个大模型，让他们承担不同的功能），这样能够处理更加复杂的逻辑。

这个环节最重要的就是prompt的设计，你应该如何表达你的需求很重要，而这一点在与Cursor的对话中更为重要。  

这是比较简单化的prompt，我认为已经足够了：[与AI高效沟通：掌握Prompt的表达艺术](/posts/20241227061000-ai-prompt)

目前，在扣子搭建的智能体已经能够发布在多个平台（豆包、微信、抖音）上了，但是无法让我们的其他想法得到实现。

扣子也上线了AI应用的搭建，由于处于早期阶段，无法实现更为复杂的交互。  

我选择了让Cursor（Windsurf、Devin等也可以）来帮助我搭建这样一个交互平台。

**具体实践**

这是一个示例prompt，因为cursor的Composer功能被设定为专门写代码的，因此，在pormpt无需指定角色。  

> 请你帮我写一个网页，我想要实现下面的需求： 
>
> 1. 具有前后端交互，可以调用API（我后续会给你提供相关文档）。
> 2. 页面风格设计追求简约但不失优雅，体现出数学的奥妙。
> 3. 这个网站的功能是与AI进行对话的，因此，请注意你的设计。
> 4. 一开始我们在本地部署服务器。
> 5. 请你将所有要求总结出README.md文档，后续，我会要求你进行更新。这个文档应包括项目的所有信息，以便后续我进行优化调整。
> 6. 请注意，我匮乏编程经验，请你为每一个代码块实现的功能进行详细的注释。  
>
> 接下来，请你一步一步思考，相信你自己。

关于API如何调用，只要将扣子API文档中的内容发送给他。

---

接下来就是一次一次的调整了，我在这个部分花费的时间占了完成这个MVP时间的60%，具体原因不仅是缺乏经验或者表达问题，而且还是Cursor在处理bug时总是没有根据地去“猜测”，尽管我将报错信息发送给他。

比如，我把报错的信息发送给他或者截图给他，他回答“我明白了！”，但好多次是一味地增加代码来让控制台显示更多的报错信息。

对于这些问题的解决，我让他不要根据对话的上下文去猜测，而要重新思考项目的实现与代码逻辑。

甚至我直接说请告诉我是代码逻辑问题还是我为你提供的信息不足，这时候如果他的回答是后者的话，问题就会很容易地被解决。  

**优化调整**

我们利用AI工具完成了MVP阶段后，接下来重点就是细节的处理了，包括美化UI、注册与登录功能、支付系统、增加数据库、建立一个丰富的知识库以提升模型的解题性能等。

- - -

## 03

看到这里，请你去动手实践吧，先别管做出的项目能带来多大的收益。  

伟大的项目往往都不是被构想出来的，而是不断优化调整出来的。

未来的开发与创作的门槛都在大大降低，但降低的也许只是开始的人力物力财力成本，技术与知识门槛还是存在的，需要通过系统地学习与实践获得。

如果你在实践过程中遇到了问题或对于我的项目有任何建议，欢迎与我交流。
