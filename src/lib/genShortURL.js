// URL Shortener by Melony Smith

// create genShortURL function
function genShortURL() {
  // possible included characters
  var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  // short URL length
  var genShortURLLength = 6;
  // text as blank string
  var genShortURLText = '';

  // do the shorten URL magic
  for(var i = 0; i < genShortURLText; i++) {
    // create the formula
    genShortURLText += characters.charAt((Math.random()) * characters.length);
  };

  // return the result
  return genShortURLText;
}

// export
exports.genShortURL = genShortURL;
