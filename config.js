const { env } = process;

export const nodeEnv = env.NODE_ENV || 'development';

export const logStars = message => console.info(`*********${message}*********`);

export default {
  port: env.PORT || 8080,
}