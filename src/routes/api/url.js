// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const url = require("../../models/url");
const utility = require('../../lib/debug');

// chalk rules
const success = chalk.green;
const error = chalk.red;

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // CREATE
  // add urls to database
  router.post('/urls', (req, res) => {
    var genShortURL = require("../../lib/genShortURL");
    req.body.shortURL = genShortURL.genShortURL();
    url.create(req.body, (err) => {
        utility.logIt(error('Creation: Error! ', err));
      res.status(500).json(err);
    }, (data) => {
        utility.logIt(success('Creation: Success! ', data));
      res.status(200).json(data);
    });
  });

  // read
  // get all urls
  router.get('/urls', (req, res) => {
		url.findAll((err) => {
        utility.logIt(error('Access all URLs: Error ', err));
      res.status(500).json(err);
		}, (data) => {
        utility.logIt(success('Access all URLs: Success ', data));
			res.status(200).json(data);
		})
	});

  // get url by id
  router.get('/urls/:id', (req, res) => {
		req.body.id = req.params.id;
		url.findID(req.body, (err) => {
        utility.logIt(error('Access URL: Error ', err));
			res.status(500).json(err);
        utility.logIt(success('Access URL: Success ', data));
			res.status(200).json(data);
		})
	});

  // update url by id
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
        utility.logIt(error('URL update: Error ', err));
      res.status(500).json(err);
    }, (data) => {
        utility.logIt(success('URL update: Success ', data));
      res.status(200).json(data);
    })
  });

  // delete url by id
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
        utility.logIt(error('URL delete: Error ', err));
      res.status(500).json(err);
        utility.logIt(success('URL delete: Success ', data));
      res.status(200).json(data);
    })
  });

  // return express router
  return router;
};
