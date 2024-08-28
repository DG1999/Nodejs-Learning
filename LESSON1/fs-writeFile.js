let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

//****************** writeFile******************************//
fs.writeFile("demoFile", "It is file system practiecs", (err) => {
  if (err) {
    console.log("sorry! can't read file..");
  } else {
    console.log("file write sucessfull..");
  }
});
