// /* =====================
//  Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
// ===================== */
// var downloadData = $.ajax("http://raw.githubusercontent.com/CPLN692-MUSA611/datasets/master/json/philadelphia-bike-crashes-snippet.json");
// var parseData = function(data) {
//   return  JSON.parse(data);
// };
//
//
// var makeMarkers = function(crashDataArray) {
//     return _.map(crashDataArray, function(crashDataPoint){
//       return L.marker([crashDataPoint.LAT,crashDataPoint.LNG]);
//     });
// };
//
// var plotMarkers = function(markers) {
//    _.map(markers, function(myMarker){
//      myMarker.addTo(map);
//   });
// };
//
//
// /* =====================
//   Define the function removeData so that it clears the markers you've written
//   from the map. You'll know you've succeeded when the markers that were
//   previously displayed are immediately removed from the map.
//
//   In Leaflet, the syntax for removing one specific marker looks like this:
//
//   map.removeLayer(marker);
//
//   In real applications, this will typically happen in response to changes to the
//   user's input.
// ===================== */
//
// var removeMarkers = function(mapMarkers) {
//   _.each(mapMarkers, function(marker){
//     map.removeLayer(marker);
//   });
// };


/* =====================
  Optional, stretch goal
  Write the necessary code (however you can) to plot a filtered down version of
  the downloaded and parsed data.

  Note: You can add or remove from the code at the bottom of this file.
===================== */

/* =====================
 Leaflet setup - feel free to ignore this
===================== */


/* =====================
 CODE EXECUTED HERE!
===================== */

// downloadData.done(function(data) {
//   var parsed = parseData(data);
//
//  var markers = makeMarkers(parsed);
//
//  plotMarkers(markers);
// // removeMarkers(markers);
// });

var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

///NEW CODE WEEK 5
$(document).ready(function() {
  $("#text-input1").prop('disabled', false);
  //$("#text-input1").val("https://raw.githubusercontent.com/CPLN690-MUSA610/datasets/master/json/philadelphia-solar-installations.json");
  $("#text-input2").prop('disabled', false);
  $("#text-input3").prop('disabled', false);



  $("body > div.sidebar > button").click(function(){
        $("#text-input1").text("URL");
        var URL= $("#text-input1").val();
        //console.log("url", URL);

        $("#text-input2").text("Latitude");
        var myLat= $("#text-input2").val();


        $("#text-input3").text("Longitude");
        var myLong= $("#text-input3").val();


        var downloadData = $.ajax(URL);
        var parseData = function(data) {
          return  JSON.parse(data);
        };


        var makeMarkers = function(whateverArray) {
            return _.map(whateverArray, function(whateverPoint){
              return L.marker([whateverPoint[myLat],whateverPoint[myLong]]);
            });
        };

        var plotMarkers = function(markers) {
           _.map(markers, function(myMarker){
             myMarker.addTo(map);
          });
        };

          downloadData.done(function(data) {
          var parsed = parseData(data);

         var markers = makeMarkers(parsed);

         plotMarkers(markers);




      //


// $("#text-input1").prop('disabled', false);
// $("#text-input2").prop('disabled', false);
//
// var form = {};
//   form.field1= $("#text-input1").val();
//   form.field2= $("#text-input2").val();
//   form.field3= $("#text-input3").val();




  });

  });
});
