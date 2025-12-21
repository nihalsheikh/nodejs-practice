// function add(a, b) {
// 	return a + b;
// }

exports.add = (a, b) => a + b;

// function sub(a, b) {
// 	return a - b;
// }
exports.sub = (a, b) => a - b;

// function multiply(a, b) {
// 	return a * b;
// }
// the below line can be used multiple times to export some function
exports.multiply = (a, b) => a * b;

//  The below syntax should be used only once
// module.exports = {
// 	addFn: add,
// 	subFn: sub,
// 	multiplyFn: multiply,
// };
