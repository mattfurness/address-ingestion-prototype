var fs = require('fs');
var eventStream = require('event-stream');
var progress = require('progress-stream');

module.exports = function createReadStream(filePath, percentageReporter) {
    var stat = fs.statSync(filePath);

    var progressReporter = progress({
        length: stat.size,
        time: 1000
    });
    progressReporter.on('progress', function(progress) {
        var percentage = progress.percentage.toFixed(2);
        percentageReporter(percentage);
    });
    return fs.createReadStream(filePath)
            .pipe(progressReporter)
            .pipe(eventStream.split())
            .pipe(eventStream.parse());
};
