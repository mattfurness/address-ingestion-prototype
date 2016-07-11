# Prototype for address ingestion.

## Summary

This prototype streams in records from a [json] file, maps them to elastic search records, and pushes them up in batches of 200 using the specified elastic search details.

## Installation

```sh
git clone https://github.com/mattfurness/address-ingestion-prototype.git
cd address-ingestion-prototype
npm install
```

## Ingesting data

| OPTION | DESCRIPTION |
| ------ | ----------- |
| --file (-f) | The file that contains the [address] data |
| --type (-t) | The elastic search type of the records |
| --index (-i) | The elastic search index of the records |
| --host (-h) | The elastic search host |

```sh
npm run ingest -f /path/to/file.json -type address -index addresses -host https://myuser:mypass@somehost/
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
The integration test(s) will push 2 records to the specified host in the test index.

```sh
npm run integrationTest http://somehost/
```
