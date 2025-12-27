const fs = require("fs");

// Writing a file
/* Synchronous
1. fs -> file system
2. writeFileSync("fileName & path", "Content for the file")
3.
*/
// fs.writeFileSync(
// 	"./test.txt",
// 	"writeFileSync() = Hello There, this is File System"
// );

/* Asynchronous
 */
// fs.writeFile(
// 	"./test.txt",
// 	"writeFile = Hello There, this is File System",
// 	(err) => {}
// );

// Reading a file
/* Synchronous
readFileSync("filePath", "fileEncoding")
this returns a value, so store it in a variable
*/
// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);

fs.readFile("./contacts.txt", "utf-8", (err, res) => {
	if (err) {
		console.log("Error", err);
	} else {
		console.log(res);
	}
});
