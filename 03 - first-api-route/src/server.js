const http = require("http");
const users = require("./mocks/users");

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method} | Endpoint: ${req.url}`);

  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(4000, () => {
  console.log("API server is running on http://localhost:4000");
});
