var elasticsearch = require('elasticsearch');
var ElasticsearchBulkIndexStream = require('elasticsearch-bulk-index-stream');

module.exports = function createWriteStream(elasticSearchOptions) {
    var elasticSearchClient = new elasticsearch.Client({
        host: elasticSearchOptions.host,
        log: [{
            type: 'stdio',
            levels: ['error', 'warning']
        }]
    });

    return new ElasticsearchBulkIndexStream(elasticSearchClient, {
        highWaterMark: 200,
        flushTimeout: 500
    });

};
