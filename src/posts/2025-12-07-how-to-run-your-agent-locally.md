---
title: "how to run your agent locally"
date: "2025-12-07"
---

- Install [ollama](https://ollama.com/) 
- Run 
```bash
ollama pull qwen2:7b
ollama serve
```
- Make a simple prompt with this [notebook](./check_ollama_works.ipynb) to ensure it runs

And check that this runs
```python
import requests
import json

# Set up the Ollama API endpoint
OLLAMA_API_URL = "http://localhost:11434/api/chat"

# Define a basic prompt
payload = {
    "model": "qwen2:7b",
    "messages": [
        {"role": "user", "content": "Explain what a Python for loop does."}
    ]
}

# Make the request
response = requests.post(OLLAMA_API_URL, json=payload, stream=True)

print("Response from qwen2:7b via Ollama:")
for line in response.iter_lines():
    if line:
        data = json.loads(line)
        print(data["message"]["content"], end="", flush=True)

```


Then 
```bash
pip install 'smolagents[litellm]'
```
Now we can run a smolagent 
```python
from smolagents import LiteLLMModel, CodeAgent, PythonInterpreterTool

model = LiteLLMModel(
    model_id="ollama_chat/qwen2:7b",
    api_base="http://127.0.0.1:11434",
    num_ctx=8192,
)

agent = CodeAgent(tools=[PythonInterpreterTool()], model=model)
result = agent.run("Explain what this code does:\n\nfor i in range(5): print(i)")
print(result)
```
## References

