const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 4,
    maxLength: 50,
  },
  lastName: {
    type: String,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 18,
  },
  gender: {
    type: String,
    validate(value) {
      if(!["male", "female" , "other"].includes(value)){
        throw new Error("Gender must be male, female or other");
      } 
    }
  },
  photoUrl: {
    type: String,
    default:
      "https://eliteadmin.themedesigner.in/demos/bt4/university/dist/images/users/11.jpg"
  },
  about: {
    type: String,
    default: "This is a defautlt about section",
  },
  skills: {
    type: [String]
  }
  }, 
  {
    timestamps : true
  }
);

module.exports = mongoose.model("User", userSchema);
 