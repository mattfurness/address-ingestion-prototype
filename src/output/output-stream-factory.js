var ElasticsearchBulkIndexStream = require('elasticsearch-bulk-index-stream');
var elasticsearchClientFactory = require('./client');

module.exports = function createWriteStream(elasticsearchOptions) {
    var elasticsearchClient = elasticsearchClientFactory(elasticsearchOptions);

    return new ElasticsearchBulkIndexStream(elasticsearchClient, {
        highWaterMark: 350,
        flushTimeout: 500
    });

};
