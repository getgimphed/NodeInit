var http = require ('http');
var server = http.createServer(function(req,res){
  res.writeHead(200,{"Content-Type":"text/html"});
  res.end(`Hello Buddy Contact : <a href='#'>vedant.me</a>
              <p>${req.method}</p>
  `);
});

server.listen(8080);
