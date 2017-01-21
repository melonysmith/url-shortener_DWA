// URL Shortener by Melony Smith

// dependencies
const chalk = require('chalk');
const url = require('../../models/url');
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
    const reqBody = req.body;
    reqBody.shortURL = req.params.shortURL;
    url.create(req.body, (err) => {
      utility.debug(error('Creation: Error! ', error));
      res.status(500).json(err);
    }, (data) => {
      utility.debug(success('Creation: Success! ', data));
      res.status(200).json(data);
    });
  });

  // read
  // get all urls
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      utility.debug(error('Access all URLs: Error ', err));
      res.status(500).json(err);
    }, (data) => {
      utility.debug(success('Access all URLs: Success ', data));
      res.status(200).json(data);
    });
  });

  // get url by id
  router.get('/urls/:id', (req, res) => {
    const findURL = req.params.id;
    url.findID(findURL, (err) => {
      utility.debug(error('Access URL: Error ', err));
      res.status(500).json(err);
      utility.debug(success('Access URL: Success '));
      res.status(200).json();
    });
  });

  // update url by id
  router.post('/urls/:id', (req, res) => {
    const upURL = req.params.id;
    url.update(upURL, (err) => {
      utility.debug(error('URL update: Error ', err));
      res.status(500).json(err);
    }, (data) => {
      utility.debug(success('URL update: Success ', data));
      res.status(200).json(data);
    });
  });

  // delete url by id
  router.delete('/urls/:id', (req, res) => {
    const delURL = req.params.id;
    url.destroy(delURL, (err) => {
      utility.debug(error('URL delete: Error ', err));
      res.status(500).json(err);
      utility.debug(success('URL delete: Success '));
      res.status(200).json();
    });
  });

  // return express router
  return router;
};
