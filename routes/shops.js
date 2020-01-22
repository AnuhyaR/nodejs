// const express=require('express');

// const routes=express.Router();

// routes.use('/',(req,res,next)=>{
//     res.send('<h1>WELCOME</h1>');
// });
 
// module.exports=routes;



const express = require('express');
const path=require('path');


const routes = express.Router();
const rootDir=require('../util/path.js');



//path is a core module used to specify path of a file where its content need to be displayed on to the browser

routes.get('/', (req, res, next) => {
//   res.send('<h1>Shop</h1>');
// res.sendFile('../shop.html');

// res.sendFile(path.join(__dirname,'..','views','shop.html'));
 res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = routes;