const express = require("express");
const app = express();

app.get("/user/:userId", (req, res) => {
    console.log(req.params);
    res.send({ firstname: "John", lastname: "Doe" });
});




app.listen(5000 , () => {
    console.log("Server is running on port 5000");
});