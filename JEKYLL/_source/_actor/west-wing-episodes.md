---
title: 'List of The West Wing episodes'
author: Mika Epstein
layout: default
categories: "west wing"
tags: television
show: west-wing
seasons: [1, 2]
---

The following is a list of episodes from the CBS television series, "[The West Wing]({{ site.baseurl }}/actor/west-wing/)" in which Jorja Fox appeared or was credited. Episodes are rated based on quality and volume of Jorja's scenes. Episodes in which she is listed in the credits but does not appear are rated with zero stars. 

* TOC
{:toc}

{% for season in page.seasons %}

## Season {{season}}

<table class="episodelist">
<tbody>
<tr>
	<th>#</th>
	<th>Title</th>
	<th>Airdate</th>
	<th id="dates">Rating</th>
</tr>

{% for episode in site.data.episodes-ww %}
{% if episode.season == season %}
<tr class="episodelist-name">
	<td style="text-align: center">{{ episode.epnum }}</td>
	<td style="text-align: left">"<a href="{{ site.baseurl }}/recaps/{{ page.show }}/{{ episode.slug }}/">{{ episode.title }}</a>"</td>
	<td id="dates">{{ episode.airdate | date: "%d %b, %Y" }}</td>
	<td>{% if episode.rating == 'na' %}<i style="color:red;" class="fa fa-star-o fa-rotate-normal" name="empty star"></i><i style="color:red;" class="fa fa-star-o fa-rotate-normal" name="empty star"></i><i style="color:red;" class="fa fa-star-o fa-rotate-normal" name="empty star"></i><i style="color:red;" class="fa fa-star-o fa-rotate-normal" name="empty star"></i><i style="color:red;" class="fa fa-star-o fa-rotate-normal" name="empty star"></i>{% else %}{% for i in (1..episode.rating) %}<i style="color:gold;" class="fa fa-star fa-rotate-normal" name="gold star"></i>{% endfor %}{% if 5 > episode.rating %}{% assign greystar = 5 | minus: episode.rating %}{% for i in (1..greystar) %}<i style="color:grey;" class="fa fa-star fa-rotate-normal" name="grey star"></i>{% endfor %}{% endif %}{% endif %}</td>
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