---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---


{% for post in collections.posts %}
<div style="margin-bottom: 2rem;">
    <a href="{{post.data.page.url}}" class="post"><h2>{{post.data.title}}</h2></a>
    <time datetime="{{ post.data.date }}">{{ page.date | postDate }}</time>
    <img src="{{post.data.image}}" width="300">
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}