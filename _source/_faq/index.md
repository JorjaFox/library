---
title: FAQs
author: Mika Epstein
layout: default
permalink: /faq/
categories: FAQ
tags: index
regenerate: true
---

FAQ stands for **frequently asked questions**, and refers to listed questions and answers, all supposed to be frequently asked in some context, and pertaining to a particular topic.

## Most Frequently Asked Questions

### Is this FAQ up to date?

You're probably trying to ask if the contact information is up to date. Yes, yes it is. That's the official, public, contact information.

### Is this the official Jorja Fox site? Are you Jorja Fox?

No, this is not, nor has it ever claimed to be an official Jorja Fox website. Nor has anyone who works on the site ever been or claimed to be Jorja.

Jorja Fox: Online (JFO) is NOT an official Jorja Fox website. JFO is run by fans for the purpose of sharing information about Jorja Fox's career. Jorja's official site is [jorjafox.org](http://jorjafox.org/).

### How can I contact Jorja?

For Postal Mail only:

STUDIO FAN MAIL  
P.O. BOX 3175  
BIG BEAR CITY, CA 92314

For UPS, FedEx, DHL, and all other courier services:

STUDIO FAN MAIL  
1201 FOX FARM RD.  
BIG BEAR LAKE, CA 92315

### Can you get me in touch with Jorja?

No, I cannot get you in touch with Jorja. Use the above info to contact her yourself.

### Does Jorja have a Social Media account?

Yes!

* [Facebook - JorjaFoxworldwide](https://www.facebook.com/JorjaFoxworldwide)
* [Twitter - @jorjafoxofficia](https://twitter.com/jorjafoxofficia)

If she has anything else, she's keeping it private. That means **anyone** you see claiming to be her probably isn't. 

### Is Jorja Fox pregnant?

No Jorja is not pregnant.

###Is Jorja Fox gay?###

Jorja's sexuality is her own business. Until Jorja says "I am <whatever>." or "I am dating <whomever>.", discussion about her dating life and sexuality is not permitted on this website.

###Have you met Jorja?###

Yes. She's just as cool as you think.

### Why wasn't Jorja in every episode of CSI? ###

Because she didn't want to be.

## See Also

<ul>
{% for faq in site.faq %}{% if post.topic != 'index' %}
	<li><a href="{{ site.baseurl }}{{ faq.url }}">{{ faq.title }}</a></li>
{% endif %}{% endfor %}
</ul>