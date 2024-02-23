const http = require('http');

// function rqLis(req, res) {}
// http.createServer(rqLis);

// 익명 함수 이용
// http.createServer(function (req, res) {});
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter page</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>my first page</title></head>');
  res.write('<body><h1>nodejs server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
