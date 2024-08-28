let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

//*************--renameFile--********************//
fs.rename("demoFile", "renameFile.text", (err) => {
  if (err) throw err;
  else {
    console.log("file name change");
  }
});
