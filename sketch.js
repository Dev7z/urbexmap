var map = L.map('map').setView([47.54594, 7.67773], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markers = [
[[47.54134159140473, 7.549538764842142], "Bunker"],
[[47.487583383740954, 7.625082130288086], "Villa (Torn down accourding to urbex-datenbank.ch)"],
[[47.48371948257739, 7.4997036626881615], "Small factory building (unconfirmed, has cameras in the front entrance)"],
[[47.531650, 7.679270], "Factory"],
[[47.460390119754294, 7.871896547444343], "Farmhouse"],
];

markers.forEach(addMarker);

function addMarker(item) {
	var marker = L.marker(item[0]).addTo(map);
	marker.bindPopup(item[1]).openPopup();
}
