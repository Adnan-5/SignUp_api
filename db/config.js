const mongoose = require("mongoose")
const {MONGO_URL} = process.env;

mongoose.connect(MONGO_URL)
.then(() =>{
   console.log("Successfully Connected with DB");
})