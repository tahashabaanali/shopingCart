const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tahashabaan48:Taha7008@node-complete.y1j3stc.mongodb.net/'

 let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(url).then(client =>{
    callback(client);
  }).catch(err => console.log(err));
}