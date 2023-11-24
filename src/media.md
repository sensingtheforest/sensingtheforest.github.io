---
title: Media # will be overwritten by SEO.title below
date: 2023-11-24
layout: page
eleventyNavigation:
  key: main
  title: Media # as it will appear in the nav
  order: 3 # order to display in the nav
seo:
  title: Media # overrides 'title' above on both Page and META
  description:
  image:
---


{% wrap "px-2 mt-8 rounded-lg pb-2 border border-gray-300 bg-gray-200" %}

  {% columns %}

  {% cols "bg-gray-100 rounded-lg" %}
      {% youtube "2twAW03Kjxc", "Introduction to the Alice Holt Research: Matt Wilkinson" %}
  {% endcols %}

  {% cols "bg-gray-100 rounded-lg" %}

  ## Matt Wilkinson
      
  ### Sensing the Forest Presentation: Introduction to the Alice Holt Research Forest

  Related content: [An Introduction to Alice Holt Forest](/2023/11/22/an-introduction-to-alice-holt-forest/)
  
  {% endcols %}

  {% endcolumns %}

{% endwrap %}



