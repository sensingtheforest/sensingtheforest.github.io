---
title: # About Title # will be overwritten by SEO.title below
date: 2024-07-05
layout: page
eleventyNavigation:
  key: main
  title: Listen # as it will appear in the nav
  order: 7 # order to display in the nav
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
  subheadingText: This is a solar-powered system in the woods, which means it sometimes goes offline
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

We built two streamers that were streaming and recording for one year (August 2024 - August 2025). The streamers stopped their mission on 26 August 2025. You can now enjoy the recordings on Freesound following the two links below:

* [5-minute audio recordings streamer I (natural soundscape)](https://freesound.org/people/sensingtheforest/packs/42937/).
* [5-minute audio recordings streamer II (sound installation)](https://freesound.org/people/sensingtheforest/packs/43504/).

We have documented our experience in the following tutorials and position paper:

* Marino, Luigi and Xambó, Anna (2024). [Developing DIY Solar-Powered, Off-Grid Audio Streamers for Forest Soundscapes: Progress and Challenges](https://www.chime.ac.uk/s/21-Luigi-Marino-and-Anna-Xambo.pdf), Proceedings of the [CHIME Annual One-day Music and HCI Conference 2024](https://www.chime.ac.uk/chime-annual-conference-2024), Milton Keynes, UK.

* Marino, Luigi (2023-2025): [Streamers' hardware](https://github.com/sensingtheforest/audio-streamer).
  * [Tutorial 1: Phase 1 - Setting up the streamers](/streamers/tutorial-1/).
  * Tutorial 2: Forthcoming.
  * [Tutorial 3: A DIY Solar-Powered Audio Streamer that Can Record Samples at Solar Times](/streamers/tutorial-3/).
  * [3D models](/streamers/tutorial-3/#3d-printed-parts).

Below, we leave the past information on how to access the streamers for archival purposes.

<span style="color: grey">  

You can experience the sounds by navigating the map or going directly to the below two links. 

:fire: **Note**: We recommend Chrome or Firefox for an optimal experience.

* **Streamer I (Giorgio)**: [http://solid41.streamupsolutions.com:8010](http://solid41.streamupsolutions.com:8010/)
* **Streamer II (Paula)**: [http://solid67.streamupsolutions.com:8063](http://solid67.streamupsolutions.com:8063/)

Click on the markers in the map to find out more about the two streamers and listen to the streamers (we recommend Chrome or Firefox for an optimal experience). For more information, you can go to the [presentation of the streamer](/exhibition/your-sonic-forest-streamer-luigi-marino/).

</span>

<div class="mt-4 mb-4">
 <embed type="text/html" src="/assets/html/googlemaps.html" width="100%" height="600px">
 </div>
