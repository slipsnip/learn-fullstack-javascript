import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';

const server = express();
server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  }),
);
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  serverRender()
    .then(({ initialMarkup, initialData }) => res.render('index', {
      initialMarkup,
      initialData,
    }))
    .catch(err => console.log(err));
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, (req, res) => {
  console.info(`Express listening to ${config.port}`);
});
