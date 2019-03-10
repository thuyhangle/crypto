var pubnub = new PubNub({
    subscribeKey: 'sub-c-96b25e44-3fb7-11e9-99ed-dea01fda7778'
});

var pointLimit = 15; //Total amount of points on your graph.
var topPadding = 100; // Additional room between the top most point and the top of the chart
var bottomPadding = 100; // Additional room for the bottom of the graph
var eonData = {labels: true,type: 'line'}; // flag for rendering labels with the point and the type of line that will be rendered
var eonAxis = {y: {padding: {top:topPadding, bottom:bottomPadding}},
               x: {type: 'timeseries',tick: {format: '%H:%M:%S'}}}; // Formatting the time stamps along the bottom of the graphs.
