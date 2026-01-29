const http = require("http");
const { URL } = require("url");

const routes = require("./src/routes");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:4000${req.url}`);
  console.log(
    `Request Method: ${req.method} | Endpoint: ${parsedUrl.pathname}`,
  );

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === parsedUrl.pathname &&
      routeObj.method === req.method,
  );

  if (route) {
    req.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(`Cannot ${req.method} ${parsedUrl.pathname}`);
  }
});

server.listen(4000, () => {
  console.log("API server is running on http://localhost:4000");
});
