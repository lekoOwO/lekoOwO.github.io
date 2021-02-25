const pug = require('pug');
const fs = require('fs');

// Compile template.pug, and render a set of data
const html = pug.renderFile('index.jade')
fs.writeFile("./index.html", html, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("File has been saved");
});