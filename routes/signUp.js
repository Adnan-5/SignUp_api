const regUser = require("../models/User")
const express = require("express");
const router = express.Router()


router.post("/", (req, res ,next) =>{
    res.json({
        body:{
            message:"Its PORT route"
        }
    })
})


module.exports = router