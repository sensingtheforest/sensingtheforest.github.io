---
title: An Interview with Peter Batchelor
date: 2025-02-08T10:00:00.000Z
excerpt: For my final year BSc project, I am conducting a series of interviews with artists who work with solar-powered solutions. Peter Batchelor is the creator of Dendrophone, a sound installation currently exhibited at the Alice Holt Forest that transforms environmental data from the forest into an auditory experience.
author: aleksander-skutnik
draft:
seo:
  title:
  description:
  image: 2025/02/2024-12-06-Peter_Batchelor_and_Alex_Skutnik.jpg
images: # relative to /src/assets/images/
  feature: 2025/02/2024-12-06-Peter_Batchelor_and_Alex_Skutnik.jpg
  thumb: 2025/02/2024-12-06-Peter_Batchelor_and_Alex_Skutnik_thumb.jpg
  align: # object-center (default) - other options at https://tailwindcss.com/docs/object-position
  height: h-auto # optional. Default = h-48 md:h-1/3
tags:
  - acousmatic-music
  - artistic-olar-powered-solutions  
  - dendrophone
  - DIY
  - FUDI
  - interviews
  - multichannel
  - multichannel-installation
  - off-grid
  - pure-data
  - raspberry-pi
  - solar-panels
  - solar-power
  - sound-installations
  - spatial-artworks
  - spatial-sound
  - spatialisation

---

**About Peter Batchelor**: [Peter Batchelor](https://peterb.dmu.ac.uk/) is a Senior Lecturer and Programme Leader in Music Technology, and member of the Music, Technology and Innovation - Institute of Sonic Creativity (MTI2) at De Montfort University, Leicester and Co-Investigator of the Sensing the Forest Project. His creative activities encompass a range of electroacoustic composition and sound-making work, including radiophonic documentary, live-electronics and improvisation, multimedia and large-scale multi-channel installation work. Research interests that arise from this practice include: aural landscape construction in sonic arts practice; sound spatialisation/immersion; theories of space; place and listening as they pertain to sound; audience engagement and public art.

{% bq "mt-8 p-4 border-blue-500 italic text-blue-500 border-t-4 bg-gray-200" %}
<h3>«It’s rewarding to see how technology and sustainability can coexist in artistic practice.»</h3>
{% endbq %}

## Could we start with your background in artistic installations and what your main areas of interest are?

Sure! My background originally was in acousmatic music, which is a form of music that uses recorded sounds as its primary material. Traditionally, this music is presented in stereo, the two channels offering a sound image or sound stage within which sounds can be positioned.  This virtual image is then ‘realised’ via diffusion in a concert setting, where the sounds are projected to multiple channels using fader movements on a kind of inverted mixing desk. It’s a fascinating approach, and this was very much the one I used to begin with, but over time I began experimenting with multichannel setups where I could pre-compose the spatialisation. This allowed me more flexibility and precision in how I deployed sounds over loudspeakers. But I still conceive of multichannel environments in the same way as I approached stereo – i.e. conceiving of the speaker array as a single, coherent sound stage rather than treating each speaker as an independent source. This approach allows for a much richer experience where sounds move fluidly through space.

Over the years, I’ve worked on ever larger multichannel projects. *Studies on Canvas* was a 30-channel installation with hidden speakers behind blank canvas which were deployed to create realistic soundscapes that the audience could look ‘into’. That project taught me a lot about creating depth and complexity within multichannel systems. More recently, my work on the GRIDs series has focused on achieving high-channel counts using affordable and scalable technology—an essential consideration for large-scale installations without unlimited funding.

{% bq "mt-8 p-4 border-blue-500 italic text-blue-500 border-t-4 bg-gray-200" %}
<h3>«I operate within very much a DIY aesthetic, trying to manage costs while achieving quite ambitious technical goals.»</h3>
{% endbq %}

## Could you tell me more about the technology behind your installations?

I operate within very much a DIY aesthetic, trying to manage costs while achieving quite ambitious technical goals. For the *[Dendrophone](/exhibition/your-sonic-forest-dendrophone-peter-batchelor/)* project I rely on Raspberry Pi Zeros for their affordability, low power consumption, and flexibility. These are paired with consumer-grade sound interfaces and amplifiers, such as D-class kit amps, which are both cost-effective and energy-efficient.

I used a modular system design. Each Raspberry Pi runs its own instance of Pure Data (Pd), which handles tasks like sample playback and processing, and with the audio interfaces can handle eight channels each. For a previous installation, *Cascade*, I aggregated 256 channels using 32 Raspberry Pis in a similar way, each similarly connected to their own sound interface. This modular approach has allowed me to scale up or down based on a project’s requirements. The Raspberry Pis communicate with each other using FUDI (Flexible Universal Digital Interface). Synchronisation is close enough, though not sample accurate, so the compositional aspect needs to accommodate this.

In terms of sound generation, for *Dendrophone* I was a little limited by the CPU and memory capabilities of the Zeros, so the patches trigger sounds from quite a large library of pre-composed eight-channel soundfiles. They then apply relatively simple processing, the parameters of which are all determined by the incoming forest data. For *Cascade* I had Pis and so I was able to do live granulation across systems, which is quite forgiving in terms of synchronisation if I get any data hangups with networked triggering. I find granulation is also highly effective for creating immersive textures which can work rather beautifully over multichannel systems. By layering grains of sound, I can emulate real-world phenomena like rain or rustling leaves while maintaining a sense of spatial depth. I had to do this granulation in advance for *Dendrophone*.

{% bq "mt-8 p-4 border-blue-500 italic text-blue-500 border-t-4 bg-gray-200" %}
<h3>«One of the main challenges is the variability of sunlight due to the forest canopy and seasonal changes.»</h3>
{% endbq %}

## How do you power these installations, especially in remote locations?

Powering these installations can be quite challenging, particularly in off-grid environments like forests. For the *Dendrophone* installation, Luigi and I adopted solar-powered solutions for our respective interventions. Initially, we rather naively considered portable battery packs, but they proved hopelessly insufficient for the energy demands of our systems. Instead, we each use four 120-watt solar panels paired with a lead-acid leisure battery for energy storage. While not the most cutting-edge solution, it’s reliable and pretty cost-effective.

One of the main challenges is the variability of sunlight due to the forest canopy and seasonal changes. Solar efficiency can drop significantly under dense tree cover, producing as little as 0.1 amp, even from four solar panels. On a clear day, and when the sun manages to penetrate the canopy, we might get 1.3 amps or more, which if it were consistent, would make the installation comfortably self-sustaining. But it isn’t consistent, even in the summer! To manage the fluctuations, the installation operates on a fixed schedule, running from 11 a.m. to 5 p.m. This ensures that we don’t overdraw the battery, particularly in winter, when the solar capture is particularly poor.

All of this means that we need to replace the battery with a fully charged one from time to time – more frequently as we approach the winter months. We will have a better idea, after the winter, of how often we need to change the battery and how this changes depending on season.

<div class="flex justify-center items-center">
<figure>
<img class="mt-4 mb-4" src="/assets/images/2025/02/2024-12-06-Peter_Batchelor_and_Alex_Skutnik_closeup.jpg" alt="Close-up of Peter Batchelor showing to Aleksander Skutnik how the Dendrophone installation works.">
<figcaption>Close-up of Peter Batchelor showing to Aleksander Skutnik how the Dendrophone installation works.</figcaption>
</figure>
</div>

## How did you decide on the positioning of the solar panels?

The solar panels are essentially fixed at a 45-degree angle, which is a practical compromise.  We’ve propped them up using wood from the forest, which seemed an environmentally fitting solution. The main challenge is optimising placement to maximise sunlight exposure while minimising interference from the canopy. Ideally, I’d adjust the angle seasonally—we’re told they should be at about 30 degrees in summer for optimal capture, and at a steeper angle in winter. I’ve made a few adjustments but where we’re positioned in the forest means that the angle doesn’t really make much difference.

{% bq "mt-8 p-4 border-blue-500 italic text-blue-500 border-t-4 bg-gray-200" %}
<h3>«I see a lot of potential for renewable energy to expand the reach of sound installations into remote and outdoor settings.»</h3>
{% endbq %}

## What benefits and challenges have you encountered while sourcing energy for your installations?

The biggest challenge is balancing efficiency with practicality. Again, tree canopy and low winter sun limit solar panel output, but these constraints have forced me to think creatively about energy use. For instance, I’ve optimised the software running on the Raspberry Pis to minimise power consumption. Using D-class amps has also been a game-changer, as they’re much more efficient than A-class amp designs I’ve used in the past.

On the positive side, using renewable energy aligns with the themes of my work, which often explore environmental processes. It’s rewarding to see how technology and sustainability can coexist in artistic practice.

## What’s your vision for the future of sound installations and solar-powered solutions?

I see a lot of potential for renewable energy to expand the reach of sound installations into remote and outdoor settings. As technology improves, we’ll have more efficient and smaller computer solutions and advanced batteries, making complex installations more feasible. I’m also interested in integrating energy data visualisation into the artwork itself, creating a feedback loop between the technical and artistic elements.
