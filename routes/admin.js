// const express = require('express');

// const routes = express.Router();

// routes.get('/admin/add-product',(req,res,next)=>{
// res.send('<form action="admin/add-product" method="POST"><input type="text" name="name"/><button type="submit">SUBMIT<button></form>');

// });
// routes.post('/admin/add-product',(req,res,next)=>{
//  res.redirect('/');
// });

// module.exports=routes;
const express = require('express');

const routes = express.Router();

const path=require('path');

const rootDir=require('../util/path.js');


routes.get('/add-product', (req, res, next) => {
  // res.send('<h1>admin</h1>');
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="name"/><button type="submit">SUBMIT<button></form>');
  // res.sendFile('../add-product.html');

  res.sendFile(path.join(rootDir,'views' ,'add-product.html'));
});

routes.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = routes;

