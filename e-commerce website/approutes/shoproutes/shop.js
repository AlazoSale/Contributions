const express = require('express');
const router = express.Router();

router.get('/shirt',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

router.get('/pant',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

router.get('/footwear',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

router.get('/formal',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

router.get('/accessories',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

router.get('/mobilelaptop',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});



module.exports = router;