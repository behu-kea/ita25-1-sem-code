const map = L.map("map").setView([56, 11.6], 6);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.circle([56.8033777, 9.5168986]).addTo(map);


console.log(ufoSightings);
console.log(ufoSightings.Sheet1);

ufoSightings.Sheet1.forEach(ufoSighting => {
    console.log(ufoSighting);
    const latLngString = ufoSighting['lat, lng'];
    console.log(latLngString)
    const latLngParts = latLngString.split(", ");

    const lat = parseFloat(latLngParts[0])
    const lng = parseFloat(latLngParts[1])
    console.log(lat)
    console.log(lng)

    L.circle([lat, lng]).addTo(map);


    //const


})

