// URL Shortener by Melony Smith

// dependencies
const url = require('../models/url');

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // home
  router.get('/', (req, res) => {
    res.json({
      home: 'URL Shortener by Melony Smith'
    });
  });

  // express uses API directory
  router.use('/api/v1', require('./api/url')(express));

  // return express router
  return router;
};
