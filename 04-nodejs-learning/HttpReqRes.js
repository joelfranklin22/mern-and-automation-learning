const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "plain/html" });
    res.end(`
        <html>
        <body>
            <h2>Main Page</h2>
        </body></html>
        `);
  } else if (req.url === "/post") {
    res.writeHead(301, { location: "/product" });
    res.end(
      `
        <html>
        <body>
            <h2>POst</h2>
        </body></html>
        `,
    );
  } else if (req.url === "/product") {
    res.writeHead(201, { "Content-Type": "plain/html" });
    res.end(`
        <html><body>
            <h2>Product</h2>
        </body></html>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "plain/html" });
    res.end(
      `
        <html><body>
            <h2>404 Error</h2>
        </body></html>`,
    );
  }
});
server.listen(5000, () => {
  console.log("Running");
});
