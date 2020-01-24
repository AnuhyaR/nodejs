const path = require('path');


//used to extract the file which is running the server
//process is the library,mainmodule is the property of the process,and filename is used to extract app.js(ie. server file)
module.exports = path.dirname(process.mainModule.filename);