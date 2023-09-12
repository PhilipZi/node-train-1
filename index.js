const fs = require("fs");

fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
  console.log(data1);
});
console.log("Will read file!");
