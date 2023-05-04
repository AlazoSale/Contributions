const express = require('express');
const shopformal = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');

shopformal.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopformal.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopformal.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopformal.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopformal.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopformal.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/formal/formal6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});


shopformal.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'31','formal', user.phoneno, '2,524.65', location], (err, result) => {
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

shopformal.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'32','formal', user.phoneno, '7,227.12', location], (err, result) => {
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

shopformal.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'33','formal', user.phoneno, '7,154.72', location], (err, result) => {
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
shopformal.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'34','formal', user.phoneno, '3,280.61 ', location], (err, result) => {
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
shopformal.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'35','formal', user.phoneno, '6,949.31', location], (err, result) => {
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

shopformal.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'36','formal', user.phoneno, '2,272.10 ', location], (err, result) => {
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



module.exports = shopformal;