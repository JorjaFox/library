---
title: Interviews (2008)
author: Mika Epstein
layout: interview
topic: index
date: 2008-01-01
permalink: /interviews/2008/
categories: Interviews
tags: 2008
---

<table class="wikitable">

	<thead><tr>
		<th>Date</th>
		<th>Source</th>
	</tr></thead>

	<tbody>
	{% assign posts    = site.interviews | sort: 'date' %}
	{% assign thisyear = page.date | date: '%Y' %}
	
	{% for post in posts %}
		{% assign postyear = post.date | date: "%Y" %}
		{% if post.topic != 'index' and postyear == thisyear %}
			<tr>
				<td>{{ post.date | date: "%d %B" }}</td>
				<td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
			</tr>
		{% endif %}
	{% endfor %}
	</tbody>
</table>