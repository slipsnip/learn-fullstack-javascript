import http from 'http';
import config, { nodeEnv, logStars } from './config';

const callback = (req, res) => {
  res.write('Http hello\n');
  setTimeout(() => {
    res.write('Another message\n');
    res.end();
  }, 3000);
};

const server = http.createServer(callback);
server.listen(config.port);
