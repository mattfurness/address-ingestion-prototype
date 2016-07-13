function mapper(indexOptions, idSelector, data) {
    return {
        id: idSelector(data),
        index: indexOptions.index,
        type: indexOptions.type,
        body: Object.assign({}, data)
    };
}

function _idMapper(indexOptions, data) {
    var record = mapper(indexOptions, () => data._id, data);

    delete record.body._id;

    return record;
}


module.exports = {
    mapper,
    _idMapper
}
