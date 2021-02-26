const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
var fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
