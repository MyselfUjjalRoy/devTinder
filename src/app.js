const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

//create user - POST /signup
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    //creating a new instance of the User model
    await user.save();
    res.send("User added successfullly");
  } catch (err) {
    res.status(400).send("Error saving the user ...." + err.message);
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
