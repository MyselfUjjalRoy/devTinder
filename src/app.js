const express = require("express");
const app = express();

app.get("/user" ,(req , res , next)=>{
    console.log("Handling the route user 1")
     next();
},
(req , res , next)=>{
    //res.send("Route Hadler 2");
    console.log("Handling the route user 2");
    next();
},
(req , res , next)=>{
    console.log("Handling the route user 3");
    next();
},
(req , res)=>{
    res.send("Route Hadler 4");
}
);




app.listen(7777 , () => {
    console.log("Server is running on port 7777");
});