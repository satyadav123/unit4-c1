const express=require("express")
const app=express()
app.use(logger)
app.get("/books",function(req,res){

  return res.send({route: "/books"})
})
app.get("/libraries",checkpermission("librarian"),function(req,res){

    return res.send({route: "/libraries",permission: true})
  })
  app.get("/authors",checkpermission("authors"),function(req,res){

    return res.send({route: " /authors",permission: true})
  })
function logger(req,res,next){
if(res.path=="/books"){
next();
}
else if(res.path=="/libraries"){
next();
}
else{
next()
}
}
function checkpermission(data){

return function permission(req,res,next){
if(data=="librarian"){
   return next();
}
else if(data=="authors"){
    return next();
}
else{
   return res.send("permission not allowed")
}
}
}

  app.listen(2400,()=>{

    console.log("listening the 2400")
    
    
    })