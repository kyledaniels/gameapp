require('dotenv').config()
// Import npm packages
const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const routes = require("./routes/api");
const passport = require('passport')
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.MONGO_URI;
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
app.use(express.static(path.join(__dirname, 'gametestapp/build')));

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
passport.use(new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: `${process.env.HOST}/auth/github/callback`
},
  function(accessToken, refreshToken, profile, done) {
    const user = {
      displayName: profile.displayName,
      username: profile.username,
      image: profile._json.avatar_url
    }
    return done(null, user)
  }
));
app.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] })
);
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/fail' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
  app.get('/current-user', (req, res) => {
    res.send(JSON.stringify({currentUser: req.user}))
  })
  // app.get('/logout', function(req, res){
  //   req.logout();
  //   res.redirect('/');
  // });
// Connect to the Mongo DB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true});
mongoose.connection.on('connected',()=>{
  console.log('Mongoose is connected!!!')
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/gametestapp/build/index.html"));
  });




// Import npm packages
// const express = require("express");
// const mongoose = require("mongoose");
// const morgan = require('morgan');
// const routes = require("./routes/api");
// const app = express();
// const PORT = process.env.PORT || 8080;
// Connect to the Mongo DB
// mongoose.connect('mongodb://localhost/quizgame', {
//   usedNewUrlParser:true,
//   useUnifiedTopology: true
// });
// mongoose.connection.on('connected', ()=> {
//   console.log('Mongoose is connected');
// });
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// HTTP request logger
// app.use(morgan('tiny'));
// app.use('/api',routes);
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Start the API server
// app.listen(PORT, function() {
//   console.log(`:earth_americas:  ==> API Server now listening on PORT ${PORT}!`);
// });