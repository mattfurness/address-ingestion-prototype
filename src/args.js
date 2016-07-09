var commandLineArgs = require('command-line-args');

var optionDefinitions = [
    { name: 'file', alias: 'f', type: String },
    { name: 'host', alias: 'e', type: String, group: 'elasticsearch' },
    { name: 'index', alias: 'i', type: String, group: 'elasticsearch' },
    { name: 'type', alias: 't', type: String, group: 'elasticsearch' },
]

module.exports = function parseCommandLineArgs() {
    var options = commandLineArgs(optionDefinitions);
    
    if (!options._none ||
        !options._none.file ||
        !options.elasticsearch ||
        !options.elasticsearch.host ||
        !options.elasticsearch.index ||
        !options.elasticsearch.type) {
        throw new Error("Missing arguments please see documentation for details.");
    }

    return options;
};
