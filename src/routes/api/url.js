// URL Shortener by Melony Smith

// dependencies
const url = require('../../models/url');

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // CREATE
  // add URLs (original and shortened) to database
  router.post('/urls', (req, res) => {
    var genShortURL = require('../../lib/genShortURL');
    req.body.shortURL = genShortURL.genShortURL();
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // READ
  // read all URLs
  router.get('/urls', (req, res) => {
  	url.findAll((err) => {
  		res.status(500).json(err);
  	}, (data) => {
  		res.status(200).json(data);
  	})
  });

  // read URL by id
  router.get('/urls/:id', (req, res) => {
  	req.body.id = req.params.id;
  	url.findID(req.body, (err) => {
  		res.status(500).json(err);
  	}, (data) => {
  		res.status(200).json(data);
  	})
  });

  // UPDATE
  // update URL by id
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // DELETE
  // delete URL by id
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // return express router
  return router;
};
