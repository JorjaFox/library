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
roles: [actor, producer, writer]
---
A filmography is, in essence, the resume of a performer, listing all their cinematic achievements. This filmography has been broken down by section, to aid in sorting her work.

Jorja is credited as Jorja Fox unless otherwise noted.

{% for role in page.roles %}

## {{role | capitalize }}

<table class="wikitable" width="100%">
<tbody>

<tr>
	<th> Title </th>
	<th> Date(s)</th>
</tr>

{% for item in site.data.filmography %}
	{% if item.role == role %}

	<tr>
		<td><strong><a href="{{ site.baseurl }}/{{ item.role }}/{{ item.slug }}">{{ item.title }}</a></strong> ({{ item.type }})
			{% if item.character %}<br /><strong>{{ item.character }}</strong> {% if item.jorjan %}<small>[Credited as Jorjan Fox]</small>{% endif %}{% endif %}
			{% if item.notes %}<br /><small>{{ item.notes }}</small>{% endif %}
		</td>
		<td valign="top">{{ item.dates }}</td>
	</tr>
	{% endif %}
{% endfor %}
</tbody>
</table>

{% endfor %}

## See Also

* [IMDb](http://www.imdb.com/name/nm0289080/)
* [Honeypot Productions]( {{ site.baseurl }}/honeypot/ )
* [Seafox Productions]( {{ site.baseurl }}/seafox/ )