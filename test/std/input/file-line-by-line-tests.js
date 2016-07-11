var test = require('tape');
var eventStream = require('event-stream')
var createReadStream = require('../../../src/input/file-line-by-line');
var testFile = 'test/data/small.json';

test('Records from file can be streamed', function(assert) {
    createReadStream(testFile, () => {})
    .pipe(eventStream.writeArray(function (err, array){
        assert.equal(array.length, 2, 'The 2 records are streamed in from file.');
        assert.equal(array[0]._id, 'GAQLD163193877', 'The 1st id matched 1st id in file.');
        assert.equal(array[1]._id, 'GAQLD163208464', 'The 1st id matched 1st id in file.');
        assert.end();
    }));
});
