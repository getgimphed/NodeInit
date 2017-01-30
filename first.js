var arra = [1,2,3,4,5,6];
function powerOfAdjancent(i){
  return Math.pow(i,i);
}
arra.map(powerOfAdjancent).forEach(function(num){
  console.log(num);
});
var check = 1/0;
console.log(isFinite(check));

var one = "one";
function two() {
  return "Two";
}

global.three ="three";
four = function(){
  return  two();
}
console.log(four());

exports.one = one;
exports.new = function(){
  return two();
}


this.add = function(name){
  this.list.push(name);
  ee.emit('new-user',name);
};
