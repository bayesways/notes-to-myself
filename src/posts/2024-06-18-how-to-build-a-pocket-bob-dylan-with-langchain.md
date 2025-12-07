---
title: "How to build a pocket Bob Dylan with Langchain"
date: "2024-06-18"
---
The basic structure is that of a QA Retrieval chain. 
You ask a question, it retrieves relevant lyrics and answers using those. 

# Find lyrics
There is a github [repo](https://github.com/mulhod/bob_dylan_lyrics/tree/gh-pages/songs/txt) that contains txt files with all the songs. 
Alternatively you can scrape the data from the web. 

# Load documents

```python
from langchain.document_loaders import WebBaseLoader

# List of URLs containing song lyrics
urls = [
    'https://raw.githubusercontent.com/mulhod/bob_dylan_lyrics/gh-pages/songs/txt/as_i_went_out_one_morning_1.txt',
    'https://raw.githubusercontent.com/mulhod/bob_dylan_lyrics/gh-pages/songs/txt/4th_time_around_1.txt',
    'https://raw.githubusercontent.com/mulhod/bob_dylan_lyrics/gh-pages/songs/txt/a_fool_such_as_i_1.txt',
    'https://raw.githubusercontent.com/mulhod/bob_dylan_lyrics/gh-pages/songs/txt/baby_stop_crying_1.txt',
    'https://raw.githubusercontent.com/mulhod/bob_dylan_lyrics/gh-pages/songs/txt/jokerman_1.txt'
    
    # Add more URLs here
]

# Initialize an empty list to hold the documents
all_docs = []

# Loop through the list of URLs and load each one
for url in urls:
    loader = WebBaseLoader(url)
    docs = loader.load()
    all_docs.extend(docs)
```

# Retrieve documents
```python
from langchain.embeddings import OpenAIEmbeddings
embeddings = OpenAIEmbeddings()
db = DocArrayInMemorySearch.from_documents(
    all_docs, 
    embeddings
)

llm = OpenAI(temperature=0, 
             model='gpt-3.5-turbo-instruct'
            )


query =   "What does the rifleman and Preacherman have in common?"
retrieved_docs = db.similarity_search(query, k=1)
```

This returns the Jokerman song, correctly, as the song contains the following lyric:  "Well, the rifleman's stalking the sick and the lame, Preacherman seeks the same -- who'll get there first is uncertain. "

# Answer
```python
qa_stuff = RetrievalQA.from_chain_type(
    llm=llm, 
    chain_type="stuff", 
    retriever=db.as_retriever(), 
    verbose=True
)
response = qa_stuff.run(query)
response
```

This answers "They both seek the same thing, but it is uncertain who will get there first." which is a decent attempt, but does not answer the question.

# Evaluation
- [?] "What does the rifleman and Preacherman have in common?" A: They both seek the same thing, but it is uncertain who will get there first.
Decent response, based on the lyric about the rifleman and the preacher man

- [?] "If I go to the river will you be there?" A: "I cannot answer that question as it is not mentioned in any of the given pieces of context."
There is a lyric "Go down to the river, babe, Honey, I will meet you there,  Go down to the river, babe,  Honey, I will pay your fare." which could have answered the question. 

 - [?] "What does the Jokerman want at the end of the day?" A: "It is not explicitly stated in the lyrics, but it can be interpreted that the Jokerman wants power and control, as he is described as a manipulator and a dream-twister. He also seems to have a disregard for societal norms and values, as seen in his actions towards the priest and the harlot."
This is a decent answer based on the correct song.

# Next Steps
 - It seems like the documents need to be split into smaller parts to help the model find details from each lyric. 
 - If we want to get a response that contains only lyrics, we might be ok with just a similarity search.
 - If the quality of answers is poor, we might need some additional layer of reviewing the output and going back to the retriever to improve it. Then we might need an output parser as well, to ensure we only get pieces of lyrics as answers, and not generated text.

## References
