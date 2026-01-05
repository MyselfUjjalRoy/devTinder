const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth");

app.use("/admin" , adminAuth);
app.get("/user" , userAuth , (req , res)=>{
    res.send("Welcome User");
});

app.get("/admin/getAllData" , (req , res)=>{
    res.send("Here is all the admin data");
});

app.get("/admin/deleteUser" , (req , res)=>{
    res.send("User deleted successfully");
});





app.listen(7777 , () => {
    console.log("Server is running on port 7777");
});