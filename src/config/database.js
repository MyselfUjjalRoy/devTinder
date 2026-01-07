const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:ujjal123@namastenode.87myyst.mongodb.net/devTinder"
  );
};

module.exports = connectDB;

