var fs = require('fs');

fs.readFile('fileSystem.js',function(err,data){
  console.log(data.toString());
});

fs.writeFile('text.txt','Write this to file',function(err){
  if(err) throw err;
  console.log(fs.readFileSync('text.txt').toString());
});

var ws = fs.createWriteStream('streams.txt');
var rs = require('./streams');
rs.pipe(ws);
