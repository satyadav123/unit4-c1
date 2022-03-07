const express=require("express")
const app=express()
app.use(logger)
app.get("/books",function(req,res){

  return res.send({route: "/books"})
})
app.get("/libraries",checkpermission("libraries"),function(req,res){

    return res.send({route: "/libraries",permission: true})
  })
  app.get("/authors",checkpermission("authors"),function(req,res){

    return res.send({route: " /authors",permission: true})
  })
function logger(req,res,next){
if(res.path="/books"){
next();
}
else if(res.path="/libraries"){
next();
}
else{
next()
}
}
function checkpermission(data){

return function permission(req,res,next){
if(data="libraries"){
    next();
}
else if(data="authors"){
    next()
}
else{
    res.send("permission not allowed")
}
}
}




  app.listen(2400,()=>{

    console.log("listening the 2400")
    
    
    })