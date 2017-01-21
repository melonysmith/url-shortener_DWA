// URL Shortener by Melony Smith

// create genShortURL function
function genShortURL() {
  // include these characters
  const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  // length of shortened URL
  const genShortURLLength = 6;
  // text as blank string
  let genShortURLText = '';

  // do the shorten url magic
  // eslint disable added with approval
  /* eslint-disable no-plusplus */
  for (let i = 0; i < genShortURLLength; i++) {
    /* eslint-enable no-plusplus */
    // create the formula
    genShortURLText += characters.charAt((Math.random()) * characters.length);
  }

  // return the result
  return genShortURLText;
}

// export genShortURL
exports.genShortURL = genShortURL;
