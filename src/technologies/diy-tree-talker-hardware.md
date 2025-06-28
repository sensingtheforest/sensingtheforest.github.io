---
title: DIY Tree Talker | Hardware
date: 2025-06-27T07:30:00.000Z
excerpt: The hardware component of the DIY Tree Talker.
layout: post
draft:
seo:
  title: DIY Tree Talker | Hardware
  description: The hardware component of the DIY Tree Talker.
  image: technologies/diy-tree-talker-hardware-northern-research-station.jpg
images: # relative to /src/assets/images/
  #feature: exhibition/Peter-Batchelor-Dendrophone-overview_by_Shuoyang_Zheng.jpg
  thumb: technologies/diy-tree-talker-hardware-northern-research-station.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/1 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: bg-green-900 # default bg-black
    image: technologies/diy-tree-talker-hardware-northern-research-station.jpg # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: # pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: DIY Tree Talker | Hardware
  headingTextColor: # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  headingTextCase: # default = as typed - options: uppercase, lowercase, capitalize
  subheadingText: #
    #Let the Forest Speak using the Internet of Things, Acoustic Ecology and Creative AI<br /><span style="color:grey">AHRC-funded project (2023-25) : AH/X011585/1</span>
  subheadingTextColor: # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  buttonText: # Contact Us... # no button generated if left blank
  buttonURL: # /contact/ # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor: # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  buttonBgHover: # leave blank to inherit from /src/_data/colors.buttonCustom.bgHover or buttonDefault.bgHover
  buttonBorder: # leave blank to inherit from /src/_data/colors.buttonCustom.border or buttonDefault.border
  
tags:
  - technologies

---

### Authors: Mahmoud B. Elmokadem, Krishna Nama Manjunatha, Georgios Xenakis, Anna Xambó

*A Real-World Deployment of the Streaming Unit. 
:camera: *Photo by Mahmoud B. Elmokadem.**



The system integrates a suite of sensors—including a capacitive soil moisture sensor, a combined temperature and humidity sensor, and a bespoke dendrometer, connected to a Raspberry Pi Zero 2W for data acquisition and processing.

A custom tree-talker prototype is being developed, using a participatory design approach. The device comprises a soil moisture sensor, a combined temperature and humidity sensor, and a bespoke dendrometer, connected to a Raspberry Pi Zero 2W single-board computer for data acquisition. You can read about our dendrometer in our tutorial [Design of Cost Effective IOT Dendrometer Sensor for Environmental Monitoring](/2025/05/05/design-of-cost-effective-iot-dendrometer-sensor-for-environmental-monitoring/).

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/technologies/diy-tree-talker-streaming-unit-hardware.png
" alt="Hardware Configuration Overview of the Sensing Unit.">
<figcaption>Hardware Configuration Overview of the Sensing Unit.</figcaption>
</figure>
</div>

Traditional dendrometer systems often come with high costs and complex installation requirements, limiting their accessibility for small-scale researchers; thus, a custom, cost-effective dendrometer was iteratively designed, based on Clonch and colleagues’ open-source magnetic carbon fibre dendrometer [1]. To further reduce costs, we replaced the carbon fibre frame with 3D-printed components made from high-density PLA, and captured data using the Raspberry Pi, reducing the overall cost by 50%, without compromising core functionality.
 
The main chassis of the dendrometer sensor is secured to the tree/plant using a strap, ensuring stable attachment without causing any damage to the bark or applying external stress. A movable component, referred to as the T-shaped magnet mount, is connected to the chassis via an extension spring and is positioned to slide forward and backwards in response to the tree/stem’s natural expansion or contraction. These micro-movements—often in the micrometer range—are detected by the AS5311 magnetic linear encoder, which precisely tracks the relative position of the magnet. The sensor transmits data to the Raspberry Pi Zero 2W via a PWM (Pulse Width Modulation) signal, which is then processed and converted into readable measurements that reflect changes in stem diameter over time. The sensor is integrated into a larger sensing unit that also includes additional climatic sensors to monitor environmental parameters such as temperature, humidity, and soil moisture, alongside the tree’s natural expansion or contraction. All collected data is streamed to a central server for real-time monitoring and analysis.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/technologies/diy-tree-talker-hardware-northern-research-station-closeup.jpg
" alt="Closeup of a real-world deployment of the streaming unit.">
<figcaption>Closeup of a real-world deployment of the streaming unit. Photo by Mahmoud B. Elmokadem.</figcaption>
</figure>
</div>

:fire: We are currently running a participatory design user study. We will share the hardware code soon on our [GitHub project webpage](https://github.com/orgs/sensingtheforest/repositories).

## List of References


[1] Clonch, C., Huynh, M., Goto, B., Levin, A., Selker, J. and Udell, C., 2021. [High precision zero-friction magnetic dendrometer](https://www.sciencedirect.com/science/article/pii/S246806722100078X). HardwareX, 10, p.e00248. 