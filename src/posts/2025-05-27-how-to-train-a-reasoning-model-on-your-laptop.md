---
title: "How to train a reasoning model on your laptop"
date: "2025-05-27"
---
So I wanted to see if we can do RL training on a model on a macbook. So far I believe we need at least one good GPU but will see how far we can get.

The timeline to squeeze the train loop into smaller resources: 
- first will brown posted the link and sort out from this I assume a local GPU
- Pierre Carl Langlais [adaptation](https://www.linkedin.com/posts/pierre-carl-langlais-b0105b10_i-release-today-the-first-google-colab-notebook-activity-7291769154028597248-Wa0E/?utm_source=chatgpt.com) for colab [notebook](https://colab.research.google.com/drive/1bfhs1FMLW3FGa8ydvkOZyBNxLYOu0Hev?usp=sharing#scrollTo=GPYBrSbY79we)  that was allowed to run on one single A100 which is a GPU available to the Colab Pro+ license and above. 
	- Additionally this [post](https://datawizz.ai/blog/grpo-fine-tuning-qwen-0-5b-llama-1b-vs-openai-o1-preview?utm_source=chatgpt.com) showed how to do RL in 50 mins on a different dataset and beat o1 in that specific benchmark). 
	- This youtube [video](https://www.youtube.com/watch?v=SoPE1cUz3Hs) shows how to run it locally in on a GPU: NVIDIA GeForce RTX 3090 Ti. Max memory: 23.651 GB. Platform: Linux.
- Unsloth AI incorporated previous ideas and added new ones to publish a [guide](https://docs.unsloth.ai/basics/reasoning-grpo-and-rl/tutorial-train-your-own-reasoning-model-with-grpo) and several premade [notebooks](https://docs.unsloth.ai/get-started/unsloth-notebooks) e.g. this [one](https://colab.research.google.com/github/unslothai/notebooks/blob/main/nb/Qwen3_(4B)-GRPO.ipynb) is able to squeeze the model onto a T4 GPU that is available on the free Google colab tier for 12 hours. 
- *Can this happen inside a macbook?* 


The [Guide by Unsloth](https://docs.unsloth.ai/basics/reasoning-grpo-and-rl/tutorial-train-your-own-reasoning-model-with-grpo) is very good and the notebooks linked include print outs from the examples as the model is training. 

 - unsloth supports different models to make it easy to load and use 
 - Alll the instruction to think goes into the system prompt which is completely customizable - feel free to use any tags you like to designate the thinking parts
 - need to create a chat_template for the tokenizer of the model *look at notebook "Let's see how our chat template behaves on an example:' to see*
 - (optional) pre-fine tune the model to follow the custom GRPO format. You can do that with a dataset that is not necessarily the same as the dataset for testing
 - then choose the dataset to work with and format it appropriately for GRPO. Need to find the max prompt lengtht o avoid trunctating - *not sure what this means*
 - then you can train - *it would be nice to take one example and see how the different gnenerations get scored before choosing*



Goals for this blogger as follows. 
1. What is the current status for running RL in a notebook?
2. What are the knobs that you can turn to squeeze more performance in general and squeeze into a MacBook. 
3. How does RL compare to SFT for various tasks? 
4. What exactly is happening when we are doing RL ? Open the hood so to speak? Is there really an 'aha' moment? 

My Questions: 
 - does the model generate from a frozen version or does it get updated as we go along? I think it gets updated at each batch
 - How do the generations differ? Are they random?
 - Once each generation gets a score then what? Do we just pick the best? Then what ? How exactly does the model get updated from this one example?
 - What is the advantage of sampling many answers as opposed to just one? Simply that one of them will be right and hence give us a chance to say to the model, use this as the answer? Which otherwise we wouldn't have of course. 
 -  What is the advantage of sampling many answers as opposed to just one? Is it simply so we can compute the reward for GRPO?Or do we use the scores from each one to update teh model? 
 - What is the role of the thinking trace in the training? Do they serve only internally as a means to a better final answer? Or do we keep them to train on them later?
 - 
 - 

## References

- Hugging face [course chapter](https://huggingface.co/learn/llm-course/chapter12/1) on RL and GPRO 
- Will Brown's original [tweet](https://x.com/willccbb/status/1883414339518148960) with GPRO and [code](https://gist.github.com/willccbb/4676755236bb08cab5f4e54a0475d6fb) 
- Will Brown's verifier [repo](https://github.com/willccbb/verifiers)
- Learning plan ([chatgpt transcript](https://chatgpt.com/share/68264d51-61c0-8009-b0d2-ed72149ce2ff))
- Pierre Carl Langlais [adaptation](https://www.linkedin.com/posts/pierre-carl-langlais-b0105b10_i-release-today-the-first-google-colab-notebook-activity-7291769154028597248-Wa0E/?utm_source=chatgpt.com) for colab [notebook](https://colab.research.google.com/drive/1bfhs1FMLW3FGa8ydvkOZyBNxLYOu0Hev?usp=sharing#scrollTo=GPYBrSbY79we)
- [Guide](https://docs.unsloth.ai/basics/reasoning-grpo-and-rl/tutorial-train-your-own-reasoning-model-with-grpo) by unlsoth on how to run it on colab optimally and related reddit [post](https://www.reddit.com/r/LLMDevs/comments/1j5zci1/stepbystep_tutorial_train_your_own_reasoning/)
- [Video](https://www.youtube.com/watch?v=SoPE1cUz3Hs) tutorial on running it on a local Nvidia GeForce RTX 3090 Ti
- blog [post](https://datawizz.ai/blog/grpo-fine-tuning-qwen-0-5b-llama-1b-vs-openai-o1-preview?utm_source=chatgpt.com) by datawize on beating o1 model 
- https://yugeten.github.io/posts/2025/01/ppogrpo/
- examples of using GPRO
	- https://huggingface.co/blog/anakin87/qwen-scheduler-grpo - using NVIDIA A6000 GPU (48GB VRAM)
	- https://huggingface.co/blog/lmassaron/gemma-grpo The code was run on an AMD RYZEN 9 7950X with 128GB of RAM and a single NVIDIA GeForce RTX 3090
	- capturing the 'aha' moment https://huggingface.co/blog/vkerkez/judge-assisted-grpo-tuning 
- 