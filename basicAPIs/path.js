var path = require('path');
console.log(path.normalize('this/is/a/another/../././path'));
console.log(path.join('this/is','/another/','../a/path'));
console.log(path.isAbsolute('./path'));
console.log(path.relative('this/is/a','path'));
console.log('basename:', path.basename('this/is/as'));
console.log(path.extname('this/is/as.mp3'));
console.log(path.sep);
console.log(path.parse('this/is/a/another/../././path'));
console.log(path.format({dir:'this/is',base:'abc.mp3'}));

console.log('filename : ',path.basename(__filename));
