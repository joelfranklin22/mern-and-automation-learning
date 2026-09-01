const fs = require("fs");

const buf = Buffer.from("Hello");
console.log(buf);
console.log(buf.toString());

const reader = fs.createReadStream("./file2.txt", "utf-8");
reader.on("data", (chunk) => {
  console.log("Buffered Here");
});
reader.on("end", () => {
  console.log("ended");
});

const writeStream = fs.createWriteStream("./demo.text");
reader.pipe(writeStream);
