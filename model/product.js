//storing into a file
const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');


//Refactoring - removing the redundant content from diifernt function and making it as a differnt function which is global(ie.here readFile function and path module ie. p)
const p=path.join(path.dirname(process.mainModule.filename),'data','product.json');

const getProductsFromFile=(cb)=>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
          return  cb([]) ;
        }
        return cb(JSON.parse(fileContent));
       });
   }

module.exports=class Product{

    constructor(t){
        this.title=t;
    }

    //save is a special inbuilt function  whithout a funtion keyword of javascript ,which is called when a new object  is passed to it(ie.it will be called on current object).
    save()
    {
        

    // fs.createReadStream == for a large files we will ot read the files ie. not putting the file into the memory ,else we will read it as a stream
    
        let products=[];
        getProductsFromFile(products => {
            products.push(this);
            //stringify method takes javascript object array and convert it into json format
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        });
    }


    
    static fetchAll(cb){
        getProductsFromFile(cb);

}

}