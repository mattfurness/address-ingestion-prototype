var parseCommandLineArgs = require('./args');
var getIngestionStream = require('ingest');

var options = parseCommandLineArgs();

var stream = getIngestionStream(options);

stream.on('error', function(error) {
        console.log(error);
    })
    .on('finish', function() {
        console.log("The data has been ingested.");
    });
