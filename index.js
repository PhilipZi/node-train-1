const fs = require("fs");

fs.readFile("./starter/txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./starter/txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile(`./starter/txt/append.txt`, "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile(
        "./starter/txt/final-test.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => {
          console.log("Your file has been written!😀");
        }
      );
    });
  });
});
console.log("Will read file!");
