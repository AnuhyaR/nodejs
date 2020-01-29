exports.error=(req,res,next)=>{
    res.render("404",{pagetitle:"404",path:'/.'});

};
