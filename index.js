const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const get = require('simple-get');
const concat = require('concat-stream');

const app = express();
const PORT = 8888;

app.use(bodyParser.text());

app.post('/header', (req, res) => {
	const headers = {};
	req.body.split('\n').forEach((line) => {
		const [key, value] = line.split(': ');
		if (key) {
			headers[key] = value;
		}
	});
	//console.log(headers);
	get({
		url: 'https://jobmine.ccol.uwaterloo.ca/psc/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL?Page=UW_CO_STU_JOBDTLS&Action=U&UW_CO_JOB_ID=00303969',
		headers
	},
		(err, jobmineRes, jobmineData) => {
			console.log(jobmineRes.statusCode);
			console.log(jobmineRes.headers);
			console.log(jobmineData);
			jobmineRes.pipe(concat((data) => {
				res.send(data);
			}));
		});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
