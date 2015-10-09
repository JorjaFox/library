---
title: "Honeypot Productions"
author: Mika Epstein
permalink: /honeypot/
layout: default
categories: Filmography
tags: producer, company
regenerate: true
---

Honeypot Productions (also known as HoneyPot Productions) is an independent theater company in Los Angeles.

Jorja Fox and many of her friends are the founders, and through the company they write, produce and star in many of their own works. According to what she said a TV Guide interview, HoneyPot was formed in either 1998 or 1999; she met fellow Honeypot members Katherine Kendall and Suzanne Mara during the filming of Food for the Heart in 1998.

Most of their plays are performed in small community theaters (or, as they've said, "in people's backyards"); Dear Bernard is their first play for a major theater audience.

## Productions

<ul>
{% for item in site.data.filmography %}
	{% if item.company contains 'Honeypot' %}
		<li><a href="{{ site.baseurl }}/{{ item.role }}/{{ item.slug }}">{{ item.title }}</a></li>
	{% endif %}
{% endfor %}

</ul>