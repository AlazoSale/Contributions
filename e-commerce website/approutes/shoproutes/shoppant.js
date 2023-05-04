const express = require('express');
const shoppant = express.Router();
const client = require('../../postgresql');
const User = require('../../models/User');

shoppant.get('/1',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant1', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shoppant.get('/2',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant2', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shoppant.get('/3',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant3', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shoppant.get('/4',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant4', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shoppant.get('/5',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant5', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});

shoppant.get('/6',(req,res)=>{
    if (req.session.user) {
        res.render('./shop/pant/pant6', { user: req.session.user });
      } else {
        res.redirect('/login');
      }
});


shoppant.post('/1',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'7','pants', user.phoneno, '3,029.75', location], (err, result) => {
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

shoppant.post('/2',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'8','pants', user.phoneno, '2,187.08', location], (err, result) => {
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

shoppant.post('/3',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'9','pants', user.phoneno, '2,145.83', location], (err, result) => {
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
shoppant.post('/4',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'10','pants', user.phoneno, '2,187.92', location], (err, result) => {
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
shoppant.post('/5',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'11','pants', user.phoneno, '3,029.75', location], (err, result) => {
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

shoppant.post('/6',(req,res)=>{ 
  if (req.session.user) {
    const user=req.session.user;
    const {location}=req.body;
    const queryString = `INSERT INTO "try" ("Name", "Product_ID","Product_Type","Contact","Product_MRP","Location") VALUES ($1, $2, $3, $4, $5, $6)`;

    client.query(queryString, [user.fullname,'12','pants', user.phoneno, '7,993.18', location], (err, result) => {
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

module.exports = shoppant;