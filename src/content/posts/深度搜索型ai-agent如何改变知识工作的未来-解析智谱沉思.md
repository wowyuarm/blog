---
title: 深度搜索型AI Agent如何改变知识工作的未来 | 解析智谱沉思
publishDate: 2025-03-31 19:06:00
excerpt: 我认为，这标志着进阶AI应用产品形态的转变：从集成了工具（联网搜索）的chatbot形式，到整合了工具自主调用的Agent（包括工作流型Agent）形式。
featuredImage: /uploads/屏幕截图-2025-04-22-140637.png
tags:
  - Agent
  - AI
  - 分享
  - 深思
---
## 01

继OpenAI、Grok (xAI) 、Gemini (Google) 等大模型公司发布Deep Search（深度搜索，泛指）类AI Agent产品，国内“六小虎”之一智谱发布了 (AutoGLM)沉思。

我认为，这标志着**进阶AI应用产品形态的转变**：从集成了工具（联网搜索）的chatbot形式，到整合了工具自主调用的Agent（包括工作流型Agent）形式。

这一标志主要表现在这一Agent功能的全面放开。 (AutoGLM)沉思也是国内首个门槛最低、全面免费、即刻使用的AI Agent产品。

本文重点关注**智谱沉思**。关于OpenAI DeepResearch（[AI Agent革命：大模型主导的自主进化 | 我相信模型本身](https://mp.weixin.qq.com/s/_lWIe86AX6kmk7nIY4EW2g))与Gemini([Gemini Deep Research引领智能调研新时代 | 市场再度下沉](https://mp.weixin.qq.com/s/7Hnv80wdBjbOT17F7G09AQ)）。

- - -

## 02

开始之前，还是需要说明，DeepResearch AI Agent并不是简单的赋予大语言模型工具使用（进行联网），这只是简单地把搜索的结果交给LLM，并进行分析。  

DeepResearch AI Agent能够像专业研究者一样工作，通过**多步骤的搜索、阅读和推理**来回答复杂问题或完成研究任务。让AI自己去搜索，在广泛的信息源中进行系统性挖掘，不断深入。再不断根据现有结果调整再搜索。以此循环直至完成任务。

DeepResearch AI Agent的出现代表了AI应用技术方面从简单的问答系统向更自主、更智能的**研究助手的转变**。

不过，这一Agent功能在知识工作者中带来的**生产范式的改变**是前所未有的。日常生活中的问答，chatbot应用足够了。

- - -

智谱分别放出两个功能，一个为ChatGLM赋予“沉思”，另一个是单独作为智能体的AutoGLM沉思。两个星期后开源。

AutoGLM沉思不仅能边思考边搜索，还结合了GLM-PC，能够**操控网页**。这就意味着它能够访问小红书、公众号、微博等网页（不允许API调用的平台），理论上讲，人类可以在网页上做到的事，它也可以有限地做到。

在对话过程中，可以看到，请求工具使用的是function call（函数调用），使用固定的格式。

![](/uploads/屏幕截图-2025-03-31-174056.png)

使用的Chrome，科学上网还能搜索到英文信息源。默认还是百度。

不过，在打开网页进行浏览的过程中，我使用下来，失败的概率不小。经常会遇到网页打开了、任务完成，但输出显示失败，可能是处理后的结果没有准确的传递给“大脑”。

我在挖掘它的**工具与请求参数**时，得到了很搞笑的结果：

![](/uploads/屏幕截图-2025-03-31-175619.png)

![](/uploads/屏幕截图-2025-03-31-180551.png)

这里竟然默认想帮我赚钱。

沉思只有**网络搜索与浏览页面**的工具，它的**一部分系统提示词**在我的不懈努力下得到了：

```
<核心要求>
- 首先分解用户请求，得到包含多个子要求的列表
- 制定初始研究计划
- 进行多轮迭代搜索和页面浏览（at least 10 function calls）： 
    * 根据已获得的信息调整研究计划和关键词
    * 打开页面阅读，从发现的内容中识别新的关键概念/名词
    * 从搜索结果中提取新的关键词继续搜索
    * 访问并仔细阅读相关页面，识别新的关键概念/名词

<重要配置>
- 采用语言
    * 搜索关键词：中文
    * 思考：中文

<可调用的工具列表>
[{"name": "search", "description": "Execute a search query and return search results. Use this function when you need to find information about a specific topic.", "parameters": {"type": "object", "properties": {"query": {"type": "string", "description": "Search query string, use English words unless it is a proper name in Chinese"}}, "required": ["query"], "additionalProperties": false}}, {"name": "open", "description": "Open a specific website. Get content from any website with its URL.", "parameters": {"type": "object", "properties": {"url": {"type": "string", "description": "The target website URL or domain"}}, "required": ["url"], "additionalProperties": false}}, {"name": "finish", "description": "Finish the task. Use this function when you have found the information you need.", "parameters": {"type": "object", "properties": {}, "additionalProperties": false}}]
```

也会遇到不遵循prompt而陷入搜索的循环。多轮对话的效果不太好，适合一次问答，一次执行。一个问答，一个窗口。

总的来说，AutoGLM沉思对于课题的研究、搜索与报告质量都还不错，**全面免费与开源**都标志着公司在**战略上的选择与独到的眼光**。

- - -

03

可能AutoGLM沉思这种操控电脑的Agent形态在5年后估计会被淘汰，因为目前的网页形式还是**为人类设计**而尽可能排除爬虫的影响。短时间内，这种方式很有趣且有一定的效果。

可视化出模型的强大，这倒和DeepSeek-R1首次把思考过程展示出一样。尽管Manus首次把Agent的能力展现出来，但那对于大部分用户仅仅只是看到。我很希望AutoGLM沉思让更多的人看到AI Agent的能力，并相信他们的未来。

不过，对于强大的通用型AI Agent，我更相信**端到端强化学习技术**训练，相信Agent在尝试解决问题过程中**涌现**出的不一样的工具使用能力。

关于其他的Deep (Re)search功能的使用建议：

OpenAI的Deep Research最低使用门槛还是20美元的plus用户，但是能力还是最强的。在于他们首次**端到端训练、强化学习微调**基于o3的Agent。

Gemini的Deep Search得益于量大管饱的模型上下文长度、强大的生态，优质的信息源，每一调查涉及上百网页，免费用户每月10次的使用。

Grok的Deep Search与Deeper Search整合了X平台，很多时候信息很及时，但是报告的质量一般且很少，思考过程很有趣。

AutoGLM沉思有着国内的信息源，知乎、小红书等，全面免费与开源，很好了已经。不得不说，国内模型公司在**开源的道路**上早已全球领先。

有意思的是，大语言模型这一次的“AI热”发展到现在，很多**知识型任务**已经完全可以被代替了。

市场调研、知识总结、行业报告、咨询汇总......

- - -

来自AI总结：

> 本文聚焦国内智谱公司推出的AutoGLM（沉思）AI Agent产品，指出其标志着AI应用从工具集成型Chatbot向自主调用工具的工作流型Agent的形态转变。
>
> 相比OpenAI、Gemini等同类产品，AutoGLM作为国内首个全免费、低门槛的AI Agent，通过整合网络搜索、网页操控（如小红书、微博等无API平台）和多轮迭代研究流程，可完成复杂调研任务。
>
> 尽管存在网页操作失败率高、多轮对话效果不稳定等问题，但其开源策略和本土化信息源优势仍具战略价值。
>
> 作者认为，当前操控网页的Agent形态可能被未来端到端强化学习技术取代，但AI Agent已展现出替代知识型任务的潜力。
