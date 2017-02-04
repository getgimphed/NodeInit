var socket = io("http://localhost:8080");
socket.on('disconnect',function(data){
  setTitle("Disconnected");
});
socket.on('connect',function(data){
  setTitle("Connected");
});
socket.on('message',function(data) {
  printMessage(data);
});
var form = document.forms['form'];
form.onsubmit = function (){
  var input = document.getElementById('message');
  printMessage(input.value);
  socket.emit('chat',input.value);
  input.value='';
}

function setTitle(title){
  var textnode = document.createTextNode(title);
  document.getElementById('title').innerHTML = "";
  document.getElementById('title').appendChild(textnode);
  // alert(title);
}
function printMessage(message) {
  var node = document.createElement("p");
  var textnode = document.createTextNode(message);
  node.appendChild(textnode);
  document.getElementById("messages").appendChild(node);
}
