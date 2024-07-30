if(process.env.ENV == 'run')
  module.exports = require('./gcp.js');
else if(process.env.ENV == 'build')
  module.exports = require('./text.js');
else
  module.exports = require('./chalk.js');