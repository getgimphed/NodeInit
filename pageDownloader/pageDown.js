var https = require('https');
var fs = require('fs');

var options = {
  hostname: "en.wikipedia.org",
  port:443,
  path:"/wiki/Manmohan_Singh",
  method:"GET"
};

var req = https.request(options,function(res){
  var responseBody = "";
  console.log("Response Started : ");
  console.log(res.statusCode);
  console.log(res.headers);

  res.setEncoding("UTF-8");

  res.once("data",function(chunk){
    console.log(chunk);
  });
  res.on("data",function(chunk){
    console.log(`--chunk-- : ${chunk.length}`);
    responseBody += chunk;
  });

  res.on("end",function(){
    fs.writeFile("Manmohan_Singh.html",responseBody,function(err){
      if(err){
        throw err;
      }
      console.log("File Downloaded");
    });
  });
});
req.on("error",function(err){
  console.log(`problem with request : ${err.message}`);
})
req.end();
