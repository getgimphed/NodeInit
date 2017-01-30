var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

function func(data){
  console.log('someEvent',data);
  ee.removeListener('someEvent',func);
};
ee.on('someEvent',func);
// line 4 to 8 are another way to do :- ee.once('someEvent',function(data){console.log('someEvent',data);});
ee.emit('someEvent',{option: "heya"});
ee.emit('someEvent',{option:"lol"});

var util = require('util');
function UserList(){
  this.list = [];
  EventEmitter.call(this);
  this.add = function(name){
    this.list.push(name);
    this.emit('new-user',name);
  };
};
// UserList.prototype.add = function (data) {
//   this.list.push(data);
//   this.emit('new-user',data);
// };
util.inherits(UserList,EventEmitter);

var list = new UserList();
list.on('new-user',function(name){
  console.log("Hello User : ",name);
});

list.add('Vedant');
list.add('Karan');
