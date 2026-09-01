const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {

  if (req.url === "/") {
    try {
      const response = await fs.readFile("./demo.txt", "utf-8");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
        <html>
          <body>
            <h1>File Content</h1>
            <p>${response}</p>
          </body>
        </html>
      `);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading file");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000 🚀"); // ✅
});
