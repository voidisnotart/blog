---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---


{% for post in collections.posts reversed %}
<div style="margin-bottom: 2rem;">
    <a href="{{post.data.page.url}}" class="post"><h2>{{post.data.title}}</h2></a>
    <time datetime="{{ post.data.date }}">{{ post.data.date | postDate }}</time>
    <br />
    <div class="imageContainer">
        {% image post.data.image.url post.data.image.alt %}
    </div>
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}