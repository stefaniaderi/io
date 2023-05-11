---
title: Writings
layout: default
---
<div>
{% for page in site.pages %}
  {% if page.categories contains 'writings' %}
    <div class="item">
      <h3>{{page.title}}</h3>
      <p>{{page.description}}</p>
    </div>
  {% endif %}
{% endfor %}
</div>