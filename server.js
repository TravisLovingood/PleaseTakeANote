const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// const bodyParser = require('body-parser');
// var path = require("path");
// var passport = require("passport")

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8080;


//Set up body parsing, static and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.use(bodyParser.urlencoded({ extended: true }))
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));