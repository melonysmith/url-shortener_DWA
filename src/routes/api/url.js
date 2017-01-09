// URL Shortener by Melony Smith

// dependencies
const url = require("../../models/url");

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // CREATE
  // add urls to database
  router.post('/urls', (req, res) => {
    var genShortURL = require("../../lib/genShortURL");
    req.body.shortURL = genShortURL.genShortURL();
    res.json ({
      shortURL: genShortURL.genShortURL()
    });
  });

  // Read
  // get all urls
  router.get('/urls', (req, res) => {
		url.findAll((err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

  // get url by id
  router.get('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.findID(req.body, (err) => {
			res.status(500).json(err);
		}, (data) => {
			res.status(200).json(data);
		})
	});

  // update url by id
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    })
  });

  // delete url by id
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
