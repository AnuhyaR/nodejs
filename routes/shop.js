const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminData=require('./admin.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js');
  console.log(adminData.productArr);
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
