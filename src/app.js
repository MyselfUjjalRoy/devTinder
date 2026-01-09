const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");


app.use(express.json());

//create user - POST /signup
app.post("/signup", async (req, res) => {
  try {

  //validation of data
  validateSignUpData(req);

  const {firstName , lastName , emailId , password}  = req.body;
  
  //encrypt password
  const passwordHash = await bcrypt.hash(password , 10);
  console.log(passwordHash);
  
  //creating a new instance of the User model
  const user = new User({
    firstName,
    lastName,
    emailId,
    password: passwordHash,
  });
    await user.save();
    res.send("User added successfullly");
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

//login user - POST /login
app.post("/login" , async(req , res) =>{
  try {
    const {emailId , password} = req.body;

    const user = await User.findOne({emailId});
    if(!user){
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password , user.password);

    if(isPasswordValid){
      res.send("Login successful!!!");
    }
    else{
      throw new Error("Invalid credentials");
    }

  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});  

//read user by email - GET /user
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const users = await User.find({ emailId: userEmail });
    if (users.length) res.send(users);
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//update user by id
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;

  try {
    const ALLOWED_UPDATES = [
      "photoUrl",
      "about",
      "gender",
      "age",
      "skills",
    ];

    const isUpdateAllowed = Object.keys(data).every((key) =>
      ALLOWED_UPDATES.includes(key)
    );

    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }

    if(data?.skills.length > 10){
      throw new Error("Skills can't be more than 10");
    }
    const user = await User.findByIdAndUpdate(userId, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updated successfully");
  } catch (error) {
    res.status(400).send("Update Failed : " + error.message);
  }
});

//Delete user by id
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);

    res.send("User deleted successfully");
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

//Feed APi - GET/feed - get all the users from the database
app.get("/feed", (req, res) => {});

connectDB()
  .then(() => {
    console.log("Database connnection established...");
  })
  .catch((err) => {
    console.log("Database can't be connected");
  });

app.listen(7777, () => {
  console.log("Server is running on port 7777");
});
