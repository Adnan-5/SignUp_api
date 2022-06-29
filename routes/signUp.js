const regUser = require("../models/User")
const express = require("express");
const router = express.Router()
require("dotenv").config()

router.post("/", async (req, res ,next) =>{
      try {
        const { first_name, last_name,email, password} = req.body
      } catch (error) {
        
      }
})


module.exports = router