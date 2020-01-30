//storing into a file
const fs=require('fs');
const path=require('path');
const rootDir=require('../util/path');


module.exports=class Product{

    constructor(t){
        this.title=t;
    }

    //save is a special inbuilt function  whithout a funtion keyword of javascript ,which is called when a new object  is passed to it(ie.it will be called on current object).
    save()
    {
        //creating a file
        //to write the data into the file, we have to specify the file path 
    //  const p= path.join(rootDir,'data','product.json'); or
    const p=path.join(path.dirname(process.mainModule.filename),'data','product.json');

    // fs.createReadStream == for a large files we will ot read the files ie. not putting the file into the memory ,else we will read it as a stream
    fs.readFile(p,(err,fileContent)=>{
        // console.log(fileContent);
        let products=[];
        if(!err){
            //below command will take incomming json data and converts it into javascript format
            products=JSON.parse(fileContent);
        }
        products.push(this);
         //stringify method takes javascript object array and convert it into json format
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        });
        });

       
    

    }


    //fetching the data-fetchAll() method is like a utility function .this is not called on single intance of the product bcz it has to give out all the products.And we are not creating new object
    //cd -callback is used to overcome asynchronous execution of js functions
    static fetchAll(cb){
    const p=path.join(rootDir,'data','product.json') ;

        fs.readFile(p,(err,fileContent)=>{
         if(err){
             cb([]) ;
         }
         cb(JSON.parse(fileContent));
        });
    }
}

