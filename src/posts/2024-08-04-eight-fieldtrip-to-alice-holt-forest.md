---
title: Eight Field Trip to Alice Holt Forest 
date: 2024-08-04T08:00:00.000Z
excerpt: We went for an eight visit to the Alice Holt Forest to update Pete's installation and Streamer II Paula in Willows Green as part of the one-year artistic intervention.

author: anna-xambo
draft:
seo:
  title:
  description:
  image: 2024/08/Group_photo_field_trip_29_July_2024.jpg
images: # relative to /src/assets/images/
  feature: 2024/08/Group_photo_field_trip_29_July_2024.jpg
  thumb: 2024/08/Group_photo_field_trip_29_July_2024.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - alice-holt-forest
  - announcements
  - artistic-interventions
  - dendrophone
  - development
  - field-trips
  - streamers

---

<br />

*Group photo: from left to right, Anna Xambó, Luigi Marino and Peter Batchelor.*

On Monday 29 July, Pete, Luigi and I went to Alice Holt Forest on our eight field trip to update Pete's installation and Streamer II Paula in Willows Green. This was yet another fruitful field trip to Alice Holt Forest that kept us busy from the beginning to the end of the day. We were lucky with the weather again!

## Early morning set-ups

In the morning, Pete started installing the updates for his sound installation Dendrophone (including a solar panel!) as well as checking that all was in their right place (only some wires had been tugged away from a tree). I managed to assemble as best as I could the trolley that we bought for maintenance purposes (e.g. carrying heavy car batteries). Later, Jack helped us to tighten the bolts with a proper adjustable spanner.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/2024-07-29-Dendrophone-setting-up-one-solar-panel.jpg" alt="Dendrophone installation: setting up one solar panel.">
<figcaption>Dendrophone installation - setting up one solar panel.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/trolley.jpg" alt="Trolley.">
<figcaption>Trolley suitable for maintenance purposes in the Alice Holt Forest.</figcaption>
</figure>
</div>


## Understanding our data

After these first tasks, Pete and I went to the Alice Holt Cafe for a coffee and discussed several open questions related to the audio recordings of the streamers and the historical weather data that Pete might be using for his installation. 

Although in the original proposal, we wanted to align the recording times of the two streamers for a potential comparison between natural and modified soundscapes recorded at the same time, external factors have made this option too challenging. It is simply very difficult to compare both because the conditions are different: for the altered soundscape, Pete's installation is live 9:00-17:00 (UK time) and so it will be meaningful to make 4 recordings within this range. For the natural soundscape, by contrast, we would still like to cover a meaningful representation of the entire day. Hence, we decided to keep both groups of recordings as two separate datasets: a raw natural soundscape with four 5-minute recordings around sunrise, noon, sunset and midnight; and a modified soundscape of four regular 5-minute recordings capturing Pete's installation within the daytime that the installation is live. 

Inspired by [a publication on soundscape phenology in a subtropical woodland](https://www.sciencedirect.com/science/article/pii/S0048969723016996), we commented on whether moonrise and moonset could also be relevant. We even consulted ChatGPT for some advice before taking any decision, which was helpful! We then discussed the historical weather data that Pete had plotted using a Python script. It was a comprehensive way of seeing the different variables and how they interconnect among them depending on the time of the day, the month and the season. 

Overall, it was an important discussion that will justify the motivation and type of audio recordings that will last for one year. 

## Exploring two solar panels in parallel for Pete's installation

During these days, Luigi has done intensive research on DIY solar panels. We have been very much inspired by the blog post [How to Build a Small Solar Power System](https://solar.lowtechmagazine.com/2023/12/how-to-build-a-small-solar-power-system/) from the amazing [Low<-Tech Magazine](https://solar.lowtechmagazine.com), "a solar-powered website, which means it sometimes goes offline". Luigi shared with Pete his discoveries. From this conversation, and the constant guidance of Ho, Pete has decided to also try the use of DIY solar panels in his installation to make a system that is as sustainable and independent as possible.  

As part of this field trip's update, Pete brought two DIY solar panels that he arranged in parallel. He first tried one single DIY solar panel, which was already giving 0.6A-1.3A of input solar power. As expected, with the addition of a second solar panel in parallel, the current augmented as well staying over 1A most of the time. This was very promising!

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/2024-07-29_Dendrophone_with_two_solar-panels.jpg" alt="Dendrophone installation - two solar panels connected in parallel.">
<figcaption>Dendrophone installation - two solar panels connected in parallel.</figcaption>
</figure>
</div>

Luigi arrived at the precise moment we were learning from the use of the Ecoworthy solar power controller, and his knowledge was essential for understanding the basics of how to turn it on and off!

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29-Dendrophone-Ecoworthy-solar-power-controller.jpg" alt="Dendrophone installation - behind the scenes including an Ecoworthy solar power controller.">
<figcaption>Dendrophone installation - behind the scenes including an Ecoworthy solar power controller.</figcaption>
</figure>
</div>


## Decisions on Streamer I Giorgio and Streamer II Paula: location and power

During our lunch meeting at the Alice Holt Cafe, and as a follow-up of [our previous field trip where we set up Streamer I Giorgio in the small pond in front of the Alice Holt Visitor Centre](/2024/08/03/seventh-field-trip-to-alice-holt-forest/), we decided that the small pond was not satisfactory enough in terms of the biodiversity richness for a natural soundscape (too much human activity!). In addition, the lack of sunlight due to the solar panel being below the tree canopies ultimately affected the correct standalone operation of the unit. 

We agreed to find a new location for the streamer with enough sunlight and fewer human-made sounds. Luigi had 3 options but we had to discard two of them for not being within Forestry England's land. Later in the afternoon, we were going to inspect this option. Given the potential remote location of this new spot and the difficulty for the Forestry England staff to monitor it so frequently, we decided to use the Ecoflow solar power system to feed Streamer II Paula next to Pete's installation in the Willows Green trail and use a DIY solar-powered system for Streamer I Giorgio. 

<br />

### Streamer II Paula

Accordingly, after lunch, we first set up Streamer II Paula. Luigi had wired the cables of the microphones more securely than Streamer I Giorgio to avoid potential electromagnetic interferences (EMIs). Using his phone, Luigi programmed the recordings at four times a day during the opening times of Pete’s installation in agreement with Pete. Note: there are several mobile apps that work as an Secure Shell (SSH) client, such as [Termux](https://en.wikipedia.org/wiki/Termux), [Termius](https://play.google.com/store/apps/details?id=com.server.auditor.ssh.client), [Qute](https://play.google.com/store/apps/details?id=com.ddm.qute&hl=en_US), [CommandBot](https://play.google.com/store/apps/details?id=org.connectbot), [JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh), or [TermOne Plus](https://f-droid.org/packages/com.termoneplus/). 

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29_Luigi_and_Pete_coding.jpg" alt="Luigi talking to Streamer II Paula using his phone and Pete talking to Dendrophone using his laptop.">
<figcaption>Luigi talking to Streamer II Paula using his phone and Pete talking to Dendrophone using his laptop.</figcaption>
</figure>
</div>

The second task was to set up Streamer II Paula. Although the Ecoflow battery was uncharged, we decided not to charge it through the AC charging (grid charging) to see if it could survive the solar-power charge ind this new area. However, as we will report in [the next blog post](/2024/08/05/ninth-field-trip-to-alice-holt-forest/), this approach did not work.

We went to see Danielle at the Visitor Centre with a bunch of questions about how to best arrange the solar panels given the testing mode we are still in for the next days but considering the prime time in Alice Holt with all the families and kids around. 

<br />

### Streamer I Giorgio 

Following Jack's advice, Luigi and I went back to the area of the Lodge Pond trying to find a suggested quiet spot that could work well for the natural soundscape that we were looking for related to Streamer I Giorgio. We could not find the described spot, but we found instead another small meadow previously spotted by Luigi on the map that seemed to be ideal: it seemed to have the right balance of quietness plus it faces south without the shade of tree canopies! We agreed with Luigi that we would try Streamer I Giorgio in this spot in the next field trip once Giorgio would have the new wiring cables to avoid EMIs (similar to Paula) as well as a DIY solar panel to be tested in these new conditions. 

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29-A-meadow-near-Alice-Holt-Lodge-Pond.jpg" alt="A promising spot for Streamer I Giorgio near Alice Holt Lodge Pond.">
<figcaption>A promising spot for Streamer I Giorgio near Alice Holt Lodge Pond.</figcaption>
</figure>
</div>

## Wrapping up

We went back to Willows Green to meet Pete. Pete had tightened the solar panels. We helped Pete to find wood logs of different sizes to protect the solar panels and cables. The final composition looked very well integrated with the natural landscape, and it sounded great!

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29-tiding-up-Dendrophone-with-wood-logs.jpg" alt="Collecting wood logs from the nearby area.">
<figcaption>Collecting wood logs from the nearby area.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29-tiding-up-Dendrophone-with-wood-logs-finished.jpg" alt="Dendrophone tidied up with wood logs.">
<figcaption>Dendrophone tidied up with wood logs.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2024/08/
2024-07-29-Dendrophone-and-Streamer-II-Paula.jpg" alt="Dendrophone and Streamer II Paula at the end of the day.">
<figcaption>Dendrophone and Streamer II Paula at the end of the day.</figcaption>
</figure>
</div>


## What's next

Our next plans include Luigi's return within the next days to set up Streamer I Giorgio powered by a DIY solar-powered panel in the new promising meadow with the new wiring cables as well as see if the O2 SIM card will have coverage there. We will also monitor Streamer I Giorgio in the new shaded location using the Ecoflow system and Dendrophone if it works during the expected times and has enough battery to last. We have also discussed whether two more solar panels (up to four solar panels in parallel) might provide enough energy to fully power the installation, which Pete would like to try in his next visit. 

The potential wall of solar panels has raised the discussion of how to best display them and how to inform the audience about their relevant role in making it all self-sustainable. We can also maybe put all the panels together including the streamer's solar panel so that it looks neater. Even heightening them to the speakers' level is an option to increase their efficiency.


## Acknowledgements

We thank the Forestry England Alice Holt team for their constant help. We are thankful to Alice Eldridge for her advice on the frequency of the recordings of the natural soundscape. Thanks to Ashley Lauren Noel-Hirst for recommending us the Low<-Tech magazine. Thank you to Mike for the historical data shared with Pete for his installation. Last but not least, thanks to Ho for his constant help and support in designing self-sustainable systems.
