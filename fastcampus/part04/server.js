const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Tpye': 'text/plain',
  });
  res.end('Hello!');
});

server.listen(port, () => {
  console.log(`listen ${port}`);
});
