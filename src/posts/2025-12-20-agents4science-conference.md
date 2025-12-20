---
title: "Agents4science conference"
date: "2025-12-20"
---
Interesting [paper](https://www.nature.com/articles/s41587-025-02963-8) in Nature about AI agents for science. I've been following the usage of AI tools for science and had heard about the [Agents4Science](https://agents4science.stanford.edu/) conference so I was excited to read the findings. All quotes below are from the paper. 

>*"journals and conferences currently prohibit AI coauthors and LLM reviewers, and researchers often hide how they use AI"*

A lot of people use AI without reporting it because their professional settings do not yet allow it. I think it's important to create room for experimentation with AI, and even actively encourage it. In an organized fashion of course. This conference was the first such attempt, in my knowledge, for scientific writing.  

There were about ~250 submissions mostly from academics and the subject matter was overwhelmingly in Machine Learning, as one might imagine. Interestingly the next most common topic was mathematics (which is having an AI awakening), followed by physics. More than half of the accepted papers reported AI did more than 50% of the work. 

>*"OpenAI’s GPT-series was the most widely used, appearing in 62.5% of accepted papers. Gemini and Claude followed, at 33.3% each."*

OpenAI continues to lead the pack. It would be interesting to see if Gemini will get in there in the coming months (I predict it will.)

Before I read the paper my prior was that academics use AI mostly for copywriting or data wrangling. I was curious to see whether hypothesis generation and validation is picking up adoption. The conference measured this by asking everyone who submitted to Score the AI involvement across the different stages of research: *"hypothesis development, experimental design and implementation, data analysis and interpretation of results, and manuscript writing."*

Indeed, AI was involved more heavily in the manuscript writing and data analysis parts, which *"exhibited greater AI autonomy."*

I was also curious to see what tools people used for agentic research. The paper found that the vast majority used general purpose tools such as ChatGPT. 

The conference also asked the submitting teams to note challenges working with AI agents and I think all three top issues resonate heavily with anyone who uses AI for work:  *"hallucination or overconfidence"; "erroneous code, context-length issues and formatting issues"; "lack of creativity"*

The conference organizers used three LLMs as reviewers and optimized prompts to align LLM's taste with that of human open reviewers of past ICLR conferences using open review examples. LLMs scored all papers using NeurIPS scale of 1-6. Human experts reviewed a subset of the papers and found that AI and humans differed about 1 point on average. 

>*"GPT-5 was the most negative reviewer, giving an average score of 2.30. In contrast, Gemini 2.5 Pro was the most positive reviewer, with an average score of 4.23. Claude 4 Sonnet was more balanced, with an average score 3.0."*

One important finding was that AI lead research contained potentially made up references. The organizers trained a system to flag suspicious references, so the findings are approximate, but more than half of the papers were flagged for potentially including at least one suspicious reference. 

Another interesting point is that two papers were detected to attempt prompt injection to the LLM reviewer, presumably to force acceptance. 

This conference did not produce any highly surprising findings but solidified a couple of lessons that are emerging in the AI for science field: 
- AI tools are powerful enough to drive autonomously certain parts of the research while still requiring the human to be involved. 
- General purpose AI tools are the workhorse of academic researchers. I believe there is plenty of room for more specialized tools but academics can get a lot of mileage out of general purpose tools.
- The variance of AI generated outputs is very large and depends on many factors one of which is the amount and the kind of human involvement in the process. 
- AI is gaining traction within the machine learning and software engineering communities, which makes sense. But mathematics is becoming an AI enabled field slowly but surely. This is a space to keep a close eye on in the coming years. 

## References

- [Exploring the use of AI authors and reviewers at Agents4Science](https://www.nature.com/articles/s41587-025-02963-8)