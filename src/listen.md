---
title: # About Title # will be overwritten by SEO.title below
date: 2024-07-05
layout: page
eleventyNavigation:
  key: main
  title: Listen # as it will appear in the nav
  order: 4 # order to display in the nav
seo:
  title: Listen # Listen # overrides 'title' above on both Page and META
  description: Listen to the live streamers # Listen to the live streamers
  image: listen/streamer1.jpg
images: # relative to /src/assets/images/
  #feature: listen/streamer1.jpg
  thumb: listen/streamer1.jpg 
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/2 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: bg-green-900 # default bg-black
    image: listen/streamer1.jpg # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: # pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: Listen to the live streamers
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: #>
    #Let the Forest Speak using the Internet of Things, Acoustic Ecology and Creative AI<br /><span style="color:grey">AHRC-funded project (2023-25) : AH/X011585/1</span>
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: Full screen # Contact Us... # no button generated if left blank
  buttonURL: /assets/html/googlemaps.html # /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
  carousel:
    images:
      - listen/streamer1.jpg
      - listen/streamer2.jpg 
---


<!-- <link rel="stylesheet" href="/assets/css/googlemaps.css">
<script src="/utils/googlemapsapi.js"></script>
<script src="/utils/googlemaps.js"></script>

<div id="map"></div> -->

 <embed type="text/html" src="/assets/html/googlemaps.html" width="100%" height="600px"> 