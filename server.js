console.log("mi primer archivo en NodeJs");
var http = require('http');
/*var server = http.createServer(function(request, response){

    response.writeHead(200,{"Content-Type": "Text/html"});
    response.write("Hola mundo");
    response.end();


} http.createServer(onRequest));
server.listen(8988);*/


var http = require("http");
function iniciar() {
function onRequest(request, response) {
console.log("Petición Recibida.");
response.writeHead(200, {"Content-Type": "text/html"});
response.write("Hola Mundo");
response.end();
}
http.createServer(onRequest).listen(8988);
console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;