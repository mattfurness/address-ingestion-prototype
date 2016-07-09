var createFileReadStream = require('./file-line-by-line');

module.exports = function createReadStream(inputOptions) {
    if (inputOptions.file != null)
        return createFileReadStream(inputOptions.file);

    throw new Error("Unsupported input source.")
};
