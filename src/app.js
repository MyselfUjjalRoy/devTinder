const express = require("express");
const app = express();

app.get("/getUserData" , (req, res) => {

    throw new Error("error");
    res.send("User Data Sent");
});

app.use("/" , (err , req , res , next)=>{
    if(err){
        res.status(500).send("Something went wrong! Please try again later.");
    }
})



app.listen(7777 , () => {
    console.log("Server is running on port 7777");
});