---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---

<div style="padding: 16px; max-width: 600px; margin: auto">
{% for post in collections.posts %}
<a href="{{post.data.page.url}}" class="post">
    <h2>{{post.data.title}}</h2>
    <img src="{{post.data.image}}" width="300">
    <p>{{ post.data.excerpt }}</p>
    <time datetime="{{ post.data.date }}">{{ post.data.date }}</time>
</div>
{% endfor %}