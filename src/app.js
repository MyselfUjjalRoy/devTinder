const express = require("express");
const app = express();



app.get("/user" , (req , res) => {
    res.send({firstname : "John" , lastname: "Doe"}); 
});

app.post("/user" , (req , res) => {
    res.send("Data successfully posted!"); 
});

app.delete("/user" , (req , res) => {
    res.send("User successfully deleted!"); 
});

app.use("/test" , (req , res) => {
    res.send("Test route is working!"); 
});

app.listen(5000 , () => {
    console.log("Server is running on port 5000");
});