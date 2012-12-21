#!/usr/local/bin/node

var http = require('http');//

var options = {

	host: "www.showmyip.com",//host should not have an http in front
	port: 80,//default port it usually 80
	path: "/simple/"

};//end of options for the get request

// check response -- this following method does not 
http.get(options, function(res) {

	// console.log("Got response: " + res.statusCode);

}).on('error', function(e) {

	// console.log("Got error: " + e.message);

});//

// make actual request and get the actual body of the element
var req = http.request(options, function(res) {

	// write out status and headers
	// console.log("Status: " + res.statusCode);
	// console.log("Headers: " + JSON.stringify(res.headers));
	res.setEncoding("utf8");

	res.on("data", function(chunk) {
		console.log("Global IP Address: " + chunk);
	});//end of on method

});//end req

req.on("error", function(e) {
	console.log("Could not get global ip at this time");
	// console.log("Problem with request " + e.message);
});



req.end();