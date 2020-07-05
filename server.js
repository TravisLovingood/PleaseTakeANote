const express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
var passport = require("passport")
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(bodyParser.urlencoded({ extended: true }))
 
//Set up body parsing, static and route middleware
app.use(bodyParser.json())
// require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);



app.listen(PORT, function(){
    console.log("App listing on PORT: " + PORT);
});