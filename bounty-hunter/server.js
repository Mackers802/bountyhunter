const express = require("express");
const app = express();
const mongoose = require("mongoose")

app.use("/bountys" , require("./routes/bountyhunterRouter.js"))

mongoose.connect("mongodb://localhost:27017/bounty", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("connected to Db"))

app.listen(9000, () => {
    console.log("this server is running on 9000");
  });
  
