function convertKM2M(length) {
	return length * 1000;
}
test('Should convert km to m', () => {
	let res = convertKM2M(10);
	expect(res).toBe(10000);
})