---
title: Filmography
author: Mika Epstein
layout: default
permalink: /filmography/
categories: "General"
tags: 
  - Movies
  - Television
regenerate: true
roles: [actor, producer, self, writer, soundtrack]
redirect_from: 
  - /actor/
  - /self/
  - /producer/
  - /writer/
---
A filmography is, in essence, the resume of a performer, listing all their cinematic achievements. This filmography has been broken down by section, to aid in sorting her work.

Jorja is credited as Jorja Fox unless otherwise noted.

* TOC
{:toc}

{% for role in page.roles %}
{% assign credits = 0 %}
{% for item in site.data.filmography %}{% if item.role == role %}{% assign credits = credits | plus: 1 %}
{% endif %}{% endfor %}

## {{role | capitalize }} ( {{credits}} Credit{% if credits != 1 %}s{% endif %})

<table class="jfotable" width="100%"><tbody>
<tr>
	<th> Title </th>
	<th> Date(s)</th>
</tr>
{% for item in site.data.filmography %}{% if item.role == role %}
<tr>
	<td><strong>{% if item.slug %}<a href="{{ site.baseurl }}/{{ item.role }}/{{ item.slug }}/">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}</strong> ({{ item.type }})
		{% if item.character %}<br /><strong>{{ item.character }}</strong> {% if item.jorjan %}<small>[Credited as Jorjan Fox]</small>{% endif %}{% endif %}
		{% if item.notes %}<br /><small>{{ item.notes }}</small>{% endif %}
	</td>
	<td valign="top">{{ item.dates }}</td>
</tr>
{% endif %}{% endfor %}
</tbody></table>
{% endfor %}

## See Also

* [IMDb](http://www.imdb.com/name/nm0289080/)
* [Honeypot Productions]( {{ site.baseurl }}/honeypot/ )
* [Seafox Productions]( {{ site.baseurl }}/seafox/ )