---
title: "Seafox Productions"
author: Mika Epstein
permalink: /seafox/
layout: default
categories: Filmography
tags: producer, company
regenerate: true
---

Seafox Productions is an independent film, television and theater company based in Los Angeles, California.

Currently, Seafox Productions focuses on documentary and biographical projects that highlight the critical inter-connectedness between humans and the natural world.

## Staff

* Jorja Fox - President
* Jonathan Grant - Chief Operating Officer

## Projects

<ul>
{% for item in site.data.filmography %}
	{% if item.company contains 'Seafox' %}
		<li><a href="{{ site.baseurl }}/{{ item.role }}/{{ item.slug }}">{{ item.title }}</a></li>
	{% endif %}
{% endfor %}

</ul>

## See Also
* [Seafox Productions](http://www.seafoxproductions.com/)