let http = require("http");
let fs = require("fs");
let host = '127.0.0.1';
let port = 3000;

const server = http.createServer((req, res)=>{
  if(req.url==='/'){
     fs.readFile("index.html",(err, data)=>{
       res.writeHead(200,{"Content-Type":"text/html"});
       res.write(data);
       res.end();
    });
  } 

  else if(req.url==='/about'){
    fs.readFile("about.html",(err, data)=>{
       res.writeHead(200,{"Content-Type":"text/html"});
       res.write(data);
       res.end();
    });
  } 
    
  
  else if(req.url==='/contect'){
    fs.readFile("contect.html",(err, data)=>{
       res.writeHead(200,{"Content-Type":"text/html"});
       res.write(data);
       res.end();
    });
  } 

  else{
    fs.readFile("error.html",(err, data)=>{
       res.writeHead(404,{"Content-Type":"text/html"});
       res.write(data);
       res.end();
    });
}
  
 
});

server.listen(port, host,()=>{
  console.log(`http://${host}:${port}`);
});