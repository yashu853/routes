const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
