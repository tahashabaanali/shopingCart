const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha7008@cluster0.at8hmlw.mongodb.net/shop';

exports.MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  return db;
});