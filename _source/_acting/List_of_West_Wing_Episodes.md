---
title: 'List of The West Wing episodes'
author: ipstenu
layout: default
permalink: /acting/ww-episodes/
categories: "west wing"
tags: television

---

The following is a list of episodes from the CBS television series, "[The West Wing]({{ site.baseurl }}/acting/west-wing/)" in which Jorja Fox appeared or was credited. Episodes are rated based on quality and volume of Jorja's scenes. Episodes in which she is listed in the credits but does not appear are rated with zero stars. 

{% assign seasons = "One|Two" | split: "|" %}

{% for season in seasons %}

## Season {{season}}
	
<table class="episodelist">
<tbody>
<tr>
	<th> # </th>
	<th> Title </th>
	<th> Airdate </th>
	<th>Rating</th>
</tr>
{% for episode in site.data.ww-episodes %}
{% if episode.season == season %}
<tr class="episodelist-name">
	<td style="text-align: center">{{ episode.epnum }}</td>
	<td style="text-align: left">"{{ episode.title }}"</td>
	<td>{{ episode.airdate }}</td>
	<td>
	{% for i in (1..episode.rating) %}<i style="color:gold;" class="fa fa-star fa-rotate-normal" name="star"></i>{% endfor %}
	{% if 5 > episode.rating %}
		{% assign greystar = 5 | minus: episode.rating %}
		{% for i in (1..greystar) %}<i style="color:grey;" class="fa fa-star fa-rotate-normal" name="star"></i>{% endfor %}
	{% endif %}
	</td>
</tr>
{% if episode.summary %}
<tr class="episodelist-summary">
	<td colspan="4">{{ episode.summary }}</td>
</tr>
{% endif %}
{% endif %}
{% endfor %}
</tbody>

</table>
{% endfor %}