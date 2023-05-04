const express = require('express');
const shopmobilelaptop = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');

shopmobilelaptop.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/mobilelaptop/mobilelaptop6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopmobilelaptop.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'13','electronics', user.phoneno, '84,182', location], (err, result) => {
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

shopmobilelaptop.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'14','electronics', user.phoneno, '67,345', location], (err, result) => {
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

shopmobilelaptop.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'15','electronics', user.phoneno, '57,243', location], (err, result) => {
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
shopmobilelaptop.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'16','electronics', user.phoneno, '78,206', location], (err, result) => {
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
shopmobilelaptop.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'17','electronics', user.phoneno, '41,165', location], (err, result) => {
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

shopmobilelaptop.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'18','electronics', user.phoneno, '65,262', location], (err, result) => {
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


module.exports = shopmobilelaptop;