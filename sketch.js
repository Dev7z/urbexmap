var map = L.map('map').setView([47.54594, 7.67773], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([47.54594, 7.67773]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

const markers = [
[[47.5, 7.75],"Saab"]
];

markers.forEach(addMarker);

function addMarker(item) {
	var marker = L.marker(item[0]).addTo(map);
	marker.bindPopup(item[1]).openPopup();
}