const express = require('express');
const shopfootwear = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');

shopfootwear.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopfootwear.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopfootwear.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopfootwear.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopfootwear.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopfootwear.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/footwear/footwear6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});


shopfootwear.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'25','footwear', user.phoneno, '2,861.38', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});

shopfootwear.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'26','footwear', user.phoneno, '3,863.16', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});

shopfootwear.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'27','footwear', user.phoneno, '15,990.58', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});
shopfootwear.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'28','footwear', user.phoneno, '5,132.64 ', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});
shopfootwear.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'29','footwear', user.phoneno, '3,786.55', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});

shopfootwear.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'30','footwear', user.phoneno, '5,870.93 ', location], (err, result) => {
      if (!err) {
        console.log(result.rows);
      } else {
        console.log('error');
      } 
      res.redirect('/bought');
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = shopfootwear;