var stream = require('stream');
var rs = new stream.Readable(); 
var i=0;
rs._read=  function(){
  while(i<=20){
    this.push(''+ i);
    i++;
    setTimeout(function(){var a=4,b=4},100);
  }
};

// rs.pipe(process.stdout);
// process.stdout.on('error',process.exit);
module.exports = rs;
