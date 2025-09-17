---
title: Design of Cost Effective IOT Dendrometer Sensor for Environmental Monitoring 
date: 2025-05-05T10:00:00.000Z
excerpt: In this tutorial, we introduce the design of a customised dendrometer sensor for our DIY tree talker.
author: mahmoud-elmokadem
author2: krishna-nama-manjunatha
draft: 
seo:
  title:
  description:
  image: 2025/05/DIY-tree-talker.jpg
images: # relative to /src/assets/images/
  feature: 2025/05/DIY-tree-talker.jpg
  thumb: 2025/05/DIY-tree-talker.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - dendrometer
  - development
  - diy-tree-talker
  - do-it-yourself
  - raspberry-pi
  - tutorials
 
---

## Introduction

Monitoring tree growth is essential for understanding forest health, ecosystem dynamics, and climate change impacts. At the heart of this process is the dendrometer sensor—an instrument designed to measure changes in a tree’s diameter over time. This helps to understand seasonal, and annual growth patterns in response to environmental conditions. As this is linked to and can be correlated with the tree diameter fluctuations with temperature, rainfall, humidity, and soil moisture and identify the stress events like droughts, heatwaves, or cold spells. Growth data of the tree can be used to estimate biomass accumulation, indicate root damage or poor soil conditions, and growth with respect to fertilizers, irrigation regimes and climate.  However, traditional dendrometer systems often come with high costs and complex installation requirements, limiting their accessibility for small-scale researchers, farmers, and institutions in low-resource settings. As environmental monitoring becomes more critical globally, there's a growing demand for affordable, reliable, and scalable solutions. A cost-effective dendrometer sensor can democratise access to valuable data, enabling broader participation in ecological research and resource management. By reducing financial barriers, we not only make long-term monitoring feasible but also support sustainable practices in both forestry and agriculture.

## Overview of Different Types of Dendrometer Sensors

There are various types of dendrometers currently used by researchers and scientists to measure changes in the diameter of trees, plants, or even fruits. While the designs may differ, they all share a similar sensing mechanism aimed at achieving the same objective: tracking dimensional changes over time to study growth patterns, water transport, and environmental stress responses. The most common types include point dendrometers, band dendrometers, and manual dendrometers as shown in Figure 1. 

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-1.jpg" alt="Figure 1. Comparison with different types of commercially available dendrometers (a) Point Dendrometer [1] (b) Band Dendrometers [2] (c) Manual Band Dendrometers [3].">
<figcaption>Figure 1. Comparison with different types of commercially available dendrometers (a) Point Dendrometer [1] (b) Band Dendrometers [2] (c) Manual Band Dendrometers [3].</figcaption>
</figure>
</div>

Point dendrometers use a single contact point against the bark to detect radial changes. Band dendrometers wrap around the stem or trunk and measure circumference changes, making them ideal for long-term monitoring. Manual band dendrometers uses a tape measurement warp around the stem or trunk. Despite their effectiveness, many of these instruments are expensive, complex, or power-intensive—limiting their use in remote, large-scale, or low-budget projects. This highlights the growing need for a simplified, cost-effective dendrometer that maintains accuracy while being affordable, easy to deploy, and suitable for long-term environmental monitoring.

## Designing a Cost-Effective Dendrometer Sensor

The proposed cost-effective dendrometer sensor design is heavily based on an open-source magnetic dendrometer as described in this research paper [4]. In that study, the researchers developed a dendrometer using a carbon fibre frame (as shown in Figure 2) and utilised the AS5311 magnetic sensor to capture the change in diameter of the tree/branch, data was processed using an Arduino-based microcontroller. Reported total cost was approximately $260 per unit.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-2.jpg" alt="Figure 2. Carbon fibre based dendrometer sensor.">
<figcaption>Figure 2. Carbon fibre based dendrometer sensor.</figcaption>
</figure>
</div>

Building on their approach with a focus on cost reduction, we made two key modifications: replacing the carbon fibre frame with 3D-printed components made from high-density PLA and using a industrial accepted Raspberry Pi Zero 2W single-board computer for data acquisition. These changes enabled us to reduce the overall cost by 50%, making the solution significantly more affordable without compromising core functionality.

## Dendrometer Sensor Design

Details of our modified version are presented below. Figure 3 illustrates the final design of the cost-effective dendrometer sensor, representing the 3D CAD model of the sensor. Final prototype was achieved after several iterations, with multiple versions developed and tested for each component throughout the design process. These developmental stages are shown in Figures 4, 5, and 6. Each version contributed valuable insights, helping us refine the mechanical structure, sensor placement, and integration with the Raspberry Pi. By systematically evaluating and improving individual parts, we achieved a compact, robust, and low-cost solution suitable for long-term outdoor use.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-3.jpg" alt="Figure 3. Various parts of the dendrometer that is designed in this work.">
<figcaption>Figure 3. Various parts of the dendrometer that is designed in this work.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-4.jpg" alt="Figure 4. Different version for the main chassis that was used and modified to achieved more reliable and repeatable measurements">
<figcaption>Figure 4. Different version for the main chassis that was used and modified to achieved more reliable and repeatable measurements.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-5.jpg" alt="Figure 5. Different versions designed for the T shape mount to accommodate the magnet sensor and the magnet.">
<figcaption>Figure 5. Different versions designed for the T shape mount to accommodate the magnet sensor and the magnet.</figcaption>
</figure>
</div>

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-6.jpg" alt="Figure 6. Carbon fibre based dendrometer sensor.">
<figcaption>Figure 6. Carbon fibre based dendrometer sensor.</figcaption>
</figure>
</div>

## Working Principle of the Dendrometer Sensor

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-7.jpg" alt="Figure 7. Dendrometer sensor connected to Yucca Plant to carry out measurements and remotely stream the data of key parameters.">
<figcaption>Figure 7. Dendrometer sensor connected to Yucca Plant to carry out measurements and remotely stream the data of key parameters.</figcaption>
</figure>
</div>

The main chassis of the dendrometer sensor is secured to the tree/plant using a strap, ensuring stable attachment without causing any damage to the bark or applying external stress. A movable component, referred to as the T-shaped magnet mount, is connected to the chassis via an extension spring and is positioned to slide forward and backward in response to the tree/stem’s natural expansion or contraction. These micro-movements—often in the micrometer range—are detected by the AS5311 magnetic linear encoder, which precisely tracks the relative position of the magnet. The sensor transmits data to the Raspberry Pi Zero 2W via a PWM (Pulse Width Modulation) signal, which is then processed and converted into readable measurements that reflect changes in stem diameter over time. The sensor is integrated into a larger sensing unit that also includes additional sensors to monitor environmental parameters such as temperature, humidity, and soil moisture—alongside the tree’s natural expansion or contraction. All collected data is streamed to a central server for real-time monitoring and analysis. The complete unit is shown in Figure 8, while a sample of the recorded sensing data is presented in Figure 9. 

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-8.jpg" alt="Figure 8. Sensing the Forest DIY IOT Sensing Unit that measures and streams data such as temperature, humidity, soil moisture, and tree diameter.">
<figcaption>Figure 8. Sensing the Forest DIY IOT Sensing Unit that measures and streams data such as temperature, humidity, soil moisture, and tree diameter.</figcaption>
</figure>
</div>


<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/05/Figure-9.jpg" alt="Figure 9. Streaming data from the Raspberry Pi Zero remotely with all the key parameters required to understand the health of a tree.">
<figcaption>Figure 9. Streaming data from the Raspberry Pi Zero remotely with all the key parameters required to understand the health of a tree.</figcaption>
</figure>
</div>


## List of References

[1] https://tomst.com/web/events/point-dendrometer/ 
[2] https://ictinternational.com/product/band-dendrometers/ 
[3] https://jeetekno.com/product/series-5-manual-band-dendrometers/ 
[4] Clonch, C., Huynh, M., Goto, B., Levin, A., Selker, J. and Udell, C., 2021. [High precision zero-friction magnetic dendrometer](https://www.sciencedirect.com/science/article/pii/S246806722100078X). HardwareX, 10, p.e00248. 


