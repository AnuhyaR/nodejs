
//ES5
const products=[];
module.exports=class Product{

    constructor(t){
        this.title=t;
    }

    //save is a special inbuilt function  whithout a funtion keyword of javascript ,which is called when a new object  is passed to it(ie.it will be called on current object).
    save()
    {
        products.push(this);
    }

    //fetching the data-fetchAll() method is like a utility function .this is not called on single intance of the product bcz it has to give out all the products.And we are not creating new object
    static fetchAll(){
    

        return products;
    }
}

