var util = require('util');
var log = util.debuglog('newlog');
log('This is an error messgae to be logged');

var data = [
  {
    "id":1,
    "details":{
      "name":"Vedant",
      "email":"getgimphed@gmail.com"
    }
  },
  {
    "id":2,
    "details":{
      "name":"Siddhant",
      "email":"sidd@gmail.com"
    }
  }  ];
console.log(util.format('%s : %j',data,data));

// console.log(util.inspect(util, {colors:true}));
console.log(util.inspect(data));
console.log(util.isArray(data));

//Inheritance
function User(){
}
User.prototype.loginStatus = function () {
  return "Yeah";
};

function Admin(){
}
util.inherits(Admin,User);

admin = new Admin();
console.log(admin.loginStatus());
