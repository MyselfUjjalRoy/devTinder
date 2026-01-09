const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const { userAuth } = require("./middlewares/auth.js");


app.use(express.json());
app.use(cookieParser());

//create user - POST /signup
app.post("/signup", async (req, res) => {
  try {
    //validation of data
    validateSignUpData(req);

    const { firstName, lastName, emailId, password } = req.body;

    //encrypt password
    const passwordHash = await bcrypt.hash(password, 10);
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
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId });
    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {

      const token = await user.getJWT();
    
      res.cookie("token", token , { expires: new Date(Date.now() + 8 * 3600000), 
      });
      res.send("Login successful!!!");
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

app.get("/profile", userAuth, async (req, res) => {
  try {   

    const user = req.user;
    
    res.send(user);
  } catch (error) {
    res.status(400).send("ERROR : " + error.message);
  }
});

app.post("/sendConnectionRequest",userAuth , async (req, res) => {
  const user = req.user;

  console.log("Sending a connection request");

  res.send(user.firstName + " sent the connection request");
});


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
