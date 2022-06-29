const mongoose = require("mongoose")
const {MONGO_URL} = process.env;

mongoose.connect(MONGO_URL)
.then(() =>{
   console.log("Successfully Connected with DB");
})
.catch((err) => {
    console.log("DB Connection failed, Please check ...");
    process.exit(1)
    return err.message
})