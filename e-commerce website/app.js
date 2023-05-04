const express = require('express');
const app = express();
const mongoose =require('mongoose');
const dburl ='mongodb+srv://alazosale20021:alazosale2002@trycluster.tw4parz.mongodb.net/trydb?retryWrites=true&w=majority';
const User = require('./models/User');
const session = require('express-session');
const bcrypt = require('bcrypt');
const client = require('./postgresql');


const shoproutes=require('./approutes/shoproutes/shop');
const shopshirt=require('./approutes/shoproutes/shopshirt');
const shopmobilelaptop=require('./approutes/shoproutes/shopmobilelaptop');
const shoppant=require('./approutes/shoproutes/shoppant');
const shopaccessories=require('./approutes/shoproutes/shopaccessories');
const shopfootwear=require('./approutes/shoproutes/shopfootwear');
const shopformal=require('./approutes/shoproutes/shopformal');

mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .then(result => console.log('MongoDB connected'))
  .then(result=>client.connect())
  .catch(err => console.log(err));

  
app.set('view engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.use(session({
  name: 'sessionId',
  secret: 'mysecretkey', // Change this value as per your security requirements
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));


app.get('/signup', (req, res) => {
    res.render('signin');
  });

app.get('/login', (req, res) => {
    res.render('login');
  });
  
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if (!user) {
          return res.render('login', { error: 'Invalid email or password' });
        }
        bcrypt.compare(password, user.password)
          .then(match => {
            if (match) {
              req.session.user = user;
              return res.redirect('/profile');
            } else {
              return res.render('err');
            }
          });
      })
      .catch(err => console.log(err));
  });
  const saltRounds = 10; 
  app.post('/signup', (req, res) => {
    const { fullname,phoneno, email, password } = req.body;
    bcrypt.hash(password, saltRounds)
      .then(hash => {
        const user = new User({fullname,phoneno, email, password: hash });
        return user.save();
      })
      .then(() => res.redirect('/login'))
      .catch(err => console.log(err));
  });

  app.get('/logout', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store');
    req.session.destroy();
    res.clearCookie('sessionId', { path: '/' });
      res.redirect('/login');
  });
 
    // Route for profile page
    app.get('/profile', (req, res) => {
        if (req.session.user) {
          res.render('profile', { user: req.session.user });
        } else {
          res.redirect('/login' );
        }
      });
      app.get('/about', (req, res) => {
        if (req.session.user) {
          res.render('about', { user: req.session.user });
        } else {
          res.redirect('/login' );
        }
      });
  // Middleware for passing user data to views
 
  app.get('/bought',(req,res)=>{
    if (req.session.user) {
        res.render('bought', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
    });
  
  app.get('/',(req,res)=>{
    if (req.session.user) {
        res.render('index', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
    });

   app.use('/shop',shoproutes);
   app.use('/shop/shirt',shopshirt);
   app.use('/shop/mobilelaptop',shopmobilelaptop);
   app.use('/shop/pant',shoppant);
   app.use('/shop/accessories',shopaccessories);
   app.use('/shop/footwear',shopfootwear);
   app.use('/shop/formal',shopformal);
   
