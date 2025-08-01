---
title: Art, Unplugged - In the search of a sustainable off-grid power solution for immersive art installations
date: 2025-08-01T07:00:00.000Z
permalink: /2025/08/01/art-unplugged/
excerpt: The inspiration for my final year project came from the Sensing the Forest project, which focuses on collaborative and interdisciplinary approaches to studying the relationship between forests and climate change. 
author: aleksander-skutnik
draft: false
seo:
  title:
  description:
  image: 2025/08/2024-12-06-Peter_Batchelor_and_Alex_Skutnik_closeup.jpg #
images: # relative to /src/assets/images/
  feature: 2025/08/2024-12-06-Peter_Batchelor_and_Alex_Skutnik_closeup.jpg #
  thumb: 2025/08/2024-12-06-Peter_Batchelor_and_Alex_Skutnik_closeup.jpg #
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - artistic-solar-powered-solutions
  - interviews
  - master-theses
  - machine-learning
  - research
  - solar-panels

---

## Introduction

The inspiration for this project came from the Sensing the Forest project, which focuses on collaborative and interdisciplinary approaches to studying the relationship between forests and climate change. As I personally find this topic very important in terms of being a global issue, for my final year project I have decided to develop a project in that domain under pivotal supervision of Dr Anna Xambó Sedó.

## Aim

For years now, it has been very well documented how excessive electrical energy production highly contributes to greenhouse gas emissions worldwide. With the very rapidly increasing interest and demand for immersive and digital art installations, we can see how energy usage proportionally rises. In order to counter this, this project aims to answer the question: **How can we devise a power solution to achieve selfsustainability of art installations, and how can we apply this knowledge in the art industry?**

## Field Study

An initial step in carrying out my project was a site visit to the Alice Holt Forest, specifically the *Dendrophone* installation by Dr Peter Batchelor and the *Streamers* by Dr Luigi Marino. I had the pleasure to visit onsite in the company of my project supervisor Dr Anna Xambó Sedó where we also met Dr Peter Batchelor. Together, we were able to see hands-on how the installations operate and their technical aspects. Dr Peter Batchelor very kindly answered all of my questions regarding his work, and I was also then able to interview him on site in an office space we booked for the day, courtesy of Forestry England. The interview has been published on the Sensing the Forest website. This visit has helped me study the theoretical background for my project and see how my topic could apply to existing real life installations. I believe that was an essential step to this project in order to ground my research and findings in a real world context.

## Interviews

In order to build a theoretical framework backing up my proposed solution, I have decided to carry out a series of interviews with artists who have experience with integrating solar power in their work. I have personally reached out via email to a number of artists that have relevant experience in this field and arranged a range of interviewssome of them being in person, online or over email. [Dr Peter Batchelor](/2025/02/08/an-interview-with-peter-batchelor/), **Dr Luigi Marino**, [Dr Chris Meigh-Andrews](/2025/03/14/an-interview-with-chris-meigh-andrews/), [Sarah Hall](/2025/03/10/an-interview-with-sarah-hall/), **Elizabeth Monoian**, **Robert Ferry**, **Alex Nathanson** and **Shala Akintunde** have all very kindly agreed to take part in the study. The questions asked about the artists’ background in art and solar power, the technical aspects behind the operation of their installations, benefits and challenges the artists have faced while implementing solar power and any visions/ideas/values they associate with integrating solar power as a green, renewable energy source for their installations.

Insights from these interviews gained in the process of thematic analysis helped me shape the theoretical framework and identify system requirements essential for the proposed solution I will discuss later on. I believe reaching out to artists was crucial for this project, as they will be the end users of the solution - thus, their insights and experiences are pivotal in the construction of said solution.

## Proposed solution

This part of the project introduces an initial prototype of a **solar forecasting and battery simulation tool**:

* **Data source**: `PVGIS` solar irradiance API.
* **ML forecasting**: `RandomForestRegressor` predicts energy inflows.
* **Battery model**: Simulates charge/discharge cycles across multiple days.
* **User interface**: Built in `Streamlit` for users to input location, system specifications, time of year and day and see visualised output.

The tool calculates daily energy yield and battery status, letting users explore seasonal variability and system resilience. This is especially beneficial while planning installations to see if their operation basing on solar power is feasible and executable. The working initial prototype with instructions on how to run can be found [here](https://github.com/askutnik/artunplugged).

The screenshots below present the interactive user dashboard of my solution. The user inputs all geographical data for the conditions they want to forecast, e. g. location, tilt angle and azimuth of the PV panel. Then, the program fetches PVGIS database data using and API call and presents two graphs. The first one shows actual solar irradiance data across five years for the specified location which is taken from the PVGIS database.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/08/art-unplugged-screenshot-1.jpg
" alt="Screenshot of energy production visualisation and forecasting.">
<figcaption>Screenshot 1 of Art Unplugged: Energy production visualisation and forecasting.</figcaption>
</figure>
</div>

This shows the user how solar irradiance has been changing over time for the specified location and allows them to understand which months bring the highest levels of solar irradiance. Then, a machine learning model for forecasting Global Tilted Irradiance (GTI) is trained on the fetched data and then compared in a scatter plot graph to actual solar irradiance values. The model’s R2 score is also presented. This is for the purpose of demonstrating how accurate the model actually is in predicting GTI values. 

On the second tab is dedicated for solar irradiance forecasting and battery charge/discharge cycle simulation. The user inputs all required details, including the month of the year they want to forecast for, how many days the forecast should cover, battery capacity in Ah of their installation, system voltage of their installation, the power rating of their PV panel setup and the total load power of the installation. 

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/08/art-unplugged-screenshot-2.jpg
" alt="Screenshot of energy production visualisation and forecasting.">
<figcaption>Screenshot 2 of Art Unplugged: Energy production visualisation and forecasting.</figcaption>
</figure>
</div>

With those specifications, the previously trained model predicts the solar irradiance values across the number of days selected by the user. Additionally, the battery charge and discharge cycles are presented on a continuous line basing on the solar irradiance availability across the different hours of the day. I believe that this tool can be really helpful for artists who are in the process of planning and designing their installation in order to determine how to make their power solution viable and functional under specified by them conditions.

## Conclusion

This project was a great learning experience for me. What I loved about it most is being able to work with so many inspiring and knowledgeable individuals without whom I would not be able to achieve the goals of my project. I am really happy with the fact that I was able to study and explore a global issue in depth while at the same time applying it in an academic context, as well as exploring how the scientific and artistic domain converge.