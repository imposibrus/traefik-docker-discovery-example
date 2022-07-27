const http = require('http');

http.createServer((req, res) => {
    res.end('Hello World!');
}).listen(process.env.PORT || 80);
