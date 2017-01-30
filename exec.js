var exec = require('child_process').exec;
// exec("explorer http://www.vedant.me");
exec('dir',function(err,data){
  if(err) throw err;
  console.log(data);
});

exec("git status",function(err,data){
  console.log(data);
});
