var test = require('tape');
var elasticsearch = require('elasticsearch');
var getIngestionStream = require('../../src/ingest');
var reporter = require('../../src/input/console-percentage-reporter');

test('Records from file can be ingested', function(assert) {
    var args = process.argv;
    var host = args[args.length-1];

    var client = new elasticsearch.Client({
        host: host,
        log: [{
            type: 'stdio',
            levels: ['error', 'warning']
        }]
    });

    client.indices.delete({index: 'test'}, function(error, response) {
        var stream = getIngestionStream({
            elasticsearch: {
                index: 'test',
                type: 'test',
                host: host
            },
            input: {
                file: './test/data/small.json'
            }
        }, reporter);
        stream.on('finish', function() {
            client.get({
                index: 'test',
                type: 'test',
                id: 'GAQLD163193877'
            }, function (error, response) {
                assert.equal(response.found, true, 'The record should exist')
                assert.end();
            });
        });
    })
});
