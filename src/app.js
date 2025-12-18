const express = require("express");
const app = express();

app.use("/test" , (req , res)=>{
  res.send("Hello World!!!Test route working");
})

app.listen(5000 , () => {
    console.log("Server is running on port 5000");
});