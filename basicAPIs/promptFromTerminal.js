var promptText = ["What's your name?","How's life"];
var soln = [];
function prompt(index){
  process.stdout.write(`Question : ${promptText[index]} : ` );
};
prompt(0);
process.stdin.on('data',function(data){
  soln.push(data.toString().trim());
  if(soln.length < promptText.length){
    prompt(soln.length);
  }
  else{
    process.exit();
  }
});

process.on('exit',function(){
  for (var i = 0; i < soln.length; i++) {
    process.stdout.write(`${soln[i]}\n`);
  }
});
