/*
    This script runs all the various node post install things we need.
    At this point, all it does is copy files.
 */

var copyfiles = require('copyfiles');

// Javascript
copyfiles(
    [
        "node_modules/fuse.js/dist/fuse.min.js",
        "node_modules/jquery-migrate/dist/jquery-migrate.min.js",
        "node_modules/jquery-ui-dist/jquery-ui.min.js",
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/mark.js/dist/jquery.mark.min.js",
        "content/static/js", // Destination
    ],
    { up: true },
    function(err) { if (err) return console.log(err); }
);

// Bootstrap JS
copyfiles(
    [
        "node_modules/bootstrap/dist/js/*",
        "content/static/js/bootstrap", // Destination
    ],
    { up: true },
    function(err) { if (err) return console.log(err); }
);

// Bootstrap CSS
copyfiles(
    [
        "node_modules/bootstrap/dist/css/*",
        "content/static/css/bootstrap", // Destination
    ],
    { up: true },
    function(err) { if (err) return console.log(err); }
);
