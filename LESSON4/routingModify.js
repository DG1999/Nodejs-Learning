let http = require("http");
let fs = require("fs");
let host = '127.0.0.1';
let port = 3000;

function rt(fileName, stCode, res){
  fs.readFile(fileName,(err,data)=>{
    res.writeHead(stCode,{"Content-Type":"text/html"});
    res.write(data);
    res.end();
  });
}


let server = http.createServer((req,res)=>{
  if(req.url==='/'){
    rt("./viewFile/index.html",200,res);
  }

  else if(req.url==='/about'){
    rt("./viewFile/about.html",200,res);
  }

  else if(req.url==='/contect'){
    rt("./viewFile/contect.html",200,res);
  }

  else{
    rt("./viewFile/error.html",404,res);
  }
});

server.listen(port,host,()=>{
  console.log(`http://${host}:${port}`)
});

