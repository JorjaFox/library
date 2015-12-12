---
title: 'List of ER episodes'
author: Mika Epstein
layout: default
categories: ["er"]
tags: ["television"]
show: er
seasons: [3, 4, 5, 15]
---

The following is a list of episodes from the CBS television series, "[ER]({{ site.baseurl }}/actor/er/)" in which Jorja Fox appeared or was credited. Episodes are rated based on quality and volume of Jorja's scenes. Episodes in which she is listed in the credits but does not appear are rated with zero stars. 

Jorja appeared as a regular guest in seasons three, four and five. In season 15, the final season of ER, her character's nameplate can be seen in two episodes, on the wall of doctors who have left the ER.

Jorja also appeared in the clip episode Retrospective, which preceded the series finale.

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

{% for episode in site.data.episodes-er %}
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