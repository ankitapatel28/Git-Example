
var http = require('http');

//create a server object:
//This commit is from feature1 branch
//Direct commit from Remote
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8080
