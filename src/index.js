const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const get = require('simple-get');
const Promise = require('bluebird');

const utils = require('./utils');

const app = express();
const PORT = 8888;

app.use(bodyParser.text());

app.post('/header', (req, res) => {
	const headers = utils.parseHeaders(req.body);
	get.concat({
		url: 'https://jobmine.ccol.uwaterloo.ca/psc/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL?Page=UW_CO_STU_JOBDTLS&Action=U&UW_CO_JOB_ID=00303969',
		headers
	},
		(err, jobmineRes, jobmineData) => {
			console.log(jobmineData.toString());
			res.json(utils.parseJobHtml(jobmineData.toString()));
		});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
