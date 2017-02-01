function printTerminal(data){
  process.stdout.clearLine();       // Not found in node js api docs for process
  process.stdout.cursorTo(0);       // Not found in node js api docs for process
  process.stdout.write(data.toString());
}
var waitTime = 250;
var currentTime = 0;
var interval =setInterval(function(){
  currentTime += waitTime;
  percent = Math.floor((currentTime/5000)*100);
  printTerminal(percent);
},250);

setTimeout(function(){
  clearInterval(interval);
  printTerminal(100);
  console.log("\ndone");
},5000);
