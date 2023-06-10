const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url
    console.log("heyaa from the node !");
    res.writeHead(200,{'content_type': 'text/html'})
    // res.write("<h1>Hey home page</h1>")
    // res.end("heyy from the browser")
    if(url == "/") {
        res.writeHead(200,{"content-type" : "text/html"})
        res.write("<h1>this is home page ! heyaa</h1>")
        res.end()
    } else if(url == "/about") {
        res.writeHead(200,{"content-type" : "text/html"})
        res.write("<h1>this is about page ! heyaa</h1>")
        res.end()
    } else {
        res.writeHead(404,{"content-type" : "text/html"})
        res.write("<h1>Page not found! Oooops</h1>")
        res.end()
    }
    
});
server.listen(5000)