const map = L.map("map").setView([22.9074872, 79.07306671], 5);
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by Raja Muhamad Asim with ❤️';
const tileLayer = L.tileLayer(tileUrl, { attribution });
tileLayer.addTo(map);

//Adding Circle to the map
// radius would be in meters
const CLayer = L.circle([22.9074872, 79.07306671], {
  radius: 900,
  color: "orange", //For all
  fillColor: "red", //For inner radius without border
});
CLayer.addTo(map);

//How to make rectangle

var bounds = [
  [54.559322, -5.767822],
  [56.1210604, -3.02124],
];

// create an orange rectangle
L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);

// zoom the map to the rectangle bounds
// map.fitBounds(bounds);

//How to make the Polygon
var latlngs = [
  [37, -109.05],
  [41, -109.03],
  [41, -102.05],
  //   [37, -102.04],
];

var polygon = L.polygon(latlngs, { color: "red" }).addTo(map);

// zoom the map to the polygon
// map.fitBounds(polygon.getBounds());

//How to make marker
L.marker([50.5, 30.5]).addTo(map);

L.circleMarker([-20, 50], {
  radius: 40,
}).addTo(map);

//How to use custom icon as marker
const icon = L.icon({
  iconUrl: "./assets/pizza.jpg",
  //Icon width and Height
  iconSize: [20, 30],
});
const customMarker = L.marker([-1.5333, 20.9005], {
  icon,
});
customMarker.addTo(map);

//How to make the Popup
customMarker.bindPopup(
  "<h1>This is Pizza Shop 1 you can eat at any where</h1>"
);

//How to make Tooltip

customMarker.bindTooltip("This is the Tooltip").openTooltip();

//How to open Tooltip default
customMarker.bindTooltip("This is the Tooltip");

//Second Tooltip

//How to use custom icon as marker
const icon2 = L.icon({
  iconUrl: "./assets/pizza.jpg",
  //Icon width and Height
  iconSize: [20, 30],
});
const customMarker2 = L.marker([20.5, -2.9], {
  icon,
});
customMarker2.addTo(map);

//How to make the Popup
customMarker2.bindPopup(
  "<h1>This is Pizza Shop 2 you can eat at any where</h1>"
);

//How to make Tooltip

customMarker2.bindTooltip("This is the Tooltip2").openTooltip();

//How to open Tooltip default
customMarker2.bindTooltip("This is the Tooltip2");

//Group the markers in one layer
//Like to make thing like satellite or any thing click on the button to show the thing or hide on clicking that
