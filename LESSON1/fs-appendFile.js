let fs = require("fs");

//writeFile, readFile, appendFile, openFile, renameFile, unlinkFile

/////////--appendFile--//////////////////////
fs.appendFile("demoFile","\nupdate some text cheak.", (err)=>{
  if(err) throw "error";
  else{console.log("update file sucessfull..")}
});