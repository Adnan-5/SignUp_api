const regUser = require("../models/User")
const express = require("express");
const router = express.Router()
require("dotenv").config()
require("../db/config").connect()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
router.use(express.json())

router.post("/", async (req, res ,next) =>{
      try {
        const { first_name, last_name,email, password} = req.body
      if(!(email && password && first_name && last_name)){
        res.status(400).send("All Fields  Are Required")
      }
      encryptedPassword = await bcrypt.hash(password, 10)
      const user = await regUser.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });

      const token = jwt.sign(
        { 
          user_id: user._id,
           email
           },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      
       user.token = token;
        res.status(201).json(user)
      } catch (err) {
        return err.message
      }
})


module.exports = router