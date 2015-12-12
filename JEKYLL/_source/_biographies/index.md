---
title: Biography
author: Mika Epstein
layout: default
permalink: /biographies/
categories: "Biographies"
tags: "Index"
regenerate: true
---

Jorja Fox is an actress, producer, humanitarian, activist and environmentalist. She has been seen on such hit TV shows as CSI: Crime Scene Investigation, ER, The West Wing and Law & Order, as well as indie movies like Memento and Food for the Heart. She has been in numerous other television shows and movies.

## Vital Statistics

* Birth Name: Jorja-An Fox
* Nicknames: Jorja, Jorj, Jorjan, Horha (the Spanish pronunciation of her name, used by her "CSI Miami" friend Emily Procter)
* Date of Birth: 07 July 1968
* Place of Birth: New York City, NY (raised in Melbourne Beach, FL)
* Eye Color: Brown
* Hair Color: Brown
* Height: 5'9"
* Pets: Bexar (dog - adopted 2012)

## Other Biographies

<ul>
{% for bio in site.biographies %}
	<li><a href="{{ site.baseurl }}{{ bio.url }}">{{ bio.title }}</a></li>
{% endfor %}
</ul>