const { getEvenNumber, convertKM2M } = require('./main');

test('Should print even numbers', () => {
	let evenNums = getEvenNumber(0, 10);
	for (let item of evenNums) {
		const res = item % 2 === 0;		
		expect(res).toBe(true);
	}
	
})

test('Should convert km to m', () => {
	let res = convertKM2M(10);
	expect(res).toBe(10000);
})


