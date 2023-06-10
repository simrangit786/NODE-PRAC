const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url == "/home") {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write("<h1>welcome in home page</h1>")
    res.end("Heyaaaaa Express.....")

    } else if(url == "/about") {
    res.writeHead(200,{'content-type': 'text/html'})
    res.write("<h1>welcome in about page</h1>")
    res.end("Heyaaaaa Express.....")

    } else {
    res.writeHead(404,{'content-type': 'text/html'})
    res.write("<h1>Page not found</h1>")
    // res.end("Heyaaaaa Express.....")

    }
    
    console.log("express side")
})

server.listen(8000)


// const sayHi = require("./NameFIrst");
// const Names = require("./NameData");
// const os = require("os");
// const util = require('util');
// const {
//     readFileSync,
//     fstat,
//     writeFileSync,
//     readFile,
//     writeFile,
//   } = require("fs");
// const readFilePromisify = util.promisify(readFile);
// const writeFilePromisify = util.promisify(writeFile);
// const http = require("http");
// const fs = require("fs");
// const eventEmitter = require('events');
// const customEmitter = new eventEmitter();
// const {createReadStream} = require('fs');
// console.log("working node..........");

// customEmitter.on('response',(msg) => {
//     console.log(`we are working on events,${msg}`);
// })

// customEmitter.emit('response',"message for events")

// const stream = createReadStream('BigData.txt');
// console.log(stream,"read stream")
// stream.on('data',(result) => {
//     // console.log(`Read file: ${result}`)
//     console.log(result)
// })

// one way id callback (for async patterns)
// fs.readFile('result-async.txt','utf8',(err,data) => {
//     if(err) {
//         console.log(err,"error show us")
//     } else {
//         console.log(data,"data show us");
//     }
// })
 
// promises (callback patterns)
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// async-await and util.promisfy()
// const start = async () => {
//     try {
//         const first = await readFilePromisify('result-async.txt','utf8')
//         console.log(first,"first file")
//         await writeFilePromisify('newFile.txt',`THIS IS AWESOME : ${first}`)

//     } catch(err) {
//         console.log(err)

//     }
  
// }

// start();
// getText("result-async.txt")
//   .then((data) => console.log(data, "dataaaaaaaaa showing"))
//   .catch((err) => console.log(err, "error"));

// const Server = http.createServer((req,res) => {
//     // if(req.url === "/") {
//     //     res.end("Hello World");
//     // }
//     // if(req.url === "/home") {
//     //     res.end('this is home page');
//     // }
//     // res.end('Oops ! this is error page');
//     console.log("every time page refresh this one is call");
//     res.end("heyaaa server....!")

// })

// Server.listen(8000,() => {
//     console.log('server listening on port 8000')
// })

// const user = os.userInfo();
// console.log(user,"user detail")

// console.log(`now here is showing system's ${os.uptime()} in seconds`)

// const system = os.platform()
// console.log(system,"system info")

// const currentInfo = {
//     name : os.type(),
//     release: os.release(),
//     memory: os.totalmem(),
//     freememory: os.freemem()
// }

// console.log(currentInfo,"currentInfo")

// sayHi(Names.john);
// sayHi(Names.peter);

// const first = readFileSync('readfile.txt','utf8');
// console.log(first)

//  writeFileSync('result-async.txt',first)

// readFile('readfile.txt','utf8',(err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result)
//   const New = result;

// readFile('newreadfile.txt','utf8',(err,result) => {
//     if(err) {
//         console.log(err);
//     }
//     console.log(result)
//     const newOne = result

// writeFile('new-async.txt',New,(err) => {
//     if(err) {
//         console.log(err)
//     }
// })
// })
// })
