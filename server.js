var http = require('http');
var fs = require('fs');


var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
      fs.readFile('./index.html', (err, data) => {
        if (err) throw err;
        response.write(data);
        response.end();
      });
    } else {
        var img = fs.readFileSync('./error.jpg');
        response.writeHead(200, {'Content-Type': 'image/jpg' });
        response.end(img, 'binary');
    }
});

server.listen(8080);
