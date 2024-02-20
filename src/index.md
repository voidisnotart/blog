---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---


{% for post in collections.posts %}
<div style="margin-bottom: 3rem;">
    <a href="{{post.data.page.url}}" class="post"><h2>{{post.data.title}}</h2></a>
    <time datetime="{{ post.data.when }}">{{ post.data.when | postDate }}</time>
    <br />
    <img src="{{post.data.image}}" width="100%">
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}