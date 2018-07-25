import express from 'express';
import config from './config';
import apiRouter from './api';

const server = express();

server.get('/', (req, res) => {
  res.send('This is a string\n');
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, (req, res) => {
  console.info(`Express listening to ${config.port}`);
});
