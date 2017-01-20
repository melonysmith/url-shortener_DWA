const url = require('../models/url');

module.exports = (express) => {
  const router = express.Router();

  // show route is working
  router.get('/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // read one shortUR, get response of originalURL
  router.get('/:shortURL', (req, res) => {
    const request = req;
    const response = res;
    // shortURL requested from url model
    request.body.shortUrl = request.params.shortUrl;
    url.findShortURL(request.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      // response redirects to originalURL
      response.redirect(data.originalURL);
    });
  });

  return router;
};
