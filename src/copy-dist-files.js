var fs = require('fs');
var resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'css/styles.css'
];
resources.map(function(f) {
    var path = f.split('/');
    var t = 'dist/' + path[path.length-1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
});