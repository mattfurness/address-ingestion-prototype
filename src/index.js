var parseCommandLineArgs = require('./args');
var getIngestionStream = require('./ingest');
var percentageReporter = require('./input/console-percentage-reporter');
var options = parseCommandLineArgs();
var recreateIndex = require('./output/indexer');

recreateIndex(options.elasticsearch, function done(error, result) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(result);

    options.elasticsearch = Object.assign({}, options.elasticsearch, {index: result.indexName});
    var stream = getIngestionStream(options, percentageReporter);

    stream.on('error', function(error) {
        console.log(error);
    })
    .on('finish', function() {
        console.log("All Done! The data has been ingested.");
    });
});
