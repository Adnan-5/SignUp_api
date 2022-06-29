let express = require("express")
let app = express();
const routes = require("./routes/signUp")
let port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log('server is listning on port', port);
})

