// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const url = require('../../src/models/url');
const util = require('../../src/lib/util');

// chalk rules
const success = chalk.green;
const error = chalk.red;

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // home display
  router.get('/', (req, res) => {
    // utility.debug(error('That did not work out so well.'));
    res.json({
      home: 'URL Shortener by Melony Smith',
    });
    util.debug(success('Home Load: Success'));
  });

  // redirect short url to original url
  router.get('/go/:shortURL', (req, res) => {
    const sURL = req.params.shortURL;
    url.findShorterURL(sURL, (err) => {
      util.debug(error('Load original URL: Error', err));
      res.status(500).json(err);
    }, (data) => {
      util.debug(success('Load original URL: Success', data));
      res.redirect('http://www.' + data.originalURL);
    });
  });

  // express uses API directory
  router.use('/api/v1', require('../../src/routes/api/url')(express));

  // return express router
  return router;
};
