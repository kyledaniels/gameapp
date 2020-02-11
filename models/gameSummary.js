const mongoose = require('mongoose');

// Create Schema and Model

const Schema = mongoose.Schema;
const gamesummariesSchema = new Schema({
      
      score: Number,
      numberOfQuestions: Number,
      correctAnswers: Number,
      wrongAnswers: Number,
      usedHints: Number,
      usedFiftyFifty: Number,
});

const gamesummaries = mongoose.model('gamesummaries',gamesummariesSchema);

module.exports = gamesummaries;