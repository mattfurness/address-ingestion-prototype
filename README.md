# Prototype for address ingestion.

## Summary

This prototype ingests records from a file in "record per line" json into elastic search using a single index and type.

It achieves this by:
* Recreates the index based on the details in the json passed specified. See `config/elasticsearch-index.json` for an example.
* Streaming in records from a file in "record per line" json format.
* Mapping them to elastic search records.
* Pushing them up in batches of 200 to elastic search using the specified details.

The use of stream enables ingestion of extremely large files.

## Installation

```sh
git clone https://github.com/mattfurness/address-ingestion-prototype.git
cd address-ingestion-prototype
npm install
```

## Prerequisites

There is no build script and no transpiling, so it is probably worth upgrading to the latest node if you get errors, v6.3.0 at the time of writing.

## Ingesting data

| OPTION | DESCRIPTION |
| ------ | ----------- |
| --file (-f) | The file that contains the [address] data |
| --type (-t) | The elastic search type of the records |
| --index (-i) | The path to the json file that contains the index configuration |
| --host (-h) | The elastic search host |

```sh
node ./src/index.js -f /path/to/file.json -type address -index ./config/elasticsearch-index.json -host https://myuser:mypass@somehost/
```

## Running Tests

Tape needs to be installed globally.
```sh
npm install -g tape
```

#### Standard Tests
```sh
npm run test
```

#### Integration Tests
The integration test(s) will push 2 records to the specified host in the "test" index.

```sh
npm run integrationTest http://somehost/
```
