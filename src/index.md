---
layout: layout.html
title: VOID.ISNOT.ART
description: Intentionally blank
---


{% for post in collections.posts reversed %}
<div style="margin-bottom: 2.5rem;">
    <a href="{{post.data.page.url}}" class="post"><h2>{{post.data.title}}</h2></a>
    <time datetime="{{ post.data.date }}">{{ post.data.date | postDate }}</time>
    <br />
    
    <div class="imageContainer">
        {% image post.data.image.src post.data.image.alt "(min-width: 52em) 800px, 100vw"%}
    </div>
    <p>{{ post.data.excerpt }}</p>
</div>
{% endfor %}