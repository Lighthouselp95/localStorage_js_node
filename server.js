const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res) => {
    console.log(req.url, req.method);
    // Set header content type
    res.setHeader('Content-Type','text/html');
    // res.writeHead(200,{'Content-Type': 'text/html'})
    let path = './HTML_folder';
    switch(req.url) {
    case '/':   
    path += '/index.html';
    res.statusCode = 200;
    break;
    case '/about':
    path += '/about.html';
    break;
    case '/about-me':
    res.statusCode = 301;
    res.setHeader('Location','/about');
    
    case '/style.css':
    path += '/style.css';
    break;
    case '/assets/images/logo.png':
    path += '/assets/images/logo.png';
    break;
    case '/js.js':
    path += '/js.js';
    break;


    default: 
    path += '/404.html';
    res.statusCode = 404;
    // res.writeHead(404,{'Content-Type': 'text/html'})
    break;
}
console.log(path);
    //sen write file
    // res.write('<head><link rel="stylesheet"></head>')
    // res.write('<p>hello, Dang</p>');
    // res.write('<p>hello again, Dang</p>');
    // res.end();
    // send an html file
    fs.readFile(path, (err,data) => {
if(err) {
    console.log(err);
    res.end();
} else {
    res.write(data);
    
    res.end();
}
    });
// send by stream

// const readStream = fs.createReadStream(path,(err) => {
//     if(err) {
//         console.log(err);
//     }
// });

// readStream.pipe(res);
// res.end();

});
//server listen
server.listen(3000, () => {
    console.log('Server is running at port: 3000');
})