
// const express = require('express');
// const app = express();

// const adminRoute=require('./routes/admin.js');
// const shopRoute=require('./routes/shops.js');

// app.use(adminRoute);
// app.use(shopRoute);

// app.use((req,res,next)=>{
// res.send('<h4>404 NOT FOUND</h4>');
// });
// app.listen(3000);
const express = require('express');
const path=require('path');
const app = express();
const rootDir=require('./util/path');

const adminController = require('./routes/admin.js');
const shopController = require('./routes/shops.js');


app.use('/admin',adminController);
app.use(shopController);


app.use(express.static(path.join(rootDir,'public')));

app.use((req, res, next) => {
  // res.send('<h1>404</h1>');
  // res.sendFile('../404.html');
  // res.sendFile(path.join(__dirname,'views','404.html'));
   res.sendFile(path.join(rootDir,'views','404.html'));
   


})

app.listen(5000);

