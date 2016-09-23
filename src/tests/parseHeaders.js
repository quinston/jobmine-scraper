const expect = require('chai').expect;
const parseHeaders = require('../utils/parseHeaders');

describe('colon-separated http headers parser', () => {
	it('should parse header key-value pairs',
		() => {
			expect(parseHeaders(`A: B
C: D
`)).to.eql({A: 'B', C: 'D'});
		});
});
