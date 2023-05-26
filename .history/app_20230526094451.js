const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const {mongoConnect,mongoseConnect} = require('./util/database');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const User = require('./models/userModel');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// const userRoutes = require('./routes/userRoute');
app.use((req, res, next) =>{
User.findById('646230efb15b5fa4ad19e57b')
  .then((user) => {
      const {name, email,passwoed, cart, _id} =user;
      req.user =new User(name, email, passwoed, cart, _id);
       next();
}).catch((err) => {
     console.log(err)
})
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect( ()=> app.listen(3000) );
// getDb();


   
