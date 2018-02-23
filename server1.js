var http = require ("http");

var PORT1 = 7000;
var PORT2 = 7500;

function firstServer(request, response) {

	response.end("That was great " + request.url + "!!! You are awesome!!!");
}

var server1 = http.createServer(firstServer);

server1.listen(PORT1, function() {

	console.log("Server listening on: http://localhost:" + PORT1);
});

function secondServer(request, response) {
	response.end("That is the best you can do " + request.url + "? You are not good enough :(");
}

server2 = http.createServer(secondServer);

server2.listen(PORT2, function() {
	console.log("Server listening on http://localhost:" + PORT2);
});