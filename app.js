const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.set is used to set the  template engine or user views ie. html pages here its is pug


//used to set the template engine
app.set('view engine','ejs');

//looking into the files to be extracted
app.set('views','views');

const adminRouter = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const error404=require('./controllers/errors');

app.use(bodyParser.urlencoded({extended: false}));
//express.static make a perticular folder rendered to the user on the browser not to be modified on the server
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use(error404.error);

app.listen(3500);
