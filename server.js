const jsonServer = require('json-server');
const path = require('path');
const dbJSFile = require(path.join(__dirname, 'data', 'db'));

const server = jsonServer.create();
const router = jsonServer.router(dbJSFile());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log('JSON Server is running: ', port);
});