const environment = process.env.NODE_ENV;

switch (environment) {
  case 'production':
    module.exports = require('./prod');
    break;
  default:
    module.exports = require('./dev');
}
