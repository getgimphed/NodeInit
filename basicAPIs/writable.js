var ws = new (require('stream')).Writable();
var inp = require('./streams');
ws._write= function(chunk,encoding,next){
  console.log(chunk.toString());
  next();
}

inp.pipe(ws);
