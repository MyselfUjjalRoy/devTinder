const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup" , async (req , res)=>{
      
    const user = new User(req.body);
    try{
         //creating a new instance of the User model
         await user.save();
         res.send("User added successfullly");
    }
    catch(err){
        res.status(400).send("Error saving the user ...." + err.msg);
    }
})



connectDB()
  .then(() => {
    console.log("Database connnection established...");
  })
  .catch((err) => {
    console.log("Database can't be connected");
  });


app.listen(7777 , () => {
    console.log("Server is running on port 7777");
});