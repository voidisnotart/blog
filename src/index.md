---
layout: home-layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---

{% for post in collections.post %}
<div>
    <h2>{{post.title}}</h2>
    <p>{{ post.content }}</p>
</div>
{% endfor %}