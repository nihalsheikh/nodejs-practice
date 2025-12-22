const fs = require("fs");

/*
1. fs -> file system
2. writeFileSync -> method in fs to write on a file,
3. ("location path & <fileName>", "Content for the file")
*/
fs.writeFileSync("./test.txt", "Hello There, this is File System");
