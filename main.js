function getEvenNumber(begin, end) {
	let res = [];
	for (let i = begin; i <= end; i++) {
		if (i % 2 === 0) {
			res.push(i);
		}	
	}
	return res;
}

function convertKM2M(length) {
	return length * 1000;
}

module.exports = {
	getEvenNumber,
	convertKM2M
};