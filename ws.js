var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var server = require('http').createServer(app).listen(port);
var io = require('socket.io')(server);

app.use(express.static("./publichat"));

io.on("connect",function(client){
  console.log("connected someone");
  client.emit('message',"Connected");
  client.on('chat',function(data){
    client.broadcast.emit("message",data);
  });
  client.on('disconnect',function(){
    console.log("Client Left the chat room");
  });
});
