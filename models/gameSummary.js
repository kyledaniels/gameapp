const mongoose = require('mongoose');



//Schema
const Schema = mongoose.Schema;
const gamesummariesSchema = new Schema({

      score: Number,
      numberOfQuestions: Number,
      correctAnswers: Number,
      wrongAnswers: Number,
      usedHints: {
            type:Number,
            default:0
      },
      usedFiftyFifty:{
            type:Number,
            default:0
      }
     
      });

 //Model
const gamesummaries = mongoose.model('gamesummaries',gamesummariesSchema);



module.exports = gamesummaries;