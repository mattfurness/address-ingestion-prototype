var elasticsearchClientFactory = require('./client.js');
var fs = require('fs');

module.exports = function recreateIndex(elasticsearchOptions, done) {
    var indexInfo = JSON.parse(fs.readFileSync(elasticsearchOptions.index));
    var elasticsearchClient = elasticsearchClientFactory(elasticsearchOptions);

    elasticsearchClient.indices.delete({index: indexInfo.name}, function(error, result) {
        if (error && error.status !== 404) {
            done(error, null);
            return;
        }

        elasticsearchClient.indices.create({index: indexInfo.name, body: indexInfo.details}, function(error, result){
            if (error) {
                done(error, null);
            } else {
                done(error, {indexName: indexInfo.name, elasticsearchResult: result})
            }
        });
    });

}
