let express = require("express")
let app = express();

let port = process.env.PORT || 3000;

app.get("/signUp", (req, res, next) => {
    res.json({
        body:{
            message:"hello its Home Route"
        }
    })
})

