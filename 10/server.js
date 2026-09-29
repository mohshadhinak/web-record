const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        fs.readFile("index.html", (err, data) => {

            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.end("<h1>Server Error</h1>");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });

    } else if (req.url === "/about" && req.method === "GET") {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <h1>About Page</h1>
            <p>This page is served using Node.js.</p>
        `);

    } else {

        res.writeHead(404, { "Content-Type": "text/html" });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The requested page does not exist.</p>
        `);
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

