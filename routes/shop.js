const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData=require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js');
  console.log(adminData.productArr);
  const products=adminData.productArr;
  res.render('shop',{prods:products,pagetitle:"shop",path:'/',hasproduct:products.length>0,productCSS:true,shopproduct:true});
});

module.exports = router;
