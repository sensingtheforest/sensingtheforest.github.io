---
title: 16th Field Trip to Alice Holt Forest
date: 2025-02-19T08:00:00.000Z
excerpt: We went for the 16th visit to the Alice Holt Forest on 15th February 2025. The main goal of this field trip was to replace the batteries for Dendrophone installation and Paula's streamer in the Willows Green Trail and install a newer high-end model for Giorgio's streamer.

author: luigi-marino
draft:
seo:
  title:
  description:
  image: 2025/02/2025-02-15-Giorgio-streamer-new-model.jpg
images: # relative to /src/assets/images/
  feature: 2025/02/2025-02-15-Giorgio-streamer-new-model.jpg
  thumb: 2025/02/2025-02-15-Giorgio-streamer-new-model.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - alice-holt-forest
  - development
  - field-trips
  - maintenance
  - streamers
  - 3D-printing

---

*The new version of Giorgio's streamer with a higher-quality audio model.*

Today, I had my trip to the forest.

Everything keeps working exactly as we expect now. The Dendrophone installation was up, and the installation streamer went down yesterday after 15 days when the battery dropped below 11.4v.

I replaced the batteries and installed the newer hi-end model in the soundscape. This includes two RODE Lavalier microphones and a mini RODE audio interface. You can check the difference, especially by night when it's silent.

{% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %}

:fire: **Note**: This is a solar-powered system in the woods, which means it sometimes goes offline.

{% endwrap %}

**Streamer I (Giorgio)**: [http://solid41.streamupsolutions.com:8010](http://solid41.streamupsolutions.com:8010/)

<div class="mt-4 mb-4">
<!--Streamup HTML5 Player-->
<iframe width="500" height="100" src="https://players.dedicateware.com/engine/simple_no_artwork.php?soco=%23FFFFFF&stana=%23F39000&bgco=%23151D28&coco=%23FFFFFF&secure=1&host=solid41.streamupsolutions.com&user=ashgavye&port=8010&mount=STF_Soundscape&autoplay=-1" frameborder="0" scrolling="no" style="border-radius: 8px;"></iframe>
<!--Streamup HTML5 Player-->
</div>

The RODE Lavalier mics are seriously shielded everywhere, and as electret, they have lower impedance than the MEMS, so even if cables are all coiled near the modem, you can hear zero interferences. If power requirements are met again and humidity doesn't cause troubles, I think we truly know everything we need to know! And I'm really happy about it.

Stay tuned for the forthcoming release of the code and tutorials related to the streamers!
