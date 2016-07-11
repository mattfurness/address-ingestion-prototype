var commandLineArgs = require('command-line-args');
var createReadStream = require('./input/input-stream-factory');
var createWriteStream = require('./es/output-stream-factory');
var _idMapper = require('./es/record-mapper')._idMapper;
var eventStream = require('event-stream');

module.exports = function getIngestionStream(options, percentageReporter) {
    var inputStream = createReadStream(options.input, percentageReporter);
    var mapper = eventStream.mapSync(_idMapper.bind(null, options.elasticsearch));
    var outputStream = createWriteStream(options.elasticsearch);

    return inputStream
        .pipe(mapper)
        .pipe(outputStream);
};
