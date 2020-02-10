//
 const mongoose = require('mongoose');



//Schema
const Schema = mongoose.Schema;
const gamesummariesSchema = new Schema({

      score: Number,
      numberOfQuestions: Number,
      correctAnswers: Number,
      wrongAnswers: Number,
      usedHints: Number,
      usedFiftyFifty: Number
     
      });

 //Model
const gamesummaries = mongoose.model('gamesummaries',gamesummariesSchema);



module.exports = gamesummaries;