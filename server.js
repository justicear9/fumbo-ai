const { createServer } = require("http");
const { parse } = require("url");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "production";
}

const next = require("next");

const isPassenger = typeof PhusionPassenger !== "undefined";

if (isPassenger) {
  PhusionPassenger.configure({ autoInstall: false });
}

const port = Number.parseInt(process.env.PORT || "3000", 10);
const hostname = process.env.HOST || "0.0.0.0";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  if (isPassenger) {
    server.listen("passenger");
    return;
  }

  server.listen(port, hostname, () => {
    console.log(`Ready on http://${hostname}:${port}`);
  });
});
