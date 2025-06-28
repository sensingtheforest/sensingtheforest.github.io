---
title: DIY Tree Talker | Software
date: 2025-06-27T07:30:00.000Z
excerpt: The software component of the DIY Tree Talker.
layout: post
draft:
seo:
  title: DIY Tree Talker | Software
  description: The software component of the DIY Tree Talker.
  image: technologies/screenshot-chartjs.png
images: # relative to /src/assets/images/
  #feature: exhibition/Peter-Batchelor-Dendrophone-overview_by_Shuoyang_Zheng.jpg
  thumb: technologies/screenshot-chartjs.png
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/1 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  bg:
    color: bg-green-900 # default bg-black
    image: technologies/screenshot-chartjs.png # relative to /assets/images/
    imagePosition: # options = bg-center (default), bg-left, bg-right
    video: # pixabay-john-macdougall.mp4 # local relative /assets/video/, or full https://... if remote?
    opacityMobile: opacity-50 # options opacity-n, 5, 10, 15, 20, 25, 50, 75, 100 (default)
    opacityDesktop: opacity-75 # Leave blank to inherit opacityMobile, use same options as opacityMobile
  headingText: DIY Tree Talker | Software
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

### Authors: Tug F. O’Flaherty, Xinyue Xu, Gerard Roma, Georgios Xenakis, Anna Xambó

*Screenshot of the sensor data using Chart.js with temperature (red), humidity (blue), soil moisture (green) and displacement (yellow).*


## Backend 

We created a a customised web server using [Express.js](https://expressjs.com). The server allows sharing the data produced by the tree talkers with the general public. The server is developed as a RESTful API, providing different functionalities through REST end points, corresponding to HTTP URLs. Each  tree talker posts a JSON file at regular times to a dedicated end point that the web server catches and stores in the server's file system [1]. 

## Frontend

For each individual tree talker unit several REST end points provide data management functionality, such as checking the latest JSON file sent by the unit; listing all the generated JSON files; and verifying all the files as they are sent. This is useful to confirm that the unit works and that the values sent are correct. The JSON file data structure looks like this:

```
{ 
``timestamp": ``2025-06-12 19:40:22", 
``temperature": 17.89, 
``humidity": 54.60, 
``soilmoisture": 60.03, 
``displacement in micrometer": 18.59 
}
```

Each unit has a `public` end point which allows visualisation and sonification of the sensor data. Visualisations were developed using  [Chart.js](https://www.chartjs.org) library. For the data sonification, we are exploring different mappings ranging from simple to complex. 

:fire: We are currently running a participatory design user study. We will share the software code of the web server and weather-to-sound data soon on our [GitHub project webpage](https://github.com/orgs/sensingtheforest/repositories).


[1] We will release the code soon. At present it can be tested here, which serves the latest JSON file from one of the units: [http://159.65.116.195:3000/stf/northern_2/](http://159.65.116.195:3000/stf/northern_2/)