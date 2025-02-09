---
title: 12th Field Trip to Alice Holt Forest
date: 2025-01-19T08:00:00.000Z
excerpt: On 17 September 2024, we went on a field trip to change batteries and do a general maintenance check of Streamers I and II, and make a few more recordings of the two sites (natural soundscape and modified soundscape).

author: anna-xambo
draft:
seo:
  title:
  description:
  image: 2025/01/2024-09-17-group-photo.jpg
images: # relative to /src/assets/images/
  feature: 2025/01/2024-09-17-group-photo.jpg
  thumb: 2025/01/2024-09-17-group-photo.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - alice-holt-forest
  - artistic-interventions
  - dendrophone
  - development
  - field-trips
  - maintenance
  - streamers

---

*From left-right, Anna Xambó and Luigi Marino.*

## Status of Streamer Giorgio and Natural Soundscapes

We started the day with a 5-minute audio recording that can be listened here. This has the purposed to get familiar with the soundscape of the site.

<div class="flex justify-center items-center mt-4 mb-4">

<iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/755150/simple/large/" width="920" height="245"></iframe>

</div>

We used the [Merlin Bird ID app](https://merlin.allaboutbirds.org/) to see what birds are identified. A great variation is identified including Common Chiffchaff, Coal Tit, Eurasian Wren, European Robin, Long-tailed Tit, Eurasian Blue Tit, and Eurasian Treecreeper. We will need to investigate more and contrast these results with what bird-recognition algorithms will tell us from the dataset that we are building. We also used the mobile app [Flora Incognita](https://floraincognita.com/), which identified the following plants and trees: Shrubby Blackberry, Black Pine, Pine Tree, Birch, and Dull-leaved Sorrel.  

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/01/2024-09-17-panoramic-meadow-giorgio-streamer.jpg" alt="A panoramic view of the meadow where Giorgio streamer is located.">
<figcaption>A panoramic view of the meadow where Giorgio streamer is located.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/01/2024-09-17-closeup-meadow-giorgio-streamer.jpg" alt="A close-up view of the meadow where Giorgio streamer is located.">
<figcaption>A close-up view of the meadow where Giorgio streamer is located.</figcaption>
</figure>
</div>

The power draw of Giorgio's streamer in this clear meadow is 0.25Ah. We have observed that with 15 hours of sunlight, it works with a battery of 7AH and one solar panel of 100W but after 4 days in a row, it stops working. Hence, we replace the battery with a 50Ah. We checked the Voltage of the solar panels, which was as expected (20.3V) and the Amperage was high too (3.54A), measured at noon, which can be seen as a peak time. Other maintenance duties include collecting the recordings and cleaning the dust of the MEMs microphones.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/01/2024-09-17-Giorgio-streamer-maintenance.jpg" alt="Several maintenance tasks on Giorgio streamer.">
<figcaption>Several maintenance tasks on Giorgio streamer.</figcaption>
</figure>
</div>

## Status of Streamer Paula, Dendrophone and Modified Soundscapes

We did also create a 5-minute audio recording that can be listened here of the Dendrophone sound installation, with the purpose to get familiar with the modified soundscape of the site.

<div class="flex justify-center items-center mt-4 mb-4">
<iframe frameborder="0" scrolling="no" src="https://freesound.org/embed/sound/iframe/755153/simple/large/" width="920" height="245"></iframe>
</div>

The right mic stopped working. It showed major signs of corrosion and rust. Luigi replaced it. Luigi is still awaiting the right conformal coating to protect circuits in a humid environment. Luigi temporarily used a neutral-cure silicone (non-neutral ones corrode the copper). When silicone is wet it is conductive. This means that there can be clicks in the recordings.

We changed the battery to one of 50 Ah. Currently, there is one solar panel of 120W (18.66V, 0.19A) that shortly after we changed to two solar panels of 120W in parallel. We need to verify its longevity. The power draw of Paula's streamer is very low (0.1Ah). We changed the battery to 50Ah and we also changed the SD card from 128GB to 256GB. The solar crontab was also updated for the recordings to include four instances during Pete's installation but then four more instances to align with Giorgio's recordings.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/01/2024-09-17-Luigi-transporting-battery-with-trolley.jpg" alt="Luigi transporting a battery with a trolley.">
<figcaption>Luigi transporting a battery with a trolley.</figcaption>
</figure>
</div>

## New signage

Luigi and I discussed that the new signage should include information about what is this about, give a warning about not touching the device, and also how to engage outside.

## Earth Photo 2024

We concluded the day enjoying the outdoors exhibition [Earth Photo 2024](https://www.earthphoto.world/), an amazing exhibition commissioned by Forestry England, the Royal Geographical Society (with IBG) and Parker Harris. This is an international collection of photographic images and films that stimulate conversations about our world.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/01/2024-09-17-earth-photo-2024.jpg" alt="Earth Photo 2024.">
<figcaption>Earth Photo 2024.</figcaption>
</figure>
</div>

## Follow-up

The follow-up includes adding a second solar panel to Paula streamer and continuing the development of the streamers so that they can survive the winter!

## Acknowledgements

Thanks to Danielle Grimsey and the Alice Holt Forest team for their help with the logistics of the day.
