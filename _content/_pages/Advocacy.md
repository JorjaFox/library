---
title: Advocacy
author: Mika Epstein
layout: default
permalink: /advocacy/
categories: Advocacy
tags: index
---

**Advocacy** is an umbrella term for organized activism related to a particular set of issues. Advocacy is expected to be non-deceptive and in good faith, though it is sometimes tainted by use of propaganda. It is almost always organized into or by an advocacy group or special interests. In other instances, an individual may act as a lobbyist, on their own account, or on behalf of a corporation or industry.

##Supported Groups##
Groups that Jorja Fox supports and has done work for.

<ul>
{% for group in site.advocacy %}
	<li><a href="{{ site.baseurl }}{{ group.url }}">{{ group.title }}</a></li>
{% endfor %}
</ul>

##See Also##
* [Politics]({{ site.baseurl }}/politics)
