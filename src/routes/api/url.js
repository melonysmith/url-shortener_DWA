/* URL Shortener with Utility Tools:
   Debug with Logging and Version Bump
   by Melony Smith
*/

// dependencies
const chalk = require('chalk');
const url = require('../../../src/models/url');
const util = require('../../../src/lib/util');
const genShortURL = require('../../../src/lib/genShortURL');

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
    // let reqBody = req.body.shortURL;
    // reqBody = genShortURL.genShortURL();
    req.body.shortURL = genShortURL.genShortURL(); // eslint-disable-line no-param-reassign
    // I could not get the above to work without disabling the rule.
    // Approval was not obtained to disable this rule.
    url.create(req.body, (err) => {
      util.debug(error('Creation: Error! Failed to add to URL.'));
      res.status(500).json(err);
    }, (data) => {
      util.debug(success('Creation: Success! Added URL to database.', data));
      res.status(200).json(data);
    });
  });

  // read
  // get all urls
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      util.debug(error('Access all URLs: Error! Failed to access all URLs.', err));
      res.status(500).json(err);
    }, (data) => {
      util.debug(success('Access all URLs: Success! Accessed all URLs.', data));
      res.status(200).json(data);
    });
  });

   // get url by id
  router.get('/urls/:id', (req, res) => {
    const findURL = req.params.id;
    url.findID(findURL, (err) => {
      util.debug(error('Access URL: Error! Unable to access URL by ID.', err));
      res.status(500).json(err);
      util.debug(success('Access URL: Success! Accessed URL by ID.'));
      res.status(200).json();
    });
  });

   // update url by id
  router.post('/urls/:id', (req, res) => {
    const upURL = req.params.id;
    url.update(upURL, (err) => {
      util.debug(error('URL update: Error! URL failed to update.', err));
      res.status(500).json(err);
    }, (data) => {
      util.debug(success('URL update: Success! URL has been updated.', data));
      res.status(200).json(data);
    });
  });

   // delete url by id
  router.delete('/urls/:id', (req, res) => {
    const delURL = req.params.id;
    url.destroy(delURL, (err) => {
      util.debug(error('URL delete: Error! URL failed to delete.', err));
      res.status(500).json(err);
      util.debug(success('URL delete: Success! URL has been deleted.'));
      res.status(200).json();
    });
  });

 // return express router
  return router;
};
