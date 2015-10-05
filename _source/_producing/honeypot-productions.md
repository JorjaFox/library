---
title: "Honeypot Productions"
author: Mika Epstein
layout: default
permalink: /producing/honeypot/
categories: Filmography
tags: producer, company
regenerate: true
---

Honeypot Productions (also known as HoneyPot Productions) is an independent theater company in Los Angeles.

Jorja Fox and many of her friends are the founders, and through the company they write, produce and star in many of their own works. According to what she said a TV Guide interview, HoneyPot was formed in either 1998 or 1999; she met fellow Honeypot members Katherine Kendall and Suzanne Mara during the filming of Food for the Heart in 1998.

Most of their plays are performed in small community theaters (or, as they've said, "in people's backyards"); Dear Bernard is their first play for a major theater audience.

## Productions

<ul>
{% for group in site.producing %}
{% if group.tags contains 'honeypot' %}
	<li><a href="{{ site.baseurl }}{{ group.url }}">{{ group.title }}</a></li>
{% endif %}
{% endfor %}
</ul>