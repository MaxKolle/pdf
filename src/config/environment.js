const config = {
  production: {
    DATABASE_URL: 'mongodb://localhost/kametcha',
    PORT: 3000
  }
};

module.exports = config[process.env.NODE_ENV];
