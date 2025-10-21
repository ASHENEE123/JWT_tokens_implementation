const ser=require("express")
const app=ser();
const jwt=require("jsonwebtoken")
const crypt=require("bcrypt")
app.set("view engine","ejs")
app.use(ser.urlencoded({extended:true}))
const arr=[];
const secret="nikhil";
app.get("/register",(req,res)=>{
    res.render("index")
})

app.post("/newuser",async(req,res)=>{
    const pass=req.body.password
    try{
        const storedpass= await crypt.hash(pass,10);
        arr.push(storedpass)
    }
    catch(err){
        if (err) throw err;
        console.log("password is stored")
    }
    res.redirect("/login")
})

app.get("/login",(req,res)=>{
res.render("login")
})


app.post("/check",async(req,res)=>{
    const pass=req.body.password 
    try{
     const bool=await crypt.compare(pass,arr[0])
     if(bool){
       const token= jwt.sign({id:1,pass:arr[0]},secret,{expiresIn:'30m'})
        return res.json({message:"tokens created",token})
     }
     else{
        return res.send("invalid password")
     }
    }
    catch(err){
        console.log("err occured",err.message)
    }
})


app.get("/route",(req,res)=>{
    const sign = req.headers.authorization
    if(!sign){
        return res.status(401).json({message:"no authorization provided"})
    }
    const auth=sign.split(" ")
     if(auth.length!=2 ||auth[0]!="Bearer"){
        return res.json({message:"authorization header format is not correct"})
    }
    try{
     const bool=jwt.verify(auth[1],secret)
     if(!bool){
        return res.json({message:"invalid tokens try again"})
     }
     req.user=bool.pass;
    return  res.send("welcome user your password is:"+ req.user)
}
catch(err){
    console.log("err occured",err.message)
}
})
app.listen(3000,(err)=>{
    if (err) throw err;
    console.log("success")
})