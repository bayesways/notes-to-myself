---
title: "How does Langchain load documents"
date: "2024-06-18"
---
```python
from langchain.document_loaders import CSVLoader
file = 'OutdoorClothingCatalog_1000.csv'
loader = CSVLoader(file_path=file)
docs = loader.load()
```

This creates a list of *Document* objects `langchain.schema.Document`, one for each row. Calling `docs[0]` for the first row returns the following


```
Document(page_content=": 0\nname: Women's Campside Oxfords\ndescription: This ultracomfortable lace-to-toe Oxford boasts a super-soft canvas, thick cushioning, and quality construction for a broken-in feel from the first time you put them on. \n\nSize & Fit: Order regular shoe size. For half sizes not offered, order up to next whole size. \n\nSpecs: Approx. weight: 1 lb.1 oz. per pair. \n\nConstruction: Soft canvas material for a broken-in feel and look. Comfortable EVA innersole with Cleansport NXT® antimicrobial odor control. Vintage hunt, fish and camping motif on innersole. Moderate arch contour of innersole. EVA foam midsole for cushioning and support. Chain-tread-inspired molded rubber outsole with modified chain-tread pattern. Imported. \n\nQuestions? Please contact us for any inquiries.", metadata={'source': 'OutdoorClothingCatalog_1000.csv', 'row': 0})
```

For embeddings we use the already trained `OpenAIEmbeddings` which we can call 
```python
OpenAIEmbeddings().embed_query("Hi my name is")
```

- [?] How do embeddings work for large chunks of text? How does the embedding of a sentence relate to the embeddings of its words?

Next up we divide the documents into chunks, embed each chunk and store it in a vector database.

The command that chunks-embeds-stores is 
```python
from langchain.vectorstores import DocArrayInMemorySearch
db = DocArrayInMemorySearch.from_documents(
    docs, 
    OpenAIEmbeddings()
)
db.similarity_search(query_txt)
```
which then you can search for similarity `db.similarity_search(query_txt)` 
This is part of the `langchain.vectorstores`. You can do something similar using `Chroma` directly as follows
```python
from langchain.vectorstores import Chroma
vectordb = Chroma.from_documents(
    documents,
    embedding,
    persist_directory,
)
vectordb.similarity_search(query_txt)
```

- [?] What's the difference between `DocArrayInMemorySearch` and `Chroma` ?

You can use this in a `RetrievalQA` as follows
```python
# method 1
from langchain.chains import RetrievalQA
qa_stuff = RetrievalQA.from_chain_type(
    llm=llm, 
    chain_type="stuff", 
    retriever=db.as_retriever()
)

qa_stuff.run(query)
```


In one line you can create an index and query it (using an llm)

```python
# method 2
from langchain.indexes import VectorstoreIndexCreator
index = VectorstoreIndexCreator(
	embeddings, 
    text_splitter, # optional
    vectorstore_cls, # optional
    vectorstore_kwargs # optional
).from_loaders([loader])
index.query(query, llm=llm)
```

- [?] What's the difference between methods 1 and 2?
## References
Deeplearning.ai "LangChain for LLM Application Development" course