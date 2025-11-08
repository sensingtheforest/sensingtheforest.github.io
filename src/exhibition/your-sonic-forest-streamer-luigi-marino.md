---
title: Streamer | Luigi Marino
date: 2024-07-09T07:30:00.000Z
excerpt: Internet radio stations bringing forest sounds to your electronic device.
layout: post
draft:
seo:
  title: Streamer | Luigi Marino
  description: Internet radio stations bringing forest sounds to your electronic device.
  image: exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng.jpg
images: # relative to /src/assets/images/
  #feature: exhibition/Peter-Batchelor-Dendrophone-overview_by_Shuoyang_Zheng.jpg
  thumb: exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
hero: carousel # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/1 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: bg-green-900 # default bg-black
    image: exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng.jpg # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: # pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: Streamer | Luigi Marino
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: This is a solar-powered system in the woods, which means it sometimes goes offline
    #Let the Forest Speak using the Internet of Things, Acoustic Ecology and Creative AI<br /><span style="color:grey">AHRC-funded project (2023-25) : AH/X011585/1</span>
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: # Contact Us... # no button generated if left blank
  buttonURL: # /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
  carousel:
    images:
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_1.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_2.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_3.jpg
      #- exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_4.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_5.jpg
      #- exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_6.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_7.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_8.jpg
      #- exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_9.jpg
      - exhibition/Luigi-Marino-Streamer-II-closeup_photo_by_Shuoyang_Zheng_10.jpg

tags:
  - exhibition
  - technologies

---

:camera: *Photos and videos by Shuoyang Zheng*


At Sensing the Forest, we installed two listening stations: one near the permanent installation by Pete Bachelor, whose sounds are affected by the environmental data, and the second in a reclusive meadow near a gorgeous chestnut tree. In this way, everyone with an internet connection can go online and listen to the current state of Pete’s installation, or they can listen to the natural sounds happening in the meadow at any hour of the day or night. The devices we use for the transmission are simple internet radio transmitters. The technology isn’t new, but we gave the project an open-source twist. All the components of the transmitters belong to the DIY culture, and they are easily accessible or free to obtain as of today. All our original contributions - the models for the 3D-printed parts, the software, and the know-how - are freely available online on the project’s web page so that any enthusiast makers could build their own and hack them at will. We also tried to make them as environmentally friendly as possible: the cases are 3D-printed in PLA (a bioplastic made from corn starch) and waterproofed with bee wax.

We have documented our experience in the following tutorials and position paper:

* Marino, Luigi and Xambó, Anna (2024). [Developing DIY Solar-Powered, Off-Grid Audio Streamers for Forest Soundscapes: Progress and Challenges](https://www.chime.ac.uk/s/21-Luigi-Marino-and-Anna-Xambo.pdf), Proceedings of the [CHIME Annual One-day Music and HCI Conference 2024](https://www.chime.ac.uk/chime-annual-conference-2024), Milton Keynes, UK.

* Marino, Luigi (2023-2025): [Streamers' hardware](https://github.com/sensingtheforest/audio-streamer).
  * [Tutorial 1: Phase 1 - Setting up the streamers](/streamers/tutorial-1/).
  * Tutorial 2: Forthcoming.
  * [Tutorial 3: A DIY Solar-Powered Audio Streamer that Can Record Samples at Solar Times](/streamers/tutorial-3/).
  * [3D models](/streamers/tutorial-3/#3d-printed-parts).

After one year of streaming and recording (August 2024 - August 2025), the streamers stopped their mission on 26 August 2025. You can now enjoy the sound recordings on Freesound.

## Sound recordings 

The recordings from the two streamers are captured at least four times a day, timed to solar events (sunrise, solar noon, sunset, and the midpoint between sunset and sunrise). We are building an ongoing dataset from these recordings on Freesound.org. We hope these recordings will also be valuable resources for the Freesound community. You can find some highlighted examples on this blog post published on the Freesound blog: *[Sensing the Forest: Two Ongoing Datasets from DIY Streamers at Alice Holt Forest, UK](https://blog.freesound.org/?p=2248)*.

You can enjoy the recordings here:

{% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %}

👉 5-minute audio recordings streamer I (natural soundscape). [Pack: natural-soundscape-dataset](https://freesound.org/people/sensingtheforest/packs/42937/) on Freesound. 

👉 5-minute audio recordings streamer II (sound installation). [Pack: installation-soundscape-dataset](https://freesound.org/people/sensingtheforest/packs/43504/) on Freesound.

:fire: **Note**: This is a solar-powered system in the woods, which means it sometimes goes offline :fire:

{% endwrap %}

<!-- {% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %} -->


<!-- :fire: You can check the two live streamers on [this map](/listen) or directly following the below two links :fire: -->

<!-- {% endwrap %} -->

<!-- ## Natural streamer - Streamer I (*Giorgio*) -->

<!-- {% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %} -->

<!-- :fire: **Note**: This is a solar-powered system in the woods, which means it sometimes goes offline :fire: -->

<!-- :fire: **Attention**: We recommend Chrome or Firefox for an optimal experience :fire: -->


<!-- {% endwrap %} -->

<!-- **Natural streamer - Streamer I (*Giorgio) URL*** (Chrome or Firefox):  -->
<!-- [http://solid41.streamupsolutions.com:8010](http://solid41.streamupsolutions.com:8010/) -->

<!-- <div class="mt-4 mb-4"> -->
<!-- Streamup HTML5 Player -->
<!-- <iframe width="500" height="100" src="https://players.dedicateware.com/engine/simple_no_artwork.php?soco=%23FFFFFF&stana=%23F39000&bgco=%23151D28&coco=%23FFFFFF&secure=1&host=solid41.streamupsolutions.com&user=ashgavye&port=8010&mount=STF_Soundscape&autoplay=-1" frameborder="0" scrolling="no" style="border-radius: 8px;"></iframe> -->
<!--Streamup HTML5 Player-->
<!-- </div> -->

<!-- ## Installation streamer - Streamer II (*Paula*) -->

<!-- {% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %} -->

<!-- :fire: **Note**: This is a solar-powered system in the woods, which means it sometimes goes offline :fire: -->

<!-- :fire: **Attention**: We recommend Chrome or Firefox for an optimal experience :fire: -->

<!-- {% endwrap %} -->

<!-- **Installation streamer - Streamer II (*Paula*) URL** (Chrome or Firefox):  -->
<!-- [http://solid67.streamupsolutions.com:8063](http://solid67.streamupsolutions.com:8063/) -->

<!-- <div class="mt-4 mb-4"> -->
<!--Streamup HTML5 Player-->
<!-- <iframe width="500" height="100" src="https://players.dedicateware.com/engine/simple_no_artwork.php?soco=%23FFFFFF&stana=%23F39000&bgco=%23151D28&coco=%23FFFFFF&secure=1&host=solid67.streamupsolutions.com&user=upnybwpf&port=8063&mount=STF_Installation&autoplay=-1" frameborder="0" scrolling="no" style="border-radius: 8px;"></iframe> -->
<!--Streamup HTML5 Player-->
<!-- </div> -->

<br />

## Video snippets from the opening

<div class="mt-4 mb-4">
{% youtube "67sZidhHBdQ", "Streamer devices by Luigi Marino" %}
</div>


<div class="bg-gray-200 p-4 mt-4">

<img class="h-48 rounded-full mt-2 mr-2 mb-2 float-left " src="/assets/images/authors/luigi-marino.jpg" alt="Photo of Luigi Marino">

<br />

[**Luigi Marino**](http://www.luigimarino.net/) is a Research Fellow in Sound and Music Computing (Queen Mary University of London) working on the Sensing the Forest project. His research and practice focus on networks able to display relationships between human and nonhuman actors, and especially on how intuitive decisions can derail a pre-existing order. He is an active improvisor performing on both electronic media and percussion, in particular zarb and bowed custom cymbals extended with DIY portable circuits.

<br />
<br />


</div>

{% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %}

👉 Take our quick follow-up [survey](https://app.onlinesurveys.jisc.ac.uk/s/qmul/your-sonic-forest-v2). It only takes a few minutes! Many thanks for your participation!

<img class="h-48 rounded-lg mt-2 mr-2 mb-4" src="/assets/images/2025/06/survey-v2-qr-code.png" alt="Survey QR code">

Go to visit: 
[app.onlinesurveys.jisc.ac.uk/s/qmul/your-sonic-forest-v2](https://app.onlinesurveys.jisc.ac.uk/s/qmul/your-sonic-forest-v2) 

{% endwrap %}
