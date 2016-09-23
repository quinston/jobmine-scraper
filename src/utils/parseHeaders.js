module.exports = (headersString) => {
	const headers = {};
	headersString.split('\n').forEach((line) => {
		const [key, value] = line.split(': ');
		if (key) {
			headers[key] = value;
		}
	});
	return headers;
}
