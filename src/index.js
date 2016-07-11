var parseCommandLineArgs = require('./args');
var getIngestionStream = require('./ingest');
var percentageReporter = require('./input/console-percentage-reporter');
var options = parseCommandLineArgs();

var stream = getIngestionStream(options, percentageReporter);

stream.on('error', function(error) {
        console.log(error);
    })
    .on('finish', function() {
        console.log("All Done! The data has been ingested.");
    });
