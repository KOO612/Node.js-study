const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    // 콘텐츠 타입을 텍스트로
    // 'Content-Tpye': 'text/plain',

    // 콘텐츠 타입을 js 오브젝트로
    'Content-Type': 'application/json',
  });
  // res.end('Hello!');
  res.end(
    // end 메소드는 문자열을 받기때문에 json으로 변환
    JSON.stringify({
      a: 'a',
      b: 'b',
    })
  );
});

server.listen(port, () => {
  console.log(`listen ${port}`);
});
