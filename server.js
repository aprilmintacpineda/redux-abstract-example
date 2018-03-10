import express from 'express';
import http from 'http';

const app = express();
app.use(express.static(`${__dirname}/public`));

const server = http.createServer(app);

// start
server.listen(9000, () => {
  console.log('Dev server is running on http://localhost:9000.');
});