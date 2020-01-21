const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const routes=require('./routes.js');

//bodyParser middleware used to convert or parse the raw data from the buffer  to readable data
//extended is used as a configuration to indicate that the server need to parse all types of data along with no.s and special characters including strings-o/p
//{} means we are configuring something
app.use(bodyParser.urlencoded({extended:true}));

//calling midlewares in routes.js
app.use(routes.addProduct);
app.use(routes.Product);
app.use(routes.result);
app.use(routes.notFound);

app.listen(4001);