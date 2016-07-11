var createFileReadStream = require('./file-line-by-line');

module.exports = function createReadStream(inputOptions, percentageReporter) {
    if (inputOptions.file != null)
        return createFileReadStream(inputOptions.file, percentageReporter);

    throw new Error("Unsupported input source.")
};
