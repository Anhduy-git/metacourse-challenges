
function getEvenNumber(begin, end) {
	let res = [];
	for (let i = begin; i <= end; i++) {
		if (i % 2 === 0) {
			res.push(i);
		}	
	}
	return res;
}
test('Should print even numbers', () => {
	let evenNums = getEvenNumber(0, 10);
	for (let item of evenNums) {
		const res = item % 2 === 0;		
		expect(res).toBe(true);
	}
	
})


