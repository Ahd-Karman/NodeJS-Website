const e = require("express");
const url = require("url");

const app = new e();

app.use(requestInfo);

app.set("view engine" , "ejs");

app.get( "/" , (req,res)=>{
    
    app.use(e.static("views"));
    res.render("home") ;
});

app.get( "/home" , (req,res)=>{
    app.use(e.static("views"));
    res.render("home") ;
});

app.get( "/categories" , (req,res)=>{

    
    app.use(e.static("views"));
    res.render("includes/categories") ;
});

app.get( "/laptops" , (req,res)=>{

    app.use(e.static("views"));
    res.render("includes/laptops") ;
});

app.get( "/phones" , (req,res)=>{
    app.use(e.static("views"));
    res.render("includes/phones") ;
});

app.get( "/others" , (req,res)=>{
    app.use(e.static("views"));
    res.render("includes/others") ;
});

app.get( "/details" , (req,res)=>{
    app.use(e.static("views"));
    res.render("includes/details") ;
});

app.listen("2000");

console.log("server started at port 2000 ... ") ;

function requestInfo(req,res,next){

    if (req.query.id == "")
    {
        app.get("" , ()=>{

        } )
    }

    else{
        next();
    }
    
}