// URL Shortener by Melony Smith

// dependencies
const url = require("../models/url");

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // home display
  router.get('/', (req, res) => {
    res.json({
      home: 'URL Shortener by Melony Smith'
    });
  });

  // redirect short url to original url
 router.get("/go/:shortURL", (req, res) => {
   req.body.shortURL = req.params.shortURL;
   url.findShortURL(req.body, (err) => {
     res.status(500).json(err);
   }, (data) => {
     res.redirect("http://www." + data.originalURL);
   })
 });

  // express uses API directory
  router.use('/api/v1', require('./api/url')(express));

  // return express router
  return router;
};
