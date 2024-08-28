let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

////////--openFile--//////////////////////
fs.open("demoFile", "r", (err, file) => {
  if (err) {
    console.log("error");
  } else {
    fs.readFile("demoFile", "utf-8", (err, data) => {
      if (err) {
        console.log("err");
      } else {
        console.log(data);
      }
    });
  }
});
