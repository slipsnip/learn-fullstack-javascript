const { env } = process;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = message => console.info(`*********${message}*********`);

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  },
};
