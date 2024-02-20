---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---

{% for post in collections.posts %}
{{ post | console }}
<a href="{{post.data.page.url}}" class="post" width="300">
    <h2>{{post.data.title}}</h2>
    <img src="{{post.data.image}}"/>
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}