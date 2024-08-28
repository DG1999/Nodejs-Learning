let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

//****************** readFile******************************//
fs.readFile("demoFile", (err, data) => {
  if (err) {
    console.log("sorry! can't read file");
  } else {
    console.log(data + "\nread file sucessfull..");
  }
});
