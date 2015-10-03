---
title: Filmography
author: ipstenu
layout: default
permalink: /filmography/
categories: "Jorja Fox"

---
A filmography is, in essence, the resume of a performer, listing all their cinematic achievements. This filmography has been broken down by section, to aid in sorting her work.

Jorja is credited as Jorja Fox unless otherwise noted.

## Actress##  

<table class="wikitable" width="90%">
<tbody>

<tr>
	<th> Title </th>
	<th> Date(s)</th>
</tr>

{% for item in site.data.filmography %}
	{% if item.role == "Actress" %}

	<tr>
		<td style="text-align: center">
			<strong>{{ item.title }}</strong> ({{ item.type }})
			<br /><strong>{{ item.character }}</strong>
			<br /><small>{{ item.notes }}</small>
		</td>
		<td  valign="top">
			{{ item.dates }}
		</td>
	</tr>
	{% endif %}
{% endfor %}
</tbody>
</table>

##Producer##  

<table class="wikitable" width="90%">
<tbody>

<tr>
	<th> Title </th>
	<th> Date(s)</th>
</tr>

{% for item in site.data.filmography %}

	{% if item.role == "Producer" %}

	<tr>
		<td style="text-align: center">
			<strong>{{ item.title }}</strong> ({{ item.type }})
			<br /><small>{{ item.notes }}</small>
		</td>
		<td  valign="top">
			{{ item.dates }}
		</td>
	</tr>
	{% endif %}
{% endfor %}
</tbody>
</table>

##See Also##  
*[[Readings]]  
*[[Musical Performances]]  
*[http://www.imdb.com/name/nm0289080/ IMDb]

[[Category:Jorja Fox]]