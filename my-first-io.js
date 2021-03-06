let fs = require("fs");
let contents = fs.readFileSync(process.argv[2]);

let count = 0;
for (let i = 0; i < contents.toString().split("\n").length - 1; ++i) {
  count++;
}

console.log(count);
