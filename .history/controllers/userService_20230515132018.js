const User = require('../models/userModel')

exports.signUp = (req, res, next) => {
   const {name , email, password} = req.body;
   const user = new User(name, email, password);
   user.save();
}

export.logIn= (req, res, next) => {
   const {name , email, password} = req.body;
   const user = new User(name, email, password);
   user.save();
}