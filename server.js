const http = require('http');

const port = process.env.PORT || 3000;

// ★ バージョン確認ログ
console.log('Node.js version:', process.version);
console.log('Process versions:', process.versions);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Node.js ${process.version} is running on App Service`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});