import express from 'express';
import bodyParser from 'body-parser';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import config from './config';
import apiRouter from './api';
import serverRender from './serverRender';

const server = express();
server.use(bodyParser.json());
server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  }),
);
server.set('view engine', 'ejs');

server.get(['/', '/contest/:contestId'], (req, res) => {
  serverRender(req.params.contestId)
    .then(({ initialMarkup, initialData }) => res.render('index', {
      initialMarkup,
      initialData,
    }))
    .catch((err) => {
      console.error(err);
      res.status(404).send('Bad Request!');
    });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, (req, res) => {
  console.info(`Express listening to ${config.port}`);
});
