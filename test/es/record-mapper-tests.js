var test = require('tape');
var _idMapper = require('../../src/es/record-mapper')._idMapper;
var data = {_id: '1', name: 'test'};
var indexOptions = { index: 'test-index', type: 'test-type' }

test('_id is mapped from the record', function(assert) {
    var record = _idMapper(indexOptions, data);

    assert.equal(record.id, data._id, 'The record id matches the data._id');
    assert.end();
});

test('_id is removed from the record', function(assert) {
    var record = _idMapper(indexOptions, data);

    assert.equal(record.body._id, undefined, 'Property _id is not in the record body.');
    assert.end();
});

test('The body contains the original data', function(assert) {
    var record = _idMapper(indexOptions, data);

    assert.equal(record.body.name, data.name, 'Property name is in the record body.');
    assert.end();
});

test('The record contains the index details', function(assert) {
    var record = _idMapper(indexOptions, data);

    assert.equal(record.index, indexOptions.index, 'The index is populated.');
    assert.equal(record.type, indexOptions.type, 'The type is populated.');
    assert.end();
});
