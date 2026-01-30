const http = require("http");
const { URL } = require("url");

const routes = require("../routes");

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(`http://localhost:4000${req.url}`);
  console.log(
    `Request Method: ${req.method} | Endpoint: ${parsedUrl.pathname}`,
  );

  let { pathname } = parsedUrl;
  let id = null;
  const splitEndpoint = pathname.split("/").filter(Boolean);

  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === pathname && routeObj.method === req.method,
  );

  if (route) {
    req.query = Object.fromEntries(parsedUrl.searchParams);
    req.params = { id };

    res.send = (statusCode, body) => {
      res.writeHead(statusCode, { "Content-Type": "application/json" });
      res.end(JSON.stringify(body));
    };

    route.handler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(`Cannot ${req.method} ${parsedUrl.pathname}`);
  }
});

server.listen(4000, () => {
  console.log("API server is running on http://localhost:4000");
});
