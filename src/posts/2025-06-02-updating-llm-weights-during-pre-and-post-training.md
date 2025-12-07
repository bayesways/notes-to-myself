---
title: "Updating LLM weights during pre and post training"
date: "2025-06-02"
---
We will show a toy example of how pre-training differs from post training. 

Say the following joke was part of the training dataset

*Why did the dog go to the bank?
To open a barking account.*

We will see how the weights get updated in the pre-training. 

Then we will see how to refine the model's humor using RL by asking it to generate more versions of the punch line and rewarding the better ones.

Let's say the model generates 5 alternative endings. 
- *To make a de-paws-it.*
- *Because his account was in the dog house.*
- *To open a high-interest barking account.*
- *Because it was having a ruff time making ends meet!*
- *Because he wanted to get his bones appraised - he heard they were worth a lot in the current market.*

## References
