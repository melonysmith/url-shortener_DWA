// URL Shortener by Melony Smith

// dependencies
const url = require('../models/url');
var redirect = require('./redirect');
const util = require('../lib/debug');

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

// shows index is working
  router.get('/status', (req, res) => {
    res.json ({
      healthy: true,
    });
  });

  // home display
  router.get('/', (req, res) => {
    var debug = require('../lib/debug');
    res.json({
      home: 'URL Shortener by Melony Smith'
    });
    util.debug("Success! You loaded the home page.");
    util.debug("Oh no. That didn't work out in your favor.");
  });

  // redirect short url to original url
 router.get("/redirect/:shortURL", (req, res) => {
   req.body.shortURL = req.params.shortURL;
   url.findShorterURL(req.body, (err) => {
     res.status(500).json(err);
   }, (data) => {
     res.redirect("http://www." + data.originalURL);
   })
 });

  // express uses API directory
  router.use('/api/v1', require('./api/url')(express));

  // route for original URL redirect
  router.use('/redirect/', redirect(express));

  // return express router
  return router;
};
