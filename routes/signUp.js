const regUser = require("../models/User")
const express = require("express");
const router = express.Router()
require("dotenv").config()

router.post("/", async (req, res ,next) =>{
      try {
        const { first_name, last_name,email, password} = req.body
      if(!(email && password && first_name && last_name)){
        res.status(400).send("All Fields ")
      }
      } catch (error) {
        
      }
})


module.exports = router