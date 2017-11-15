// import modules "events"
var sukien = require('events');
var hamchinh = require('util');

// Create Function Express
var Person = function(name) {
    this.name = name;
}
hamchinh.inherits(Person, sukien.EventEmitter);

var skyalbert = new Person('toan');
var blackfox = new Person('hai');
var dealfox = new Person('trung');

var people = [skyalbert, blackfox, dealfox];

// For each when create that person will say hello guy
people.forEach(function(person) {
    person.on('talk', function(msg) {
        console.log(person.name + ' said that: ' + msg);
    })
})

skyalbert.emit('talk', 'hello guy');
blackfox.emit('talk', 'Hi Trung');
dealfox.emit('talk', 'goodbye everyone');