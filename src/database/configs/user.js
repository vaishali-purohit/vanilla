// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    cluster: process.env.DB_CLUSTER,
    database: process.env.DB_NAME,
    dialect: 'mongodb',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    cluster: process.env.DB_CLUSTER,
    database: process.env.DB_NAME,
    dialect: 'mongodb',
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    cluster: process.env.DB_CLUSTER,
    database: process.env.DB_NAME,
    dialect: 'mongodb',
  },
};
