var elasticsearch = require('elasticsearch');

module.exports = function buildClient(elasticsearchOptions) {
    return new elasticsearch.Client({
        host: elasticsearchOptions.host,
        log: [
                {
                    type: 'stdio',
                    levels: ['error', 'warning']
                }
            ]
        }
    );
}
