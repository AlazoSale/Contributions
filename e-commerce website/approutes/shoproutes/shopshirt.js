const express = require('express');
const shopshirt = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');
shopshirt.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopshirt.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopshirt.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopshirt.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopshirt.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shopshirt.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/shirt/shirt6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});



shopshirt.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'1','shirts', user.phoneno, '1,502.67', location], (err, result) => {
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

shopshirt.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'2','shirts', user.phoneno, '840.99', location], (err, result) => {
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

shopshirt.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'3','shirts', user.phoneno, '2,524.65', location], (err, result) => {
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
shopshirt.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'4','shirts', user.phoneno, '2,172.10', location], (err, result) => {
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
shopshirt.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'5','shirts', user.phoneno, '2,272.10', location], (err, result) => {
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

shopshirt.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'6','shirts', user.phoneno, '2,103.74', location], (err, result) => {
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
module.exports=shopshirt;