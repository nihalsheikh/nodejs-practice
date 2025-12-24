const fs = require("fs");

/* Synchronous
1. fs -> file system
2. writeFileSync -> method in fs to write on a file,
3. ("location path & <fileName>", "Content for the file")
*/
fs.writeFileSync(
	"./test.txt",
	"writeFileSync() = Hello There, this is File System"
);

/* Asynchronous
 */
// fs.writeFile(
// 	"./test.txt",
// 	"writeFile = Hello There, this is File System",
// 	(err) => {}
// );
