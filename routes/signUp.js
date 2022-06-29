const regUser = require("../models/User")
const express = require("express");
const router = express.Router()
require("dotenv").config()

router.post("/", (req, res ,next) =>{
    res.json({
        body:{
            message:"Its POST route"
        }
    })
})


module.exports = router