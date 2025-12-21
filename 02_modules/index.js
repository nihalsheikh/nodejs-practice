// the below line can be used to import the math module
// const math = require("./math");
const { add, sub, multiply } = require("./math");
const math = require("");

console.log("Initializing Nodejs through config file: `index.js`");

const a = 7,
	b = 9;

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${sub(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);
