// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const routes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 8080;
// Connect to the Mongo DB
mongoose.connect('mongodb://localhost/quizgame', {
  usedNewUrlParser:true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', ()=> {
  console.log('Mongoose is connected');
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Start the API server
app.listen(PORT, function() {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});