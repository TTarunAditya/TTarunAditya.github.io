var GoogleMap;
function initGMap()
{
    GoogleMap = new google.maps.Map(document.getElementById('GMap'),
    {
        center: {lat: 12.934398, lng: 77.534476},
        zoom: 18
    });
}
var BingMap;
function OnPageLoad()
{
    initBMap();
    initMapBox();
    document.getElementById('loader').style.visibility = "hidden";
}
function initBMap()
{
    BingMap = new Microsoft.Maps.Map(document.getElementById('BMap'),
    {
        center: new Microsoft.Maps.Location(12.934398, 77.534476),
        zoom: 18
    });
    document.getElementById('GMap').style.visibility = "hidden";
    document.getElementById('BMap').style.visibility = "visible";
    document.getElementById('MapBox').style.visibility = "hidden";
    document.getElementById('MapOptions').selectedIndex = 1;
}
function initMapBox()
{
    mapboxgl.accessToken = 'pk.eyJ1IjoidHRhcnVuYWRpdHlhIiwiYSI6ImNqeno4Yjk2azB5dGkzYmtpZGYybGp3dWcifQ.RHkvQz9GQiKQlRZv4_EXjQ';
    var map = new mapboxgl.Map({
    container: 'MapBox',
    style: 'mapbox://styles/mapbox/streets-v9'
    });
}
function MapOptionsChange()
{
    var MapOptions = document.getElementById('MapOptions');
    document.getElementById('GMap').style.visibility = "hidden";
    document.getElementById('BMap').style.visibility = "hidden";
    document.getElementById('MapBox').style.visibility = "hidden";
    switch(MapOptions.options[MapOptions.selectedIndex].value)
    {
        case "GMaps":
            document.getElementById('GMap').style.visibility = "visible";
            break;
        case "BMaps":
            document.getElementById('BMap').style.visibility = "visible";
            break;
        case "MapBox":
            document.getElementById('MapBox').style.visibility = "visible";
            break;
    }
}