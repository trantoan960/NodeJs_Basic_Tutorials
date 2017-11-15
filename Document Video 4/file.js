var file = require('fs');

console.log('Bat dau:');

// Sync
// var readFile = file.readFileSync('test.txt', 'utf8');
// console.log('Thuc hien: ' + readFile);
// Not Sync Func: ( nameFile, type, Callback)
var readFileNot = file.readFile('test.txt', 'utf8', function(err, data) {
    if(true) console.log('dung: '+data);
    else return 'sai';
})


// var writeFile = file.writeFileSync('testwrite.txt', readFile);

console.log('Ket thuc');


