const express=require('express');
const app=express();
app.use(logger);


app.get("/books",(req,res)=>{
    return res.send({route: "/books"});
});

app.get("/libraries",checkPermission('librarian'), (req,res)=>{
    
     return res.send({route: "/libraries", permission:req.permission});
});

app.get("/authors",checkPermission('author'), (req,res)=>{
    
   return  res.send({route: "/authors", permission:req.permission });
});

app.listen(5003,()=>{
    console.log('listening on port 5003')
}
);

function logger(req,res,next)
{
    console.log('First');
    next();
    console.log("second");
};

function checkPermission(str){
    return function checkPermission(req,res,next)
    {
        if(req.path=='/libraries' && str=='librarian')
        {
            req.permission=true;
        }
        if(req.path=="/authors" && str=='author')
        {
            req.permission=true;
        }
        next();
    }
}




