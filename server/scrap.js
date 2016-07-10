console.log('hello from server!');

console.log('hello 2!');

let fs = require('fs');

fs.readFile('../javascript/app.js', 'utf8', ( err, val ) => {
    console.log( val );
});
