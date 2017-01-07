// URL Shortener by Melony Smith

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // CREATE
  // add URLs (original and shortened) to database
  router.post('/urls', (req, res) => {
    var genShortURL = require("../../lib/genShortURL");
    req.body.shortURL = genShortURL.genShortURL();
    res.json ({
      shortURL: genShortURL.genShortURL()
    });
  });

  // return express router
  return router;
};
