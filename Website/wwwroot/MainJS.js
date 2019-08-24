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
function initBMap()
{
    BingMap = new Microsoft.Maps.Map(document.getElementById('BMap'),
    {
        center: new Microsoft.Maps.Location(12.934398, 77.534476),
        zoom: 18
    });
}
function MapSelButtonClick()
{
    if(document.getElementById('GMap').style.visibility == "visible")
    {
        document.getElementById('GMap').style.visibility = "hidden";
        document.getElementById('BMap').style.visibility = "visible";
        document.getElementById('MapSelButton').textContent = "Go to Google Maps";
    }
    else
    {
        document.getElementById('GMap').style.visibility = "visible";
        document.getElementById('BMap').style.visibility = "hidden";
        document.getElementById('MapSelButton').textContent = "Go to Bing Maps";
    }
}