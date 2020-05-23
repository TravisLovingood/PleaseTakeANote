const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({ extended: false }))
 

app.use(bodyParser.json())
 
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);



app.listen(PORT, function(){
    console.log("App listing on PORT: " + PORT);
});