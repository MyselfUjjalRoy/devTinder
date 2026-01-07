const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup" , async (req , res)=>{
    const userObj = {
      firstName: "Suman",
      lastName: "Roy",
      emailId: "suman@gmail.com",
      password: "nayan123",
      _id: "695e232d29d107f02c5b6e50",
    };
    try{
         //creating a new instance of the User model
         const user = new User(userObj);
         await user.save();
    }
    catch(err){
        res.status(400).send("Error saving the user ...." + err.msg);
    }
    res.send("User added successfullly");
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