const http = require("http");

const routes = require("./src/routes");

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method} | Endpoint: ${req.url}`);

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === req.url && routeObj.method === req.method,
  );

  if (route) {
    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(`Cannot ${req.method} ${req.url}`);
  }
});

server.listen(4000, () => {
  console.log("API server is running on http://localhost:4000");
});
