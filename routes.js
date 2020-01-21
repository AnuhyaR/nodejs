
const express=require('express');
const route=express();

//route.get,route.post,route.put is used to access the middleware only when the perticular request such as post ,put and get

//exports- exports the each module

exports.notFound=route.use('/^',(req,res,next)=>{
  res.send('<h1>ERROR 404 NOT FOUND</h1>');
});
exports.addProduct = route.get('/addproduct',(req,res,next)=>{
 res.send('<html><body><form action="/addproduct" method="POST"><input type="text" name="add"/><button>ADD PRODUCT</button></form></body></html>');
});
exports.Product=route.post('/addproduct',(req,res,next)=>{

console.log(req.body);
    res.redirect('/a');
});


exports.result=route.use('/a',(req,res,next)=>{
  res.send('MYY APP');
});



