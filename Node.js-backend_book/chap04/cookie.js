const http = require('http');

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'set-cookie': 'mycookie=test' });
    res.end('hello cookie');
  })
  .listen(3000, () => {
    console.log('3000 port');
  });
