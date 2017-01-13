// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const url = require("../models/url");
const utility = require('./../lib/debug')

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
    res.json ({
      home: 'URL Shortener by Melony Smith'
    });
    utility.debug(success('Home Load: Success'));
  });

  // redirect short url to original url
 router.get("/go/:shortURL", (req, res) => {
   req.body.shortURL = req.params.shortURL;
   url.findShorterURL(req.body, (err) => {
     utility.debug(error('Load original URL: Error', data));
     res.status(500).json(err);
   }, (data) => {
     utility.debug(success('Load original URL: Success', data));
     res.redirect("http://www." + data.originalURL);
   })
 });

  // express uses API directory
  router.use('/api/v1', require('./api/url')(express));

  // return express router
  return router;
};
