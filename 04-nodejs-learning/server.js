const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
        <html>
            <body>
                <h1>Login Page</h1>
            </body>
        </html>
        `);
  } else if (req.url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Your are in Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h2>About Page</h2>
                </body>
            </html>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <html>
                <body>
                    <h2>404 Error</h2>
                </body>
            </html>
        `);
  }
});

server.listen(5000, () => {
  console.log("Running");
});
