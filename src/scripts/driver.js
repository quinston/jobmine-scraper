
const get = require('simple-get');
const Promise = require('bluebird');
const fs = require('fs');

const sensitiveConfig = require('./sensitiveConfig');

const get2 = Promise.promisify(get.concat, { multiArgs: true });

const jsonifiedHeaders = {};
sensitiveConfig.headers.split('\n').forEach((line) => {
	const [key, value] = line.split(': ');
	jsonifiedHeaders[key] = value;
});

const fetchJob = (jobId) => {
 return get2({
 	url: 'http://localhost:8888/header',
 	method: 'POST',
 	headers: { 'Content-Type': 'application/json' },
 	body: JSON.stringify({
 		headers: jsonifiedHeaders,
 		jobId
 	})
 })
 .then(([res, data]) => {
	 console.log(`{ "index": { "_index": "jobs", "_type": "job", "_id": "${jobId}" }}`);
	 console.log(data.toString());
 })
};

// Just one ID per line, get it from ps.xls
const listOfIds = fs.readFileSync('./lotsOfIds', {
	encoding: 'ascii'
}).split('\n');

const random = (a,b) => {
	return a + (b-a) * Math.random();
};

Promise.each(listOfIds, (x, i) => {
	if (x) {
	 console.error(`Did ${i} jobs before death`);
	 return Promise.all([Promise.delay(random(900, 1100)), fetchJob(`00${x}`)]);
	}
});
