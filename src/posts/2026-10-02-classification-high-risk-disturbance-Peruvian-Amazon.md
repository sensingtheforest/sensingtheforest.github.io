---
title: Classification of High-Risk Disturbance in the Peruvian Amazon
date: 2026-10-01T12:00:00.000Z
excerpt: Seeing work that started as an individual undergraduate project potentially contribute to rainforest protection in Peru has made the experience far more significant than I initially expected. 
author: haidar-chawki-kassem
draft:
seo:
  title:
  description:
  image: 2026/10/Screenshot-RADD-forest-disturbance-alerts-Peruvian-Amazon.jpg
images: # relative to /src/assets/images/
  feature: 2026/10/Screenshot-RADD-forest-disturbance-alerts-Peruvian-Amazon.jpg
  thumb: 2026/10/Screenshot-RADD-forest-disturbance-alerts-Peruvian-Amazon.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - deforestation
  - ForestEye
  - RAAD
  - rainforest
  - RFUK
  - software
  - theses

---

*Top photo: A screenshot showing Radar for Detecting Deforestation (RADD) forest disturbance alerts in the Peruvian Amazon.*


<br />

For my third-year individual industry project at Queen Mary University of London, I was given the opportunity to explore how artificial intelligence and satellite data could help identify illegal activity in the Peruvian Amazon. What began as a university project has since developed into something with the potential for genuine impact, with my work now being taken forward to support local communities monitoring threats to the rainforest.

The original challenge was to develop a system capable of analysing forest disturbance alerts and Sentinel-1 Synthetic Aperture Radar (SAR) satellite data to determine what was happening on the ground.

One of the biggest challenges with monitoring the Amazon is cloud cover. Traditional optical satellite imagery can be obstructed by the dense and persistent clouds found over tropical rainforests. Sentinel-1 instead uses radar, allowing observations to be made through cloud cover and during both day and night. This made SAR particularly valuable for continuously monitoring remote areas of the Amazon.

I developed the system using [Google Earth Engine](https://earthengine.google.com) and machine-learning techniques to analyse satellite observations associated with [Radar for Detecting Deforestation (RADD)](https://satelligence.com/radd/) forest disturbance alerts, a near-real-time alert system that tracks forest disturbances using satellite radar instead of optical imagery. Rather than simply identifying that a disturbance had occurred, the aim was to provide more useful information about what that disturbance might represent.

The resulting system classified areas into categories including active mining, historical disturbance, inactive or intact forest, and coca cultivation. Alerts could then be accompanied by confidence information, helping users understand and prioritise potentially significant activity.

The project was developed in connection with [Rainforest Foundation UK (RFUK)](https://www.rainforestfoundationuk.org), whose [ForestEye](https://www.rainforestfoundationuk.org/introducing-foresteye-a-cutting-edge-tool-for-local-deforestation-analysis/) platform supports local-level analysis of deforestation. ForestEye is designed to provide forest monitors and local communities with satellite-based information that can complement their knowledge and observations on the ground.

After completing the project, I recently spoke again with the team at RFUK and learned that the work is being taken forward. They are connecting with partners working directly with communities in Peru, with the intention of providing alerts and confidence scores that can help local forest monitors identify areas requiring attention.

This is particularly meaningful because these technologies are not intended to replace people on the ground. Instead, satellite monitoring can help communities focus limited resources on areas where potentially illegal activity has been detected and provide evidence that can support engagement with relevant authorities.

When I began the project, I viewed it primarily as an opportunity to apply what I had learned during my Computer Science and Artificial Intelligence degree to a difficult real-world problem. Seeing work that started as an individual undergraduate project potentially contribute to rainforest protection in Peru has made the experience far more significant than I initially expected. It has shown me how AI, when combined with domain expertise and the people directly affected by a problem, can move beyond the classroom and become a tool for real-world impact.

## Acknowledgement

I would like to thank Rainforest Foundation UK and the ForestEye team for their support and insight, and for helping explore how this work could be applied to real-world rainforest monitoring.