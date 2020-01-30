
const Product=require('../model/product');
exports.getAddProduct=(req,res,next)=>{
  res.render('add-product',{pagetitle:"ADD Product",path:'/admin/add-product',productCSS:true,formCSS:true,addproduct:true});
    
}
exports.postAddProduct=(req,res,next)=>{
    // products.push({'title':req.body.title});
    // console.log(req.body);
    //creating object
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
}
exports.getProducts=(req,res,next)=>{

    Product.fetchAll(products=>{
    console.log('shop.js');
  
  res.render('shop',{prods:products,pagetitle:"shop",path:'/',hasproduct:products.length>0,productCSS:true,shopproduct:true});
});}