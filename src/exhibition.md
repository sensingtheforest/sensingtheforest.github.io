---
title: Online Exhibition # will be overwritten by SEO.title below
date: 2024-05-18
layout: page
eleventyNavigation:
  key: main
  title: Exhibition # as it will appear in the nav
  order: 3 # order to display in the nav
seo:
  title: Your Sonic Forest - Hear Nature Speak through Sound Installations in Alice Holt Forest
 # overrides 'title' above on both Page and META
  description: Art event - Thursday 20th June 11am-3pm, Alice Holt Forest (free entrance)
  image:  # relative to /assets/images/
hero: graphic # options: carousel, graphic, video, split (text & image)
heroSettings:
  height:
    mobile: h-1/1 # options = h-1/1 (default = full screen), h-1/2, h-1/3, h-3/4, h-9/10, h-48 (12rem, 192px), h-56 (14rem, 224px), h-64 (16rem, 256px)
    desktop: # leave blank to inherit "mobile" height (default = full screen)
  headingText: Your Sonic Forest
  headingTextColor: text-white # text-gray-800 # default = text-white (can use any TailwindCSS text-[color]-[xxx])
  subheadingText: <strong>Art event</strong><br />Thursday 20th June 11am-3pm<br />Alice Holt Forest, GU10 4LS, Farnham
  subheadingTextColor: #text-black-700 # Leave empty to inherit headingTextColor or default (text-white) or use any text-[color]-[xxx]
  #buttonText: Apply # no button generated if left blank
  #buttonURL: https://de-montfort.onlinesurveys.ac.uk/sensing-the-forest-summer-school-application # full url required. Example: https://thisdomain.com/somepage/
  buttonTextColor: # leave blank to inherit from /src/_data/colors.buttonCustom or buttonDefault
  buttonBgColor:  # leave blank to inherit from /src/_data/colors.buttonCustom.bg or buttonDefault.bg
  bg:
    image: exhibition/Peter-Batchelor-bird-boxes-speakers.jpg # image URL # image URL
    imagePosition: left # options = left, center, right
    imageOpacity: opacity-50 # options = opacity-25, opacity-50, opacity-75, opacity-100 (default)
    imageOpacityFilter: black # options = black or white (default) -> really depends on your background image


---

<br />
<hr />
<!-- Display the countdown timer in an element -->
<h1 id="demo" style="background-color: greenyellow;"></h1>
<hr />
<br />

### Join us for a day of exploration and inspiration at Sonic Forest, a groundbreaking event that merges art, science, and nature to raise awareness of forest ecologies. Set against the picturesque backdrop of Alice Holt Forest, this immersive experience created by international artists is designed to engage families, art enthusiasts, environmentalists, and curious minds alike. Embark on a guided walk through the forest, where you will encounter a series of thought-provoking sound installations. These installations are not just art; they are a dialogue with the environment, using data collected from the forest itself to convey powerful messages about climate change, and contributing to its acoustic ecology.


{% wrap "pl-3 mt-4 bg-indigo-100 border border-indigo-300 text-lg italic rounded-lg" %}

:fire: You can find more info and register for the free event on the following Eventbrite link: 
[https://www.eventbrite.com/e/your-sonic-forest-tickets-908706935907](https://www.eventbrite.com/e/your-sonic-forest-tickets-908706935907) :fire:

:fire: [Subscribe to our announce mailing list](https://groups.google.com/g/sensingtheforest-announce) :fire: 

{% endwrap %}


<!-- Code source: https://www.w3schools.com/howto/howto_js_countdown.asp-->

<script>
// Set the date we're counting down to
var countDownDate = new Date("Jun 20, 2024 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  // document.getElementById("demo").innerHTML = "Time remaining:";
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>



