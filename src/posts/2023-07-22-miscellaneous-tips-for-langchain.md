---
title: "Miscellaneous Tips for Langchain"
date: "2023-07-22"
---
## References


1) For local LLM runs use the `CallbackManager` 
As described in the ActiveLoop [course](https://learn.activeloop.ai/courses/take/langchain/lessons/46196287-introduction-to-the-course) 
```python
callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])
llm = GPT4All(model="./models/ggml-model-q4_0.bin", callback_manager=callback_manager, verbose=True)
llm_chain = LLMChain(prompt=prompt, llm=llm)
```
The default behavior is to wait for the model to finish its inference process to print out its outputs. However, it could take more than an hour (depending on your hardware) to respond to one prompt because of the large number of parameters in the model. We can use the `StreamingStdOutCallbackHandler()` callback to instantly show the latest generated token. This way, we can be sure that the generation process is running and the model shows the expected behavior. Otherwise, it is possible to stop the inference and adjust the prompt.


2) Save your API key in a config file and load it 
```python
from dotenv import load_dotenv
load_dotenv() # fix this
```

