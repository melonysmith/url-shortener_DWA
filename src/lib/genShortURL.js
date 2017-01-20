// URL Shortener by Melony Smith

// create genShortURL function
function genShortURL() {
  // include these characters
  var characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  // length of shortened URL
  var genShortURLLength = 6;
  // text as blank string
  var genShortURLText = '';

  // do the shorten url magic
  for(var i = 0; i < genShortURLLength; i++) {
    // create the formula
    genShortURLText += characters.charAt((Math.random()) * characters.length);
  };

  // return the result
  return genShortURLText;
}

// export genShortURL
exports.genShortURL = genShortURL;
