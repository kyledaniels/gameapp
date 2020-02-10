const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema and Model

const userSchema = new Schema({
    userId: {type:Number},
    userName : {type: String},  
  });



  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
  