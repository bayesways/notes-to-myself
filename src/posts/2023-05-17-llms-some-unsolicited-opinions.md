---
title: "LLMs - Some unsolicited opinions"
date: "2023-05-17"
---
- A brief history of AI
- What is this sorcery? 
- Why does this thing work? 
- What do you do with all of this?
- How does the paradigm of programming changes?
- How is this thing going to be controlled?

# A brief history of AI

AI has entered a new chapter of development that may be the most dramatic of it all. 
Essentially AI can be read in three chapters, the rule based, the example based, and the language based. We have just entered the latter and it is evident that the shift is massive and may have unlocked the holly grail,  Artificial General Intelligence (AGI).

AI experienced a rapid growth with the invention of deep neural networks. Around 2005 **check**  the first deep learning architectures achieved superior performance in image recognition. Quickly the lessons transferred to natural language tasks with spectacular results, such as translation and auto captioning. The deep learning paradigm was developed and proved to be extremely successful for well defined tasks. The paradigm worked as follows, establish a well defined task, i.e. one where the correct answer exists and is verifiable, use an architecture, i.e. a deep neural net, appropriate to the task, feed the network a ton of examples, and voila, you have a machine that can perform the task with superhuman accuracy. 

Deep Learning has been so transformative because it was able to shift the programming paradigm from a rule-based one to an example-based one. You need a machine to tell you whether the image contains a dog or not, but don't know how to write a comprehensive set of rules to instruct the machine? No problem, just feed the machine a ton of examples of dog images and let it figure out the rules for itself. This paradigm proved to be so powerful that opened up brand new avenues for tasks that were previously thought to be within the science fiction realm. 

Yet it was limited in the sense that it was very clearly task specific. A machine trained on dog recognition could not be used to spot cats, unless it was trained specifically on cats as well, let alone any other task such as text translation. Even architectures were specific to each field, one for vision, a different for language, yet a different for sound and so on, and within each one of these fields there were subcategories based on the task. There were attempts to unify, transfer lessons from one field to another and generally understand intelligence in the broader sense beyond accuracy achieving machines. But none of these attempts really took off. 

Enter, LLMs. The simplest way to capture what is different this time is that LLMs appear to be good at all tasks, not just the one task they were trained on. LLMs are the latest version of the deep learning paradigm in the field of text, i.e. natural language processing (NLP). Following a long trend of ever growing architectures to handle ever growing datasets, LLMs are simply a  machine that is trained to predict the next word  from the previous words, trained on a big text dataset. In fact the biggest text dataset of all, the whole of the internet. In that regard, LLMs is nothing more than just a bigger deep neural net, of the kind that came before. After all, a good chunk of machine learning was built on a "more is more" mantra, incremental progress from training on slightly bigger models and slightly bigger datasets. However this time more is not just more. More is different. 

What is this sorcery? 

The third chapter of the book of LLMs starts, like other revolutions, inconspicuously. OpenAI had spent the good part of the last 2 years training their biggest yet language model and had made it available to practitioners in the field. It was seen as yet another iteration of "more is more". The company decided to attach a chat interface in the hope of boosting adoption. In fact, as the head of product shared recently, they had serious doubts because of the release of the microsoft bot at that time. OpenAI decided to go ahead, publish a paper called "chatGPT" and link to a page to try it out "if you'd like", expecting to attract only a few extra users. The rest is history. ChatGPT became an instant sensation making it the most popular product ever in history reaching 100 million users in 2 months according to a reuters article.  

So why is chatGPT so revolutionary? Yes it could respond to any question the users prompted it with, and you couldn't tell it apart from a human. But the more people prompted it the more of its powers got revealed. First people took it upon themselves to break it, a primal human instinct (a topic for whole other post), and took pride in finding the limitations of the model. It couldn't answer mathematical questions, or would fail easy trick questions such as "what is lighter, a kilogram of feathers or a kilogram of stone?". But then something magical started to happen. By simply asking the machine to "think step by step" the quality of the answers improved dramatically. Could it be that all you needed to surpass these obvious limitations is to just articulate better what you were looking for? The answer is yes.

 In my understanding, the awaking of the research community to the superpowers of the machine went through 4 crucial steps
 - Chain of thought paper 
 - Few shot prompts
 - zero-shot prompt
 - ReAct

At this point, it is clear that this model is capable of reasoning. And this is truly game changing. 
Reasoning is a skill that all machines have easily failed at before. What is th

Why does this thing work? 

The short answer, we are not entirely sure. One possible answer is that mastering human language is a good proxy for mastering human reasoning. Natural Language modeling is conjectured to be AI-complete (see [here](https://www.researchgate.net/publication/251422306_AI-Complete_AI-Hard_or_AI-Easy_Classification_of_Problems_in_Artificial_Intelligence) from charles slides). This school of thought has argued that the road to AGI will be paved by advancing our NLP capabilities. It seems to be correct. 

It is not working like the human brain.

This leads to two more questions in my mind: 

Is guessing the next word the single task that captures the essence of human reasoning

What is it about language that unlocks human reasoning?

What do transformers learn from trying to guess the next word? 
The answer is we don't know. [[What do Transformers do?]] 

Is language an interface?


- What do you do with all of this?
"Real great for small teams when all these capabilities are unlocked all at the same time"

Josh tobin - "LLM are like you in highschool, they are really really smart but don't know anything"

- How is this thing going to be controlled?

How does the paradigm of programming changes?

Creativity unleashed! Previously you had to think how to force the problem into the mold of supervised learning. The mold is broken

## References

1. I have since found that Andrej Karpathy made the point of the three chapters of AI back in Feb in this [tweet](https://twitter.com/karpathy/status/1365734030247747584)
2. reuters [article](https://www.reuters.com/technology/chatgpt-sets-record-fastest-growing-user-base-analyst-note-2023-02-01/)
