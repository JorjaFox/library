# Jorja Fox Library

This replaced the old Wiki. It's written in [Hugo](http://gohugo.io), which is a bajillion times faster than Jekyll was.

## Description of Content

* New posts go into the `posts` folder. 
* Formatted data is in the `data` folder.
    - filmography.json - acting, writing, self, etc.
    - episodes/* - All the eps for the TV shows.

## Contributing

Anyone is welcome to fork this project and contribute to it. If you're new to Git (or GitLab), read the [forking documentation](https://docs.gitlab.com/ce/workflow/forking_workflow.html).

If you're not up for writing the article, that's okay too! [file an issue](https://gitlab.com/ipstenu/jfo-library/issues/new) and add in articles, recaps and more. There are some templates to use to make things easier for you.

## Articles

Articles are written in [markdown](https://docs.gitlab.com/ee/user/markdown.html) in `.md` files, with a header. 

In general, you should copy the code from an existing post. If it's a news post, copy from another news post, and so on.

### Article Headers

At the top of every article is a header, which looks like this:

```
---
title: Politics
author: Mika Epstein
layout: post
categories: ["Politics"]
tags: ["Index"]
permalink: /politics/
---
```

Categories are what shows as "Filed Under:" and includes things like "News" and "Politcs".

Tags are what show by "Tagged With:" and will be "Movies" or "Television"

There should only be _one_ category per post, but there can be multiple tags.

Example:

```
categories: ["Filmography"]
tags: ["producer", "company"]
```

## Data

Data files are json files that store a collection of data. For example, the `filmography.json` file stores all information that shows on the Filmography page, complete with links to the individual posts about each item.

Example:

```
  {
  	"role": "actor",
    "title": "The Kill-Off",
    "slug": "kill-off",
    "type": "Movie",
    "character": "Myra Pavlov",
    "jorjan": "yes",
    "notes": null,
    "dates": 1989
  },
  {
    "role": "producer",
    "title": "Extinction Soup",
    "slug": "extinction-soup",
    "type": "Documentary",
    "notes": null,
    "dates": 2014,
    "company": "Seafox Productions"
  },
```

The sections are fairly self-evident. The `slug` value will be the name of the file used to generate the post content, without the extension. If there is no post, use `null`.

Example:

```
  {
    "role": "self",
    "title": "Extra",
    "slug": null,
    "type": "TV Series",
    "notes": "- Episode #21.247 (2015)",
    "dates": 2015
  },
```