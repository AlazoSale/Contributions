const express = require('express');
const shopaccessories = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');

shopaccessories.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopaccessories.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopaccessories.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopaccessories.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopaccessories.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopaccessories.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/accessories/accessories6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});


shopaccessories.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'19','accessories', user.phoneno, '1,261.90', location], (err, result) => {
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

shopaccessories.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'20','accessories', user.phoneno, '840.99', location], (err, result) => {
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

shopaccessories.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'21','accessories', user.phoneno, '756.81', location], (err, result) => {
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
shopaccessories.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'22','accessories', user.phoneno, '1,118.79', location], (err, result) => {
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
shopaccessories.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'23','accessories', user.phoneno, '2,356.28', location], (err, result) => {
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

shopaccessories.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'24','accessories', user.phoneno, '2,549.91', location], (err, result) => {
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


module.exports = shopaccessories;