const environment = process.env.NODE_DEV;

switch (environment) {
  case 'production':
    module.exports = require('./prod');
    break;
  default:
    module.exports = require('./dev');
}
