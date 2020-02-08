const mongoose = require('mongoose');

// Create Schema and Model

const Schema = mongoose.Schema;
const gameSummarySchema = new Schema({
      
      score: {type: Number, required: true, default: 0},
      numberOfQuestions: Number,
      correctAnswers: Number,
      wrongAnswers: Number,
      usedHints: Number,
      usedFiftyFifty: Number,
});

const gameSummary = mongoose.model('gamesummary',gameSummarySchema);

module.exports = gameSummary;