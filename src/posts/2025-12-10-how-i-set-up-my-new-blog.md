---
title: "How I set up my new blog"
date: "2025-12-10"
---
I've been wanting to create a new blog for a while now. I have this urge approximately every two and half years. I was most recently inspired to finally do it by Simon Willison's [advice](https://simonwillison.net/2024/Dec/22/link-blog/) *"You should start a blog. Having your own little corner of the internet is good for the soul!"*. I had attempted in the past to build different websites/blogs, but I was always restricted by the available frameworks given that I didn’t know how to write everything from scratch. Now we have AI that can write it for me so I wanted to put it to good use. 

My requirements for the blog were 
- I control the aesthetics
- It can be searchable in some reasonable way
- it would work nicely with obsidian to allow me to publish my notes as posts seamlessly and respect the links between my notes
- easy and cheap to deploy

There are a couple of good options out there, probably the most natural would have been quartz v4, but it seemed a little bit complicated and restrictive in terms of the aesthetics. I asked for advice both from AI and a human friend. Unsurprisingly, the AI started suggesting different tools and frameworks, weighing the pros and cons of each. My friend, an experienced engineer, thought about a little bit and said why not just host it as a GitHub repo made of markdown files. That's refreshingly simple. It would allow for a natural and bare bones architecture. I could deploy it using it git using GitHub actions for free and allow me to search it using the natural GitHub search functionality. 

So I got working with the free tools I am currently testing, Antigravity and AMP (I'll do a post about that) and experimented with the design and the front page. I got something I liked within a few minutes. 

The agent decided to use React which looked fine at first but run into a basic issue as soon as it was deployed on github. 
Basically, once the blog was deployed, you could only navigate to the posts via the home page but not using the URL of a post directly. This was actually quite weird, if I took the URL after navigating to a post, copied it, pasted in the new tab and try to load it, it would give me a 404 error. 

It took me actually a little while to fix this using hashrouter, going back and forth with the coding agent. In the end it worked fine, though it's far from an elegant solution. I decided to not spend more time on it. Now I had a blog that I liked to looks at, I could deploy it and it worked. 

Next I wanted to deal with links. I could link posts using their full URL. But that didn't really do it for me because what I wanted to do was to be able to drag and drop a note from Obsidian to the blog and not have to manually replace obsidian links with url links. Here is where I got a little bit creative to help me with the process. I used the Templater plugin (which I love!)  to create a [template](https://github.com/bayesways/notes-to-myself/blob/main/README.md) for blog posts. With this all I had to do was start a new node in the blog folder in Obsidian and it would automatically put it in the format of the blog post, and parse the title of the note to be compliant with the repository requirements (it needed to be in the form `2025-12-10-title-for-the-post`). 

The final piece of the puzzle that would allow me to simply drag and drop an obsidian node into the blog folder was to be able to respect  links between obsidian notes. Obsidian links use double brackets around the file name so I just asked the agent to write a function that will transform these double brackets to hyperlinks when deploying the website. (Kind of a meta joke is that I cannot use double brackets anywhere without being transformed into a hyper link, something I realized when I tried usind them in the process of writing the previous sentence.)

And that was it. I had my blog and my process ready.

As a final cherry on top, I asked the agent to write a script that would transform my old blog posts into the new format that would make them appropriate for this blog which AMP agent was able to do very quickly and that would allow me to move my old notes and posts into this new blog quickly.




## References

- [[https://simonwillison.net/2022/Nov/6/what-to-blog-about/]]
- [[https://ampcode.com/free]]
- [[https://antigravity.google/]]
- [[https://github.com/SilentVoid13/Templater]]