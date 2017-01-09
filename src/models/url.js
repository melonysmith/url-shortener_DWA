// URL Shortener by Melony Smith

// dependencies
const db = require('./db');

// create
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// read
// find all
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

// find by id
exports.findID = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }]
  }).then(success).catch(err);
};

// find by short URL
exports.findShorterURL = (payload, err, success) => {
  db.url.find({
    where: {
      shortURL: payload.shortURL
    },
    include: [{
      all: true,
      nested: true
    }],
  }).then(success).catch(err);
};

// update by id
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    }
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// delete by id
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    }
  }).then(success).catch(err);
};
