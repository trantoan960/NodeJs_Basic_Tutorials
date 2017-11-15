var file = require('fs');


// remove file by unlink()
// file.unlink('testwrite.txt');

// Create Folder 
// file.rmdirSync('foldertest');


file.mkdir('public', function() {
    file.readFile('test.txt', 'utf8', function(err, data) {
        file.writeFileSync('./public/results.txt', data);
    });
});