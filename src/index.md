---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---

{% for post in collections.posts %}
<a href="{{post.data.url}}" class="post">
    <h2>{{post.data.title}}</h2>
    <img src="{{post.data.image}}"/>
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}