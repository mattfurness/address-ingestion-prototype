var test = require('tape');
var parseCommandLineArgs = require('../../src/args');

test('Command line arguments are parsed', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['--file', 'file', '--host', 'host', '--type', 'type', '--index', 'index']);
    var options = parseCommandLineArgs();

    assert.equal(options.input.file, 'file');
    assert.equal(options.elasticsearch.host, 'host');
    assert.equal(options.elasticsearch.type, 'type');
    assert.equal(options.elasticsearch.host, 'host');
    assert.end();
    process.argv = currentArgv;
});

test('Command shorthand line arguments are parsed', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['-f', 'file', '-h', 'host', '-t', 'type', '-i', 'index']);
    var options = parseCommandLineArgs();

    assert.equal(options.input.file, 'file');
    assert.equal(options.elasticsearch.host, 'host');
    assert.equal(options.elasticsearch.type, 'type');
    assert.equal(options.elasticsearch.host, 'host');
    assert.end();
    process.argv = currentArgv;
});

test('File argument is present', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['-h', 'host', '-t', 'type', '-i', 'index']);

    assert.throws(parseCommandLineArgs);
    assert.end();
    process.argv = currentArgv;
});

test('Host argument is present', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['-f', 'file', '-t', 'type', '-i', 'index']);

    assert.throws(parseCommandLineArgs);
    assert.end();
    process.argv = currentArgv;
});

test('Index argument is present', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['-f', 'file', '-h', 'host', '-t', 'type']);

    assert.throws(parseCommandLineArgs);
    assert.end();
    process.argv = currentArgv;
});

test('Type argument is present', function(assert) {
    var currentArgv = process.argv;
    process.argv = currentArgv.concat(['-f', 'file', '-h', 'host', '-i', 'index']);

    assert.throws(parseCommandLineArgs);
    assert.end();
    process.argv = currentArgv;
});
