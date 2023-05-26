const {Object} = require('mongodb');

const { getDb } = require("../util/database");

class User{
    constructor(userName, email, password){
        this.name = userName;
        this.email = email;
        this.password = password;
    }

    save(){
       const db = getDb();
       db
       .collection('products')
       .insertOne(this)
        .then( res => console.log('added'))
    }

    static findById(id){
      const db = getDb();
      return db
       .collection('products')
       .findOne({_id: new Object(id)})
       .then((result) =>  result)
       .catch((err) => {
           console.log(err)
       })
    }
}