//http is our core module
// const http=require('http');

//Third party module
const express=require('express');

//CREATING AN EXPRESS APPLN BY EXPORTING "CONST EXPRESS" AS A FUNCTION
const app=express();


//use is used to add a middeleware to our server
//req and res are the objects
//next is a function used to pass a request to next middleware
app.use((req,res,next)=>{
  console.log(' First Middleware');
//   next();
});
//res.send is used to send the response
app.use((req,res,next)=>{
  console.log('Another middleware');
  res.send('<html><h1>RESPONSE DONE</h1></html>');
});


//creating a server
// const server=http.createServer(app);


// server.listen(4000);
 
//creates the server implicitly
app.listen(4000);
