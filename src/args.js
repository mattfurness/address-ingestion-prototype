var commandLineArgs = require('command-line-args');

var optionDefinitions = [
    { name: 'file', alias: 'f', type: String, group: 'input' },
    { name: 'host', alias: 'h', type: String, group: 'elasticsearch' },
    { name: 'index', alias: 'i', type: String, group: 'elasticsearch' },
    { name: 'type', alias: 't', type: String, group: 'elasticsearch' },
]

module.exports = function parseCommandLineArgs() {
    var options = commandLineArgs(optionDefinitions);

    if (!isValid(options)) {
        throw new Error("Missing arguments please see documentation at https://github.com/mattfurness/address-ingestion-prototype/blob/master/README.md for details.");
    }

    return options;
}

function isValid(options) {
    return options.input &&
        options.input.file &&
        options.elasticsearch &&
        options.elasticsearch.host &&
        options.elasticsearch.index &&
        options.elasticsearch.type;
}
