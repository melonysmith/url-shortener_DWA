// URL Shortener by Melony Smith

// create genShortURL function
function genShortURL() {
  // include these characters
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  // length of shortened URL
  const genShortURLLength = 6;
  // text as blank string
  const genShortURLText = '';

  // do the shorten url magic
  /* eslint-disable no-const-assign */
  /* eslint-disable no-plusplus */
  for (const i = 0; i < genShortURLLength; i++) {
    /* eslint-enable no-const-assign */
    /* eslint-enable no-plusplus */
    // create the formula
    /* eslint-disable no-const-assign */
    genShortURLText += characters.charAt((Math.random()) * characters.length);
    /* eslint-enable no-const-assign */
  }

  // return the result
  return genShortURLText;
}

// export genShortURL
exports.genShortURL = genShortURL;
