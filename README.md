# JFO Library

This replaced the old Wiki. It's written in [Hugo](http://gohugo.io), which is a bajillion times faster than Jekyll was.

## Description of Content

* New posts go into the `posts` folder. 
* Formatted data is in the `data` folder.
    - filmography.json - acting, writing, self, etc.
    - episodes/* - All the eps for the TV shows.

## Contributing

Articles are written in [markdown](https://docs.gitlab.com/ee/user/markdown.html) in `.md` files, with a header. It can be a little weird. In general, you should copy the code from an existing post. If it's a news post, copy from another news post, and so on.

### Article Headers

At the top of every article is a header, which looks like this:

```
---
title: Politics
author: ipstenu
layout: post
categories: ["Politics"]
tags: ["Index"]
permalink: /politics/
---
```

