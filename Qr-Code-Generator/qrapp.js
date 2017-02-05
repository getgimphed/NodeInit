var qr = require("qr-image");
var fs = require("fs");

process.stdout.write("Enter the String to encode : \n");
process.stdin.on("data",function(data){
  var qr_img = qr.image(data.toString(),{type:"png",size:20});
  var name = data.toString();
  var ws = fs.createWriteStream('qr_img.png');
  qr_img.pipe(ws);
});
