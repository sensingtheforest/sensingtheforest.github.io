---
title: Sonic Forest - Mapping Environmental Sensor Data to Sound for Climate Engagement
date: 2025-09-17T07:00:00.000Z
permalink: /2025/09/17/sonic-forest/
excerpt: Sonic Forest is a real-time sonification environment converting climate data from the forest to musical sound in order to facilitate public awareness on climate change as well as the ecological rhythms that I have created as part of my MSc Final Project. 
author: xinyue-xu
draft: false
seo:
  title:
  description:
  image: 2025/09/sonic-forest-by-xinyue-xu.jpg #
images: # relative to /src/assets/images/
  feature: 2025/09/sonic-forest-by-xinyue-xu.jpg #
  thumb: 2025/09/sonic-forest-by-xinyue-xu.jpg #
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - aesthetic-perspective-space
  - climate-change-communication
  - environmental-data
  - parameter-mapping
  - pure-data
  - research
  - software
  - sonification
  - technologies
  - theses

---

:camera: *Top photo: Xinyue Xu*

<br />

{% youtube "RUa0tish_Fs", "MSc Final Project Presentation: Sonic Forest by Xinyue Xu" %}

When we think about climate change, we usually picture graphs, charts, and statistics. These tools are essential for scientists, but for the public they can feel distant and abstract. The Sonic Forest project asks: what if we could listen to the forest instead?

Sonic Forest is a real-time sonification system that transforms microclimate data from Alice Holt Forest (UK) into musical sound. By mapping variables such as air temperature, humidity, wind speed, photosynthetically active radiation (sunlight), net radiation, and CO₂ levels to perceptually meaningful sound parameters, the project turns invisible environmental data into a sonic experience.

## From Sensors to Sound

A network of environmental sensors records the forest’s daily breath:

*	Air Temperature → background pitch
*	Humidity → reverberation space
*	Wind Speed → filtering and timbral shifts
*	Sunlight (PAR) → rhythm and tempo
*	Net Radiation → vibrato depth
*	CO₂ Concentration → melodic contour and harmonic mood

These values are processed in Pure Data (Pd), an open-source visual programming environment for sound. Each variable shapes a different musical element, creating a living soundscape that changes with the forest itself. On a bright morning the music becomes faster and brighter, while at night the sound slows down and darkens. Rising CO₂ concentrations shift the harmony toward tension and dissonance, serving as an audible “danger alert.”

## Why Sound?

Unlike visual graphs, sound unfolds in time, just like climate processes and ecological rhythms. Sonification allows listeners to intuitively follow changes: the transition from night to day, or the sudden spike of an extreme weather condition.

Guided by the Aesthetic Perspective Space (APS) framework, Sonic Forest balances two goals:

*	Clarity of data – ensuring that the sound mappings remain perceptually recognizable.
*	Aesthetic expressiveness – shaping the listening experience into something engaging and meaningful.

This balance makes the system suitable for both scientific communication and artistic exploration.

## Public Listening Test

To understand how people perceive these sounds, we conducted a structured listening test with 25 participants. The results were striking:

*	96% could detect temperature changes through pitch.
*	92% recognized humidity shifts in reverb.
*	100% identified sunlight-driven rhythm changes.
*	Listeners clearly distinguished daytime as more active and nighttime as calmer.

Many reported that the sonification felt natural and intuitive—as if they were sensing the forest’s breathing. This shows that even non-experts can grasp ecological dynamics through sound alone.

## Applications and Future Directions

Sonic Forest is more than an experiment—it points to new ways of connecting people with environmental change:

*	Education & Outreach: Museums, science centers, and schools can use sonification as interactive installations, letting people hear climate data.
*	Ecological Monitoring: Scientists can detect anomalies or unusual patterns more quickly by listening, not just looking.
*	Art & Performance: The system can generate real-time material for sound artists and composers, blending science with creativity.
*	Inclusive Design: Combined with visualization or tactile feedback, sonification could expand accessibility for audiences with diverse sensory abilities.

The project will continue developing toward multimodal, cross-disciplinary applications—bridging science, art, and public engagement.

## Conclusion

Sonic Forest transforms climate data into music, inviting us to listen differently to the living rhythms of the forest. By making microclimate dynamics audible, it brings us closer to ecological processes that are otherwise invisible, reminding us of the urgency of climate change and the beauty of environmental interconnection.

🎧 Explore the sounds here: [https://freesound.org/people/lilyxu1006/packs/44081/](https://freesound.org/people/lilyxu1006/packs/44081/)
💻 Source code on GitHub: [https://github.com/LilyXu1006/SonicForest_PureData](https://github.com/LilyXu1006/SonicForest_PureData) 

Note: Due to ethics requirements, the dataset is under restricted access. Aggregated results are reported in the thesis, and enquiries can be directed to the authors.


