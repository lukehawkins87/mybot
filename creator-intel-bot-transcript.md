# Creator Intel Bot — verbatim transcript excerpt

**Source:** Zoom recording "Claude Camp: Private Training Session (Luke Hawkins)" — 13 Aug 2026, with Kev Gary & Dan Diaz.
**Section:** The live build of the social-media creator-analysis bot in Claude Code (approx 1:50:00 – 2:34:00).
**Note:** Zoom's transcript does not attach reliable speaker names, so lines are shown as `[timestamp] text`.

---

[01:46:13]  We're getting…
[01:46:14]  I was gonna say, like, just compact it down to…
[01:46:17]  It just summarizes everything you've done, and you can keep working.
[01:46:21]  Yep, 100%.
[01:46:23]  And then a kind of a future state level to be working on it… working at is
[01:46:31]  in your session, delegating tasks, having it delegate tasks to sub-agents with their own context windows, but we will get there in time. Let's start with building something.
[01:46:42]  So here, you know, oh, the last, button. In the bottom left.
[01:46:49]  there's the manual. So this is, like, the mode, okay, that you're putting the session in, and you can change it anytime during the session, along with the model and the effort, but…
[01:47:00]  Manual is, like, real annoying. It's gonna ask you to accept, accept, accept. Accept edits is… it will read and… it will write. It will give… you give it permissions to write and update files in the folder, but any other action
[01:47:15]  it will need to, ask you to approve. Plan mode is kind of a cool thing that you do want to get into.
[01:47:23]  Where it's not going to edit things, it's not going to create anything, it's going to think through and ask you questions, iterate with you, and build up a plan that you can review and iterate with it. And then once you're ready and you approve it, then you can execute it.
[01:47:42]  So that's a good behavior to do for large work that you set up, okay? With our case here, we could even do that, but…
[01:47:50]  let's not do that, just keep things simple, and just know about that. Bypass permissions, you're next to never using this. It just allows it to do anything and everything. What you are gonna use by default is auto.
[01:48:03]  Auto basically gives it an intelligent… it basically lets it do nearly everything, except really unsafe operations, right? Like, delete your folder, delete things on your, you know.
[01:48:17]  delete your root folder. So, just… auto is what you want to be on.
[01:48:22]  You know, the whole time.
[01:48:25]  Enable auto mode.
[01:48:27]  And we're on that.
[01:48:29]  So, now… Let's see… Let's go to that.
[01:48:37]  It's called…
[01:48:38]  Hang on.
[01:48:38]  Yeah, it's called, agent Reach.
[01:48:43]  Yeah, but the, I go on the actual, URL.
[01:48:48]  Browser. Yep. You go to… you go to Chrome, and then,
[01:48:53]  And then search for Agent Reach.
[01:48:56]  But I… it's… it's… do I just talk weight, or isn't it, like, in a…
[01:49:01]  Yeah, and it's that top one, yeah.
[01:49:03]  Okay, alright. Heh.
[01:49:06]  and then copy the URL.
[01:49:11]  Yep.
[01:49:12]  And then go back to Claude Code.
[01:49:21]  And then paste it in here, don't hit enter yet, but paste it here, and then, like, space, and then, you know, say something like.
[01:49:29]  I want to set up a… system.
[01:49:34]  Let me type this out. I want to set up a system.
[01:49:37]  Oh, sorry, there's some lag. Not… I didn't see it typing out. And then describe.
[01:49:43]  Amazing whisper, you can, okay, go again, yeah, I want to send system, and you're recording now.
[01:49:49]  Yeah.
[01:49:50]  Well, this is… sorry, this would be where you then.
[01:49:53]  Oh, okay, alright, great. So I'll put it in.
[01:49:55]  You were telling me your goals and your visions.
[01:49:58]  Okay, yeah.
[01:49:59]  It's a go, go nuts, yeah.
[01:50:02]  Okay, I want to set up a system.
[01:50:05]  that analyzes The social media content strategy, of different creators.
[01:50:14]  Some creators are in my niche, some are not.
[01:50:18]  But I want to understand and gain the knowledge, And information on how often
[01:50:26]  Each creator is posting on each social media platform what type of posts they are doing.
[01:50:35]  And then if it's video content, I want the transcripts of the video content And a breakdown
[01:50:43]  Of how they structured each video, and all the variables of that video to make it…
[01:50:50]  perform well. I also want a… write down… And also, the…
[01:51:00]  The names or the social media-specific videos that have gone
[01:51:06]  Most viral, let's say the top 5 videos
[01:51:11]  and posts that have gone viral for each of the creators that I give you.
[01:51:16]  And… With all of this information.
[01:51:20]  I want to create… You know, an analysis
[01:51:25]  report, so that I can make decisions around my own content marketing strategy.
[01:51:32]  In a similar way.
[01:51:36]  Nice. Then don't send it yet. That's great.
[01:51:40]  Okay, let's… Now, these other companies told me this art framework, where they say, you art, like, I was like, what does it stand for? Like…
[01:51:49]  Give it, like, a roll or something, like… You know.
[01:51:53]  Oh, like.
[01:51:53]  You are a content marketing analysis, you know, world-class expert, or blah blah blah, like…
[01:52:01]  Yeah, you…
[01:52:02]  But the A stood for the R, I think it was Roll, or whatever.
[01:52:05]  Yeah.
[01:52:06]  That is, is that.
[01:52:06]  No, not, not really.
[01:52:08]  Generated instructions, anyway, to use that if it's needed?
[01:52:12]  Yeah, yeah, so that, it was a very common trend, like.
[01:52:17]  create.
[01:52:19]  Like, character, like, give it a role, request, what is what you wanted to do, examples of what you wanted to do.
[01:52:25]  A additions, or steps.
[01:52:27]  posture of the prompts.
[01:52:29]  Yeah, type the output, and then.
[01:52:30]  I've heard of that framework, the CRISPR framework, the ART one, obviously.
[01:52:36]  I'll put it in there.
[01:52:40]  like… just so you know, like, I'm gonna…
[01:52:44]  Like, this is like a…
[01:52:49]  in the general, where I… where they told me, for any request that is deliverable but unspecified, apply the art prompt, like, rewrite as… act as request terms, like, they… they… that's in there in my thing, you know?
[01:53:02]  Got it.
[01:53:03]  If you think that's worthless, or whatever, then anyways, what we have.
[01:53:06]  It's… yeah, as the models have gotten a lot better, that's… that's kind of, like, a thing that people were doing, like, 6 months to a year ago, is, like, characterifying, like, their agents. It's… it's, like, way…
[01:53:21]  less needed as the models have gotten better. It can be helpful, but, like, that whole, like, creating personalities and experts that, like, like, that…
[01:53:31]  that's a lot less needed now, especially in Claude Code, where we're just trying to accomplish
[01:53:38]  goals, okay? It knows how to… it knows world-class marketing, this and that, right, already.
[01:53:45]  Alright, so anyway, what I would say is, yeah, yep, yep.
[01:53:51]  I assume?
[01:53:52]  Yep, yep, yep, yep.
[01:53:54]  And so, if we had just sent it already, it would… it would probably ask you for that, right? But we're… we're kind of just front-loading more and more information, just to…
[01:54:04]  just to save reps here, right? So this is great.
[01:54:12]  Oh, where's this techno, da-da-da.
[01:54:18]  Who else do I want?
[01:54:20]  Is anyone that's doing any… Give suggestions of… Any other… Life coaching training schools.
[01:54:38]  that you think… Are doing well on the social media platforms.
[01:54:44]  Yep.
[01:54:45]  Maybe, like, Tony Robbins, I don't know if he even…
[01:54:47]  Yeah, but he doesn't really… do much. Do I upload my niche into this thing, or not?
[01:54:55]  You're Nate, like, Australia?
[01:54:57]  Y'all, like, my niche answers.
[01:54:59]  Oh, niche. Yeah, so then what I would say here is, like, yeah, so I would, I would say, here's, like, here's information about
[01:55:08]  me and my company and what we do to go along with it. And then at this point, you can either just freestyle into it if you want, or just go back, or just, like, dump
[01:55:22]  you know, those instructions you had on your… that you showed me a little bit about. You can dump your folders and files, or you can tell it to go pull things from Google. This doesn't need to be perfect, but,
[01:55:38]  because it's a new folder, it would be helpful to tell it more things about you and your business, and then it will save that into the folder as context, as instructions, right? Just like you would add to a project over in
[01:55:56]  Claude chat.
[01:55:57]  Okay, I'm gonna put it as well.
[01:56:00]  My goal is to use this information to grow my social media following in my niche, get the best views, the best engagement.
[01:56:07]  And use… use it to grow our…
[01:56:11]  So, yeah, social media following on all platforms.
[01:56:19]  Yeah.
[01:56:19]  best content.
[01:56:21]  So, if I go now,
[01:56:25]  into… and hopefully that if I click into.
[01:56:27]  Hold on, yeah, just, just, yeah, you, you will lose this, because you haven't sent it yet, so, just say at the end, just say at the end, just say at the end, like, please wait to do… please don't do anything yet, I'm gonna add additional context before we get started.
[01:56:46]  Please don't do anything yet.
[01:56:48]  Yeah.
[01:56:49]  Alright, it's in our prayer.
[01:56:50]  And then, yep, you press enter, or that button, yep, and now it started. You see this… so you see your left hand…
[01:56:58]  Sidebar. Okay. All the… the… it's organized by folder. It's, yeah, so it's organized by folder, and then if you hit that, those little, like, filter icons to the right of where you are, there's a plus button, and then there's a little one… one up higher, and then to the right of that.
[01:57:17]  Yeah, so then you can, you can group by, you see? You can group by, like, yep, just hover over that group by.
[01:57:25]  Yeah, so right now it's grouped by folder, so that's, like, why you see AI bots. It's, like, all the chats, all the Claude Code sessions you've had in this folder are there. You can group it by date, like, this whole list, but this is fine, this is the default, and it's good.
[01:57:42]  So now, yeah, go do what you were gonna do.
[01:57:45]  Yeah, for me.
[01:57:46]  Another thing as well is that I haven't told it any skills yet as well, right? That doesn't.
[01:57:51]  Correct.
[01:57:53]  For… yeah, it will matter for what skills you want it to have, correct?
[01:58:03]  Where is this?
[01:58:05]  Whoa.
[01:58:07]  I don't know how to download it from here.
[01:58:10]  Can you, can you click that button? You see how when you hover over it, there you go, download.
[01:58:16]  Yeah, right, wow.
[01:58:20]  So… Alright.
[01:58:23]  Doesn't matter where I download it to, right?
[01:58:26]  I think it would just, yeah, download it into your Finder, downloads.
[01:58:33]  Okay, that's fine.
[01:58:35]  alright.
[01:58:38]  You can even, yep, we can add this, that's… that's good.
[01:58:43]  You can even go back, right, just to show you another pattern in AI land, if you go back to one of your projects over in Home.
[01:58:50]  like, one that you think is relevant to this? Like, probably… It's comfortable.
[01:58:55]  That one, yeah.
[01:58:56]  Okay. So, you can say to it.
[01:59:00]  You only have one chat in here, though? Is that, like, a…
[01:59:04]  odd that one.
[01:59:06]  I've got this chat.
[01:59:08]  Is that… did you do a lot here, or not really?
[01:59:11]  Yeah, I did sell it. Okay.
[01:59:14]  Right, so then, here's just to give you an example of what something you can do. This is known as a context handoff.
[01:59:21]  So you can write right here, you can write here, make me a context handoff document.
[01:59:30]  For this chat.
[01:59:34]  I think that's as simple as it is. So then send that.
[01:59:37]  What this'll do is it'll give you, like.
[01:59:40]  A nice file that summarizes and has
[01:59:44]  some of the information here from this chat, and then you can add that file as well into your Claude Code folder.
[01:59:49]  to, yeah, you can get to Claude, and then it'll know what you're talking about, or use that on top of whatever it's finding to give you a better.
[01:59:57]  Yep, it will save, yeah, exactly. It's gonna save when you give it that, you know, we can tell it, save this, and now that folder will always have that document as a piece of context.
[02:00:07]  So, in Cloud Projects, that context box is where I'm adding files, kind of manually, and I'm limited, as you see here with 100%, and they're just static, but in a folder, in Claude Code, we… the context is defined by all the files that are in there, every single thing.
[02:00:28]  Right, so in here, it's limited by the context to give it information, plus it can search online as well, though, right?
[02:00:38]  Same thing with Claude Code. Claude Code can deep research, search online, it has all the same capabilities.
[02:00:44]  as chat.
[02:00:46]  Like, it can do everything chat can do, and more.
[02:00:49]  Yeah, okay.
[02:00:50]  So I think if we go back to this chat, right, that's on our screen, sorry, the one you were just at.
[02:00:57]  You know, the handoff file thing?
[02:00:59]  Yup.
[02:01:02]  I think it's just in the middle of your screen here. Yep, that one.
[02:01:07]  Right.
[02:01:08]  Camera.
[02:01:09]  So, yep.
[02:01:13]  Alright. And then just dump that into…
[02:01:19]  And today,
[02:01:21]  Yep, into the code.
[02:01:42]  Alright, sedan… Should I say?
[02:01:47]  Us manning a,
[02:01:50]  Yep, so now it's… now it's kind of collaborating with you. Last thing I would say is,
[02:01:55]  You could go to your settings, That you had.
[02:02:00]  Yeah, describe this.
[02:02:02]  In order of preference, it would be… Instagram… LinkedIn…
[02:02:16]  Facebook, TikTok, YouTube.
[02:02:21]  Whether you want a one-off report or a repeatable system.
[02:02:24]  What do you think?
[02:02:25]  Repatable system, right?
[02:02:27]  Yep.
[02:02:29]  I want a repeatable system that we can rerun Monthly.
[02:02:35]  Your current handles.
[02:02:37]  Whoa.
[02:02:41]  You might want to run it daily or weekly, too, but you'll be able to do that regardless, yeah.
[02:02:48]  I guess… Yep.
[02:02:51]  4… My Instagram handle is at lukewawkins.
[02:02:57]  I should give, like, my youth.
[02:03:10]  Yeah, get your YouTube. I'd also drop in your website URL here.
[02:03:20]  Website is www.lukehawkins.com.
[02:03:24]  And then the last thing I would do, well, last thing in my mind, add whatever you think you should here, but go to the bottom left of your screen and open up Settings.
[02:03:34]  I'm gonna do that as well, hang on one teams.
[02:03:37]  Yeah, no worries. I can only see your Claude screen, so I didn't know you were doing something else.
[02:03:41]  talking,
[02:03:48]  This is… guitar.
[02:03:53]  This is my TikTok.
[02:04:13]  Voyages.
[02:04:22]  Terrifyingly.
[02:04:26]  Thought if you'd quick on yourself, like…
[02:04:29]  Oh, yeah, yeah, you can click your, your, yeah, that, that right there?
[02:04:37]  Yeah, I'm quickin' it.
[02:04:39]  So… Oh, yeah, I had this problem, too. Me at the top right, maybe?
[02:04:44]  View profile.
[02:04:45]  There we go.
[02:04:46]  Yeah.
[02:04:50]  Linkedin… and Facebook.
[02:05:05]  Where is this?
[02:05:09]  Well, I guess I need the business page soon.
[02:05:15]  And then…
[02:05:22]  I think that's… B.
[02:05:28]  Facebook is page. Okay, then you said go to Settings, is that right?
[02:05:33]  Yeah, I would, I would go to Settings here, the bottom left, that… click your name, Luke.
[02:05:42]  Yeah, settings, and then that… those instructions that you had, In, general.
[02:05:48]  you know, it seems like some of that is relevant, like, outside of the art thing, right? There's…
[02:05:54]  I would just copy whatever you kind of want to copy from this. All of it's fine.
[02:06:00]  Okay.
[02:06:02]  Alright, just put it below instructions.
[02:06:05]  Yeah, it's just, yeah, say, like, some additional instructions, context on me, and what I do.
[02:06:15]  Oh, it's just initial content on how to think, or… R.
[02:06:20]  Yeah, how to think on behalf of me, yeah.
[02:06:23]  And then paste that in. I would just remove that art, paragraph at the bottom.
[02:06:29]  Just to…
[02:06:30]  Yeah. And then, yeah.
[02:06:36]  A comment? Yeah, go, send this… yep, it's good to go.
[02:06:42]  You know, a comment I wanted to… I was just thinking of here to kind of also help.
[02:06:47]  Awesome.
[02:06:47]  describe the power… oh, go ahead.
[02:06:50]  I wanted to access the down… it said, Claude would like to access files in your downloads folder.
[02:06:55]  Yeah, that's fine.
[02:06:58]  Cool.
[02:06:59]  So, another thing is, like, Co-work tasks.
[02:07:06]  They are… you are running…
[02:07:09]  an AI agent. When you put it on a schedule, it automatically runs. That's great.
[02:07:15]  But it's more of, like, an Agentic workflow.
[02:07:18]  It's something that happens once, it has inputs, has instructions, it has connectors, does some behavior, and has outputs.
[02:07:26]  It's more of a pipeline, it's more of a workflow.
[02:07:30]  And those different workflows that you have set up in Co-work.
[02:07:33]  They can't talk to each other. They can't collaborate.
[02:07:37]  They can't challenge each other.
[02:07:39]  Those work as a team.
[02:07:41]  They're just isolated workflows.
[02:07:44]  When you start building agents, an Agentic system with Claude Code.
[02:07:50]  that becomes possible, right? You can have multiple agents.
[02:07:56]  That collaborate, talk to each other, confer with each other.
[02:08:00]  You can also have them Running 24-7.
[02:08:05]  You can have them being triggered by…
[02:08:08]  An email event. A transcript event.
[02:08:12]  Right? Whereas co-work, you just say, run every day at 9am.
[02:08:16]  They can't talk to each other. They have limited… they have… they have limited triggers.
[02:08:22]  They have limited context.
[02:08:24]  They're just kind of a workflow, just kind of an automation.
[02:08:28]  Right, so in code, you can create the trigger based off, okay, when a meeting finished, or when a Fathom recording, like, got uploaded to Fathom, or…
[02:08:39]  Correct.
[02:08:40]  There's just lots of other triggers that you could set up in code that you can't set up in Cowork, is that right?
[02:08:47]  Correct. And Y.
[02:08:50]  Because it's writing code.
[02:08:53]  Okay, so this would be… this would be, like, the new thing for you, right? There's not gonna be, like, an interface
[02:09:00]  Not gonna be a simple… very clear interface, like there is with Cowork.
[02:09:06]  we can build that, we can build an admin app for you. Claude… Claude Coh can build you an admin app that does give you some nice visibility, okay? But this is the transition you're making here, is you can do anything you think of.
[02:09:22]  Because it will write that into code.
[02:09:27]  Okay.
[02:09:29]  and you don't know how to code, and that's fine, right? I'm slowly forgetting how to code, because it's just writing all the code for you.
[02:09:37]  Right. And so it does… it becomes a little bit more of a dark arts, a little bit more of a black box, but again.
[02:09:46]  There's ways to understand it more, ask it questions.
[02:09:52]  Right, stuff like this, understand what it's built for you.
[02:09:55]  Okay.
[02:09:56]  Because in that sales agent, like,
[02:10:01]  like, folder that I created, I was asking it for each new transcript from a salesperson.
[02:10:08]  To give me, to give me, an, you know, a feedback
[02:10:12]  you know, analysis, but you're saying it wouldn't be able to do that on a schedule of just when a call finished, because it's in the projects folder, it doesn't have that capability, is that right?
[02:10:23]  Yep, it doesn't have the capability. And so, now we can code, we can have Claude Code build us a system that can trigger… trigger that process, when a transcript completes, right?
[02:10:37]  Okay.
[02:10:38]  Yeah. So now we're up to here, where, it says, how do you want… there's obviously, there's some things here where it's not collectible,
[02:10:47]  You know, which we might have to work around and see what it can do, but…
[02:10:50]  Yeah, so here what I would do is, you see the X at the top right? Don't click that, but the little down arrow?
[02:10:56]  Yeah, just click that, and this is where you want to read, right? You want to read and think through what's happening, so let's read through its response. I'm not sure if it starts here or if it starts higher.
[02:11:08]  Right? And this is the time-consuming work, but you get to…
[02:11:14]  The visions that were… that you have.
[02:11:16]  So let's read through this, alright?
[02:11:23]  Your platform ranking contradicts your own funnel. Your handoff doc says funnel is YouTube, yeah, because it's…
[02:11:29]  You've, one of those is wrong, the reason it matters commercially, you're saying.
[02:11:34]  8K35K programs. Instagram Reels is excellent at cheap reach and poor at building the conviction needed for an 8K in-person course. YouTube and LinkedIn, where the conviction gets built for ICP 1 and 2. Instagram job on your stack is volume at the top. YouTube is closing the belief gap.
[02:11:49]  So… It's just given… for analysis on the different platforms in which ideal clients
[02:11:58]  I still collect all 5, but a restrict priority to YouTube, da-da-da, tell me if you disagree. So, number 1, I'll just put…
[02:12:06]  just do it the way that I've taught you for now, for the order.
[02:12:11]  And then number 2 would be, 2 of your 3 credits aren't in the right comparison.
[02:12:19]  Excuse me, structure, Jack.
[02:12:21]  It's Marissa Peer.
[02:12:27]  Yes, add the creator, Marissa Peer.
[02:12:30]  And… Brooke Costello, but I think Marisa Peer is doing more… Better things on social media.
[02:12:42]  Jay Shetty also sells a life coaching training as well.
[02:12:49]  Alright, and then… This analysis isn't your biggest constraint. Item 6, CPL, converting.
[02:12:59]  Cost per lead, don't worry about…
[02:13:02]  Item 6 in the handoff, that's for Facebook ads, we don't need that.
[02:13:08]  Or maybe, like, your own ad tells you what converts your buyer's competitor doesn't tell you what…
[02:13:20]  So, here's just…
[02:13:22]  Gone.
[02:13:23]  Yeah, yeah, no, just to provide some, like, kind of, you know, whatever, some insight, I guess. You guys use meta ads?
[02:13:33]  What other ads are you guys running?
[02:13:36]  meadow. Okay.
[02:13:37]  Same with me and Claude Camp. I was doing Google Ads, it didn't work out well. So I'm all organic search and meta ads.
[02:13:44]  there's not a native connector to Meta Ads, that you can go click on.
[02:13:52]  So you can add it, and it's really easy to add. And that is, like, the best thing, like, that I have… like, my favorite thing I have set up in my system, because it can pull all the data, all the analytics.
[02:14:05]  in real time, run the analysis, use it for its… what it's informed by, can even manage your campaigns. I never go into the meta ads UI. I purely use it through Claude Code. So let's just take a 2-minute side quest to add that for you.
[02:14:22]  If you're down.
[02:14:23]  Here, all in the same…
[02:14:25]  Right.
[02:14:26]  Or agent, or separated?
[02:14:28]  on your account, so that any chat, any Claude code, any cowork can access that data. So we're gonna do that by going to your settings.
[02:14:43]  We're gonna go to Connectors at the bottom.
[02:14:47]  Okay, so you got all your stuff connected here. No, oh, so you have Facebook ads, but it's not connected, right? But Facebook ads is just Facebook. Do you run Instagram ads as well?
[02:15:00]  Yeah.
[02:15:01]  Okay, so let's, click, click that real quick. I'm just curious, just click where you're… not… not reconnect, but just the…
[02:15:07]  thing, okay. Click the three dots.
[02:15:11]  Okay, Facebook, I see it, that's good enough. Go back.
[02:15:15]  Right? Just to be super obvious here, at the top right, you have ad, right?
[02:15:22]  Yes.
[02:15:22]  browse connectors.
[02:15:24]  Right? This is all the stuff that's just in the marketplace for your connectors. You know, type meta ads here, or meta.
[02:15:33]  Right? Nothing. Okay? They don't have one.
[02:15:36]  That's fine. So click the X at the top of this screen. I just want to show that they don't have one out of the box, and so instead, we're going to click Add again.
[02:15:47]  And we're gonna add a custom connector.
[02:15:50]  Alright.
[02:15:51]  So these are the two things to know, is just… there's built ones out of the marketplace, and then there's… as long as it exists out there, as long as Meta Ads has an MCP, then you can add it real easy here. So, let's just call it just Meta Ads, right?
[02:16:06]  Yep.
[02:16:07]  And then, right, this is what I was talking back on that nerdy stuff around MCP servers, right? Okay, let's go to Chrome real quick.
[02:16:18]  Alright.
[02:16:20]  Yep.
[02:16:22]  Let's open up a new tab.
[02:16:25]  Let's search Meta Ads MCP URL.
[02:16:36]  Okay? So it is… it's right there. Okay, so it was the one that you had set up that was disconnected, and that's fine. We can just set it up again. So copy just that URL,
[02:16:48]  Go back to connectors.
[02:16:55]  Yep, hit add.
[02:16:59]  So, with a ZRA already exists.
[02:17:01]  Yeah, okay, so that's fine. At least you saw the process of how you add that again. Let's exit out of this and go back to that disconnected Facebook ads one, right? Because you'd already tried to set this, or you already did set it up, it just got disconnected.
[02:17:15]  So then it'll open… yeah, it'll open up the login screen. I mean, for operating a business that runs a lot on ads, like, this is hypercritical, right? You can now Claude chats, agents, co-work, they can pull all of your metrics and data and how the ads are performing over any time period. So this is…
[02:17:34]  this is super critical to how I run Claude Camp, and I imagine
[02:17:40]  It will be for you, too.
[02:17:44]  Okay.
[02:17:47]  So now it says it's been connected, and it's done. Because our ads are not working very well at the moment, so we sort of…
[02:17:56]  Probably not.
[02:17:56]  Yeah, so another side quest that would be cool for you at some point is just to, like, open up a chat and be like.
[02:18:03]  our meta ads aren't… like, how are our meta ads performing? What's working? What's not… what's not working? What are our metrics?
[02:18:11]  Boom, that's it. Just ask it those three sentences. Not now, but just separately in a chat, ask that, and…
[02:18:18]  You will see stuff about your meta ads.
[02:18:22]  in code.
[02:18:24]  No, in, in either. In, in either.
[02:18:27]  encode our chat.
[02:18:28]  Yep.
[02:18:29]  And then, do you… have you directed it? Because we're paying a lot for an agency right now, like, have you directed it to say, okay, give suggestions of how you would make changes to these campaigns?
[02:18:41]  And tell me why.
[02:18:44]  Absolutely.
[02:18:45]  And then just do it?
[02:18:47]  Yep, absolutely. That's how I manage. I create… I create all of my ads through Claude.
[02:18:54]  and Claude Design, and I completely manage my Facebook ads all through Claude, and a lot of it is automated.
[02:19:02]  Alright, maybe we can show that another time, Dan.
[02:19:05]  Yep.
[02:19:05]  Sounds good so fast.
[02:19:07]  Yeah, no, definitely.
[02:19:08]  Okay, so, don't worry about item 6 and a hand here. Okay, so do you want…
[02:19:14]  To create a separate folder for ads, or do you want to… because it… or do you think it's useful to bring it in here as well?
[02:19:26]  Because another thing that I would want to compare at some point is all my competitors' Facebook ads as well, but that's paid…
[02:19:34]  paid ads analysis versus I'm just doing organic content analysis, or do you think? Compare it, combine it?
[02:19:41]  Got it. I see what you mean.
[02:19:44]  I would… I would combine it. Like, in Claude Code, when we're building this folder, like, this folder is gonna, over time, have a lot of code and context, and that's what's gonna make it more and more powerful. So, you could say something like.
[02:19:59]  Like, let's start with this…
[02:20:03]  yeah, 3, I think it's relevant to the answer 3. Yeah. Like, let's start, or if you want me to talk into Whisperflow, whatever, let's, yeah, let's start, with organic content comparisons, but I have the…
[02:20:18]  meta ads, MCP connected.
[02:20:20]  And one of the next steps would be to be comparing our ad performance and monitoring our ad performance against benchmarks and different, deciles, or top decile, for these kinds of creators and these kinds of companies.
[02:20:40]  Okay.
[02:20:43]  And then, yeah, let's keep reading through and keep responding. You're using this very…
[02:20:49]  very well. A lot of people will just, like, read.
[02:20:52]  The first paragraph, and then start, and then type and enter.
[02:20:55]  Sounds simple, you're doing it already right, but that… the best way is to go through the entire message and respond categorically to everything in one message back, so… Alright, so let's see what else it's saying here.
[02:21:10]  So then I'm like, how do I connect this? That's a… I'm gonna… I was gonna ask, like, I don't know how to connect Instagram, LinkedIn, and Facebook, because for some reason it's not working.
[02:21:19]  Okay.
[02:21:20]  Downloading with transcripts, like…
[02:21:23]  Yeah, yeah, yeah, no worries. So…
[02:21:28]  Vile has views on engaging with Viola.
[02:21:32]  Needs a… Instagram, Facebook needs a logged-in browser session.
[02:21:36]  We use a burner account for that, never at Luke Hawkins.
[02:21:40]  Better bag. Yeah.
[02:21:42]  So what I would say is, let's… let's try to… yeah, scroll up again to that grid, yeah, let's just tell it, like.
[02:21:49]  Let's start with the lower hanging fruit.
[02:21:53]  and do YouTube, and TikTok, and plan out for the next steps what the best way
[02:22:01]  just to connect with Instagram, LinkedIn, and Facebook here would be.
[02:22:09]  I, I don't, I don't think,
[02:22:12]  I don't think the burner… like, the browser scraping is the best solution. This is… there's open source solutions we can pull in and use code and API keys and stuff like that, so we can get there, but let's just stick with Happy Path to kind of
[02:22:25]  Alright. Start, start to get something working.
[02:22:28]  Alright, so say that again, I'll say it for what I've said before the, you, start, yeah, when you're ready, go.
[02:22:35]  let's start with the happy path here of YouTube and TikTok, since that seems actionable and reliable, and then let's phase out for next steps of the system we're building the best way
[02:22:48]  to set up Instagram and LinkedIn and Facebook, doesn't sound like browser scraping would be the best. Seems like it would be better to have API keys.
[02:22:59]  From these systems that we can use to connect, but let's phase that out and just take the W's on YouTube and TikTok to get something working well here.
[02:23:14]  So let's keep… let's make sure we scroll through the rest of this.
[02:23:19]  Viral has to be defined via platform, engagement per follower on LinkedIn, Facebook, Instagram, Facebook, we needed… we addressed that.
[02:23:27]  It's just more, yeah.
[02:23:28]  Got the 6 layers, we'll run weekly and monthly.
[02:23:33]  I think it seems fine.
[02:23:35]  Yep, seems fine.
[02:23:37]  Everything.
[02:23:37]  And then…
[02:23:38]  How do you want the data collected?
[02:23:41]  This is a cost for reliability trade-off, and it's the thing that determines whether the weekly runs… run… weekly run still works in 3 months.
[02:23:49]  Yeah, so this is, like, when it gets into, like, quasi-engineering, right? It's kind of trying to ask you how should we build it? A lot of times, unless I have, like, a clear thought, a clear thing in my head, I'll just throw it back, right? I'll just be like, what do you think the best way to collect the data is, so that it's reliable and still works in 3 months?
[02:24:09]  Right.
[02:24:11]  Okay.
[02:24:13]  And then… The last question was,
[02:24:18]  pancreatitis.
[02:24:19]  Yeah, you have the 3 I've locked in.
[02:24:24]  and add in Marisa Peer.
[02:24:28]  and Brooke Castillo, who did a podcast
[02:24:34]  And I would include that as one of the social media platforms as well, is do a podcast comparison, because I don't have one at all.
[02:24:41]  And a podcast analysis for them.
[02:24:46]  And… Yeah, they…
[02:24:50]  And you might… you might… yeah, you might wanna add, you might wanna, like, also add, like, let's start here, but…
[02:24:58]  You might want to have it research what other
[02:25:02]  Add.
[02:25:02]  Right.
[02:25:02]  Red is lighter.
[02:25:04]  Yeah, and it would be helpful if you would research and come up with a list you think is relevant for me to review.
[02:25:11]  with their… with their links, so I can go check them out.
[02:25:17]  Yo.
[02:25:42]  Open points I'd want settled before platform priority.
[02:25:46]  That…
[02:25:48]  platform.
[02:25:48]  It's because you didn't click the questions, and you just answered them in chat. Oh, no, never mind. Let me see what that says.
[02:25:58]  This is a summary of how things… yeah. It's just asking you, tell me how you want to proceed, because,
[02:26:05]  Because you didn't click the buttons, those question buttons, but we responded to it in the chat, and so it's processing still, if you scroll all the way down.
[02:26:14]  You can see it's processing, so…
[02:26:17]  Just a little bit of confusing user experience, but that will kind of happen.
[02:26:20]  When you…
[02:26:21]  You know where to click on the question? It was sort of like, there's one, I can't click on it, it just gives.
[02:26:25]  No, no, there was a little click box that came up, but we minimized it, and just… and so what we did, what we did is fine. I'm just trying to explain why it…
[02:26:36]  Set above, tell me what… we've already told it below now.
[02:26:42]  Alright.
[02:26:43]  So… Okay, so while that's happening, I don't know, like…
[02:26:51]  If it's useful, we should add on this…
[02:26:54]  focus energy of Dan creating something useful for him, or if we just…
[02:26:59]  stick with just one focus, I don't know, or talk about something else random while it's… I've got…
[02:27:07]  Yeah, I mean, maybe…
[02:27:08]  I'm either or dead.
[02:27:11]  Yeah, I think we stay on one focus, but can take a sidebar right now, like, maybe Dan, like, what are you all building with Claude Code, and, like, what's kind of some of your vision there, or questions, or challenges, or goals you have with what you're doing on it?
[02:27:24]  The fulfillment tracker, Dan, and all that big issue yesterday with invoicing and stuff like that.
[02:27:31]  Yeah, so, basically what we… what I'm using it for right now, the main task is getting a fulfillment tracker
[02:27:39]  up-to-date.
[02:27:40]  But we were running into a few issues, like, we had documents where we lost data, and we had to…
[02:27:47]  Like…
[02:27:50]  we had to get one document reverted back to, like, April of this year to recover that data.
[02:27:57]  And then,
[02:27:59]  What was the name of that tracker, so he can see it, Dan?
[02:28:03]  Well, it's Sunday payments…
[02:28:07]  We probably… is that bad to share with all those names on it, or does it matter?
[02:28:11]  Let me, let me check it with me if there's something… That's specific.
[02:28:23]  I think Mattis does it, just too.
[02:28:25]  Oh, no, I'm just gonna hide the email.
[02:28:29]  Column.
[02:28:30]  Oh, okay.
[02:28:31]  Yeah, over again.
[02:28:32]  That's weird.
[02:28:35]  This right, Dan.
[02:28:37]  Yeah, it would be the, automated payments tracker.
[02:28:42]  So… It's gonna be the one there soon.
[02:28:47]  It's, it's a blue… blue highlight. They're, like, there's 3 to the left. 3 to the right, I'm sorry. 3 to the right of that one.
[02:28:58]  Automated, Boom Australia is the last one to get.
[02:29:00]  So pretty much what I did here, well,
[02:29:03]  I did this with a lot of… the help of… Cloud Code.
[02:29:08]  On some of these formulas, like, to get the total invoice amount, the total payment received so far.
[02:29:14]  the last page.
[02:29:15]  Nice.
[02:29:15]  Like, it just gave me the formulas for it to find.
[02:29:19]  Like, search different spreadsheets here, or different tabs here in our data, and give us the last payment we received from them, how much was the last amount we received from each person.
[02:29:28]  Initial payment, and just break out, like, month by month, how much we're getting on each client, right?
[02:29:35]  Yeah, so I think.
[02:29:36]  Before you explain it, which is really good, just 3 quick questions while it's, running,
[02:29:45]  It just sucks with 3 final questions. Confirm the creator set.
[02:29:49]  And then… the crater… the craters… I'll expect.
[02:29:57]  Let's read… let's read through top, you know, top to bottom here, because it's, yeah, part… part of the process, so we don't… we know what's going on, and…
[02:30:07]  Don't choose a scraper, choose an interface tier, then isolate.
[02:30:11]  Each source behind an adapter so one dying doesn't kill the system.
[02:30:29]  It doesn't really ask a question on it, it just says…
[02:30:32]  No, it's explaining what it's gonna do, yeah. So, which is kind of part of the process, so that as this system's built, you do have some understanding.
[02:30:42]  Of what it's done. Just to give you, you know, knowledge from my experience.
[02:30:49]  RSS feeds are public, YouTube, like, public, you know, to get some more data at some point here.
[02:30:57]  You'll have to, like, set up
[02:30:59]  API keys, if, like, go into these, you know, LinkedIn or, you know, YouTube or Facebook, and get, like, API keys, and give the API keys to Claude Code here, so that it can use them. But let's just get as far as we can with what doesn't require API keys, and we can do that later.
[02:31:19]  says LinkedIn…
[02:31:21]  And I… yeah, and so LinkedIn's a notorious one of, like, regular people can't have, APIs, they do that to, like, protect
[02:31:30]  their users' experience. So, that one, I think, LinkedIn, you leave kind of for last, and we, you can set up a browser scraper, it gets kind of janky, but,
[02:31:42]  Let's maybe… let's deprioritize that one from…
[02:31:45]  Yeah.
[02:31:46]  What we're doing here.
[02:31:51]  Alright, is that alright?
[02:31:53]  So it looks like what it's saying is, you know, Instagram, TikTok, YouTube, and RSS feeds is what we can, you know.
[02:32:02]  more easily accomplished.
[02:32:08]  with the easiest ones being YouTube.
[02:32:13]  Again, all this is possible, but we do it procedurally, where we're gonna…
[02:32:18]  Have it implement the easy ones first.
[02:32:22]  Locked in these people.
[02:32:25]  Here's what is worth considering, ranked by how useful each one is to you.
[02:32:30]  this… Coaching, this is another big company in Australia.
[02:32:38]  This is some other one, I don't know if she… how good that person is.
[02:32:44]  These are different.
[02:32:46]  Competitors that are not bad to compare to as well.
[02:32:53]  Amy Porterfield, Dean Grasciowski yet.
[02:32:57]  Healing it.
[02:32:59]  This is healing, people.
[02:33:01]  Any portrafield's more for, like… Creating a business.
[02:33:05]  Yeah.
[02:33:06]  Oh, delivery not quite…
[02:33:09]  I've literally not quoted follower counts anywhere, I haven't verified them, a guess would defeat the purpose.
[02:33:14]  So, confirm the creator sex… creator set. Your sex plus my recommendation to add.
[02:33:20]  Oh, I think one… Would be yes.
[02:33:24]  The tear… I think that's okay for now.
[02:33:34]  Yeah, if you wanted to add anything from Tier 2, You can just tell it.
[02:33:39]  Later, I don't know, I don't know, there'd be a lot of information if I had all Tier 2.
[02:33:43]  Yeah.
[02:33:44]  That's fine. Yeah, just start there.
[02:33:47]  And then 2 output, I'll default to luke Hawkins AirBytes Creator Intel.
[02:33:52]  Is that… Okay. Yep.
[02:33:55]  Yup.
[02:33:58]  So as these bots, as these, like, this process, this code is executing, it's going to be writing, like, that data and collecting that data, essentially having, like, a database, right? You can make it a real database later, but it will be functioning as, like, your data store right now in that folder.
[02:34:17]  Okay.
[02:34:17]  Whisper Local API.
[02:34:22]  I don't know what that means.
[02:34:25]  We can just…
[02:34:27]  Whisper, they're saying it was gonna cost… Like, it had something… here, that… whisper it via APIs 0.006.
[02:34:40]  Oh, okay. It must be some system that's good at, you know… yeah, whisper. I don't know what that is, but it's probably a product out there, that gets that stuff easily, right? So that's nice. We want to leverage products like that that work.
[02:34:55]  just say local for now, and we'll set up, you know, and, you know, bookmark a task to set up the API for it later.
[02:35:07]  It's when you get this… system.
[02:35:11]  Running in the cloud instead of running on your computer.
