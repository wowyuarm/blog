---
title: "How I Collaborate with an Agent Team That Keeps Getting Better"
pubDatetime: 2026-09-06T12:40:00.000Z
description: From "agent teams aren't on this trajectory" to developing every day with an agent team that keeps getting better — how members become dimensional, why the member replaces the session as the default unit, where subagents should retreat to, and which judgments are, to this day, still only experience.
featured: true
draft: false
tags:
  - AI/collaboration
  - AI/coding
  - AI/context
slug: how-i-collaborate-with-an-agent-team-that-gets-better
---

Back in February this year I still wasn't sold on agent teams: it felt like equal collaboration between multiple agents was too hard, the user–assistant binary paradigm didn't really support it, and just managing the context of a single agent was effort enough. Back then I was more inclined to trust model capability — a strong enough model spinning up many tasks in parallel would do; why would you still need a team?

Now I develop an agent-team plugin every day, using an agent team to do it. When a task comes in, I roughly know who should take it — experience accumulated from collaborating back and forth. What's already clear I hand straight to someone to implement; what isn't, I take to the member who runs discussions, we talk it through, and only then build. Who to ask for a review, who for cleanup and refactoring, who for a release or outreach or a bit of growth, who for evaluation and comparison. Whether to pull someone else in midway depends on the situation — it isn't fixed from the start. I do less and less; mostly what's left is judgment and arranging things, because they're all just there.

This is completely different from facing a blank session. Even a blank session with memory and skills configured, even with enough intelligence to drive a pile of subagents — opening several windows still wears me out, because every time I have to think it through first and then orchestrate. But the members of a team are dimensional: I know what each of them has done before, what runs more smoothly in their hands. That dimensionality isn't an illusion; there's something underneath holding it up. Each member's memory and notes accumulate; when needed I have the managing member DM them so they settle their own workflow and skills, and it goes smoothly; compaction doesn't crush the information away, because the conclusions land in their own records before they ever get compacted. Who's doing what, how far they've gotten, what was decided before — none of it lives in my head; it lives in their individual records and the shared ledger.

Why can it work this way now when February felt impossible? There was no chain of reasoning I thought through in between; two things simply happened, one after the other.

First, agents began to manage their own context. An agent will checkpoint on its own, will open a new context to implement after a lot of exploration, will compact back to the past once a task is done, and — when it isn't done and the threshold is exceeded — hand off what matters to the next brand-new session of "itself" (practices like [pi-context](https://github.com/ttttmr/pi-context) are doing exactly this). So the session is no longer a unit I have to worry about; it becomes the member's own affair — a member has only one session and one working set at a time, and past sessions are all context it can search and recall. I no longer care how context gets managed, in quality or in cost. The real unit moved up from the session to the member: the default unit of a project is a person, not a conversation.

Second, the name carries the mental load. A role isn't a label I assign in advance; it's an inertia that grows out of collaboration. A member who discussed requirements and ran the roadmap — later I had him implement fixes directly, manage GitHub issues, call in other members; a member responsible for evaluation later also handled CI and fixed the problems he found himself. A name marks a center of gravity, not a boundary. I used to be puzzled: for agents strong enough, why split the design and the implementation of one page between different people? Now I think the question itself was off — splitting isn't because capability needs to specialize; it's just that in that one collaboration, someone needed to be in the discussion position and someone in the implementation position. Members each do their own job, and yet not really.

So what about subagents? They didn't disappear; they retreated to where they belong. Subagent-as-tool was never a problem: dispatch it to explore, bring the necessary information back to the main context, burn the cost of exploration on its side. Back when model reasoning wasn't enough and agentic capability was still lacking, pinning down one piece of information took many rounds, and this move was worth a lot; now that models converge fast, that layer's value is shrinking, and "rollback" is often the better substitute — exploration burns your own context, but you can carry the intermediate findings back to a checkpoint and go again. What really made me stop was another usage: splitting plan, review, and build into hierarchical subagents each doing their own subtask. Its flaw isn't in capability, it's in structure — what needs to pass along was never just the result, but the process, the reasons, and the doubts, and a hierarchy can't carry those; later some products added tools and schemas to let the main agent join the subagent's loop, but that still isn't an exchange between equals, it's a superior sitting in on a subordinate's meeting. I'm not saying subagents and agent teams are opposed; both have their uses, and a team naturally burns more tokens. It's just that the path of "nailing the workflow into an org structure" — I don't walk it anymore.

I should also state the boundary clearly. What's been validated isn't some theory of division of labor — when I assign work I roughly settle who's responsible from the start, so expectation and outcome never get a chance to diverge, which means "a given member is simply better at something over the long run" is, for now, only my experience, not evidence. What's been validated is something else: an experienced person, plus a set of infrastructure that can carry experience. The experience is on my side; the names, the memory, and the handoffs are on the system's side; the two are managed separately. It's also more expensive — more tokens than a single agent with subagents; and whether the collaboration is actually improving efficiency still needs real evaluation — I've kept a member dedicated to evaluation for exactly this, but how "efficiency" should even be defined, I don't have an answer yet.

Finally, back to that February judgment. Was it wrong? I think the target of its critique was real: a pile of agents chatting freely, with no shared line of fact between them, really doesn't work. What was wrong was only that the conclusion was drawn too fully, taking "collaboration is hard" as an endpoint rather than an engineering problem you can go and work on. Communication is too hard — then make most communication unnecessary; names carry the mental load, the ledger carries the facts, context is left to the agent itself. The rest, I hand to a team that keeps getting better.

<!-- zh-CN -->

今年二月我对 agent team 还不太买账：总觉得多个 agent 之间的平等协作太难，user 与 assistant 的二元范式本就不太支持它，而单是管好一个 agent 的上下文就已经够费劲了。那时我更愿意相信模型能力——一个足够强的模型，开很多任务并行推进就好，为什么还要一个 team。

现在我每天在用一支 agent 团队开发一个 agent team 插件。任务来的时候，我心里大概就有数该谁负责——这是来回协作攒下的经验。想清楚的直接交给人去落地，没想清楚的就先找负责讨论的成员聊，聊定了再做；需要 review 找谁，需要清理和重构找谁，需要发版本、要对外、要做点增长找谁，需要评测和对比再找谁。中途要不要拉别人进来，看情况，不是一开始就定死。我做的事越来越少，基本只剩判断和排版，因为他们都在那里。

这和面对一个空白 session 完全不同。空白 session 就算配了 memory 和 skills、就算有足够强的智能能驱动一堆 subagent，多个窗口开下来还是让人极为吃力——因为每次都要我先想一想，再去编排。而团队里的成员是立体的：我知道每个人过去做过什么、什么事他做起来更顺。这种立体不是错觉，底下有东西撑着。每个成员的 memory 和 notes 在积累；必要时我让管理的成员去 DM 他们，让他们自己沉淀 workflow 和 skills，都很顺利；compaction 也不会把信息压没，因为结论在被压缩之前，早就落进了他们自己的盘里。谁在干什么、干到哪、之前定过什么，都不在我脑子里，在各自的记录和共享的账本里。

为什么现在能这样，二月却觉得不行？中间没有一条想通的推理链，是两件事先后发生了。

一是 agent 开始能自己管 context 了。它会主动 checkpoint，会在大量探索之后自己开一个新 context 去实施，任务做完就 compaction 回到过去，没做完、超了阈值，就把该带的东西交给下一个全新 session 的"自己"（[pi-context](https://github.com/ttttmr/pi-context) 这类实践就是在做这件事）。这样一来，session 不再是我要操心的单位，它变成了成员自己的事——一个成员同时只有一个 session、一个 working set，过去的 session 都是可以回头搜索和回忆的 context。我不再关心上下文该怎么管，无论是质量还是成本。真正的单位从 session 上移到了 member：一个项目的默认单位，是人，不是会话。

二是名字承担了心智。职责不是我预先分配的标签，是协作里长出来的惯性。一个讨论需求、管 roadmap 的成员，后来我让他直接去实现修复、去管 GitHub issue、去喊别的成员；一个负责评测的成员，后来也管 CI、也修自己发现的问题。名字挂的是重心，不是边界。过去我总困惑，对足够强的 agent，为什么还要把一个页面的设计和实现分给不同的人？现在我觉得这问题本身就问偏了——分开不是因为能力要专业化，只是那一次协作里，需要有人在讨论的位置、有人在实施的位置而已。成员各司其职，却又不是真的各司其职。

那 subagent 呢？它没有消失，只是退回了它该在的位置。subagent as tool 本来就没问题：派它去探索，把必要的信息带回主 context，探索的开销烧在它那边。过去模型 reasoning 不够、agentic 不足，定位一个信息要很多轮，这个手段很值钱；现在模型收敛快了，这层价值在缩水，而且"回溯"往往是更好的替代——探索烧的是自己的 context，但可以带着中间的发现退回 checkpoint 再走。真正让我不再走的，是另一种用法：把 plan、review、build 拆成层级 subagent 各做各的子任务。它的毛病不在能力，在结构——要传递的从来不只是结果，还有过程、理由和疑虑，而层级传不动这些；后来有产品给主 agent 加 tool、加 schema 让它参与 subagent 的 loop，那也不是平等交流，是上级旁听下级开会。我不是说 subagent 和 agent team 对立，两者各有各的用处，team 烧的 token 自然更多。只是"把工作流钉死进组织结构"这条路，我不走了。

也得把这东西的边界说清楚。被验证的并不是某个分工理论——派活的时候一开始大概就定了谁负责，预期和结果没有分叉的机会，所以"某个成员长期就是做得更好"目前也只是我的体验，不是证据。被验证的是另一件事：一个有经验的人，加上一套能承载经验的基础设施。经验在我这，名字、记忆和交接在系统那，两边各管各的。它也更贵，token 比单 agent 带 subagent 要多；协作到底有没有真的在提效，还需要真正的评测——我为此专门留了一个负责评测的成员，但"提效"该怎么定义，我还没有答案。

最后回到二月那个判断。它错了吗？我想它批判的对象是真的：自由互聊、彼此之间没有共同事实线的一堆 agent，确实是不行的。错的只是结论下得太满，把"协作困难"当成了终点，而不是一个可以去做的工程问题。交流太困难，那就让大部分交流变得不必要；名字承载心智，账本承载事实，context 交给 agent 自己管。剩下的，交给一支越用越顺的团队。
