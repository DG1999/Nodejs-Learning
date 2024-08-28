let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

//--unlinkFile--//////////////////////
fs.unlink("renameFile.text", (e) => {
  if (e) {
    console.log("File not avalable!");
  } else {
    console.log("Delete file sussfully!");
  }
});
