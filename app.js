const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs=require('express-handlebars')

const app = express();

//app.set is used to set the  template engine or user views ie. html pages here its is pug

//registering the express handlebars
//engine is a method which will tell to register  our template engine which we arte providing
//handlebars-handlebars is the name given to template engine
//expressHbs-is a constant which have all th libraries of the express-handlebars
// app.engine('handlebars',expressHbs);
app.engine('hbs',expressHbs({extname:'hbs',layoutsDir:'views/layouts','defaultLayout':'mainContent'}));

//used to set the template engine
app.set('view engine','hbs');

//looking into the files to be extracted
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
//express.static make a perticular folder rendered to the user on the browser not to be modified on the server
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render("404",{pagetitle:"404"});
});

app.listen(3500);
