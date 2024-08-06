/** Original code from: https://developers.google.com/maps/documentation/javascript/examples/icon-complex **/
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_add_map]
// Initialize and add the map
let map;

async function initMap() {

  // [START maps_add_map_instantiate_map]
  // The general location of the two streamers
  const position = { lat:  51.16, lng: -0.83 };

  let titles = new Array();

  titles = ["Streamer I: Giorgio", "Streamer II: Paula"];

  const contentString1 =
  '<div id="content">' +
  '<img src="/assets/images/listen/streamer1.jpg" alt="Streamer in a meadow." style="width:300px; float:left; padding: 0 2em 2em 0" />' +
  '<h1 id="firstHeading" class="firstHeading">' + titles[0] + '</h1>' +
  // "<p>One of the two listening stations installed at the Alice Holt Forest is in a small meadow near a gorgeous chestnut tree. The device is a simple internet radio transmitter that can be enjoyed by anyone with an internet connection.</p>" +
  "<p>One of the two listening stations installed at the Alice Holt Forest is in a small meadow near the Alice Holt Lodge Pond. The device is a simple internet radio transmitter that can be enjoyed by anyone with an internet connection.</p>" +
  "<p><strong>Note</strong>: This is currently in testing mode. Hence, the streamer might not be operational. Please be patient. It will soon be fully working 24/7/365!</p>" +
  '<!--Streamup HTML5 Player-->' +
  '<iframe width="500" height="100" src="https://players.dedicateware.com/engine/simple_no_artwork.php?soco=%23FFFFFF&stana=%23F39000&bgco=%23151D28&coco=%23FFFFFF&secure=1&host=solid41.streamupsolutions.com&user=ashgavye&port=8010&mount=STF_Soundscape&autoplay=-1" frameborder="0" scrolling="no" style="border-radius: 8px;"></iframe>' +
  '<!--Streamup HTML5 Player-->' +
  '<div id="bodyContent">' +
  "</div>" +
  "</div>";

  const contentString2 =
  '<div id="content">' +
  '<img src="/assets/images/listen/streamer2.jpg" alt="Streamer in a trail." style="width:300px; float:left; padding: 0 2em 2em 0" />' +
  '<h1 id="firstHeading" class="firstHeading">' + titles[1] + '</h1>' +
  "<p>One of the two listening stations installed at the Alice Holt Forest is near the permanent installation by Pete Bachelor, whose sounds are affected by the environmental data sent by a customised Forest Research's data logger. The device is a simple internet radio transmitter that can be enjoyed by anyone with an internet connection.</p>" +
  "<p><strong>Note</strong>: This is currently in testing mode. Hence, the streamer might not be operational. Please be patient. It will soon be fully working 24/7/365!</p>" +
  '<!--Streamup HTML5 Player-->' +
  '<iframe width="500" height="100" src="https://players.dedicateware.com/engine/simple_no_artwork.php?soco=%23FFFFFF&stana=%23F39000&bgco=%23151D28&coco=%23FFFFFF&secure=1&host=solid67.streamupsolutions.com&user=upnybwpf&port=8063&mount=STF_Installation&autoplay=-1" frameborder="0" scrolling="no" style="border-radius: 8px;"></iframe>' +
  '<!--Streamup HTML5 Player-->' +
  '<div id="bodyContent">' +
  "</div>" +
  "</div>";

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  const streamers = [
    [titles[0], 51.180841, -0.833379, 4, contentString1], // 51.168209, -0.83989888 // 51.176792, -0.837306
    [titles[1], 51.167272, -0.838244, 4, contentString2], // 51.168907, -0.838251
  ];
  
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at ...
  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // [END maps_add_map_instantiate_map]
  
  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at ...

  // Data for the markers consisting of a name, a LatLng and a zIndex for the
  // order in which these markers should display on top of each other.
  
  let markers = new Array(streamers.length);

  for (let i = 0; i < streamers.length; i++) {
    const stream = streamers[i];

    markers[i] = new AdvancedMarkerElement({
      map: map,
      position: { lat: stream[1], lng: stream[2] },
      title: stream[0],
      zIndex: stream[3],
    });

    const infowindow = new google.maps.InfoWindow({
      content: stream[4],
      ariaLabel: stream[0],
    });
  
    markers[i].addListener("click", () => {
      infowindow.open({
        anchor: markers[i],
        map,
      });
    });
  
  }

  // [END maps_add_map_instantiate_marker]

}


function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.

  for (let i = 0; i < streamers.length; i++) {
    const stream = streamers[i];

    new google.maps.Marker({
      map: map,
      position: { lat: stream[1], lng: stream[2] },
      title: stream[0],
      zIndex: stream[3],
    });
  }
}

initMap();


