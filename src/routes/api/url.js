// URL Shortener by Melony Smith

// dependencies
const url = require('../../models/url');
var genShortURL = require('../../lib/genShortURL');

// export express
module.exports = (express) => {
  // use express router function
  const router = express.Router();

  // show route api is working
  router.get('/urls/status', (req, res) => {
    res.json({
      healthy: true,
    });
  });

  // CREATE
  // add urls to database
  router.post('/urls', (req, res) => {
    var urlTool = require("../../lib/genShortURL");
    var passThrough = req.body;
    passThrough.shortURL = urlTool.genShortURL();
    url.create(passThrough, console.log, (createdURLData) => {
      res.json(createdURLData);
    })
  });

  // read
  // get all urls
  router.get('/urls', (req, res) => {
    var response = res;
		url.findAll((err) => {
			response.status(500).json(err);
		}, (data) => {
      response.status(200).json(data);
      var urls = data;
			response.render('pages/urls', {
        urls
      });
		});
	});

  // get url by id
  router.get('/urls/:id', (req, res) => {
    var request = req;
    var response = res;
		request.body.id = request.params.id;
		url.findID(request.body, (err) => {
			response.status(500).json(err);
		}, (data) => {
			response.status(200).json(data);
		});
	});

  // update url by id
  router.post('/urls/:id', (req, res) => {
    var request = req;
    var response = res;
    request.body.id = request.params.id;
    url.update(req.body, (err) => {
      response.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // delete url by id
  router.delete('/urls/:id', (req, res) => {
    var request = req;
    var response = res;
    request.body.id = request.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // return express router
  return router;
};
