const http = require("http");
const morgan = require("morgan");

const logger = morgan("dev");

const server = http.createServer((req, res) => {
  logger(req, res, err => {
    if (err) {
      res.write(err);
      res.end();
      return;
    }
    if (req.url === "/") {
      res.write("Que pedo morros esta es una respuesta de su server");
      res.end();
    } else if (req.url === "/login") {
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write("estas en el <h1>login</h1>, dame tus datos");
      res.end();
    } else {
      res.writeHeader(404);
      res.write("404 page not found");
      res.end();
    }
  });
});

server.listen(3000);
