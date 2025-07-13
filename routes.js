const fs = require('fs');

const requestHandler = (req, res) => {
  if (req.url === '/read') {
    fs.readFile('formValues.txt', (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Error reading file.');
      }

      // Respond with file content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>${data.toString()}</h1>`);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Node Server');
  }
};

module.exports = requestHandler;
