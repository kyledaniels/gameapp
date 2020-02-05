const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema and Model

const gameSummarySchema = new Schema({
      score: {type: Number, required: true, default: 0},
      numberOfQuestions: Number,
      numberOfAnsweredQuestions: Number,
      correctAnswers: Number,
      wrongAnswers: Number,
      correctAnswers: Number,
      usedHints: Number,
      usedFiftyFifty: Number,
});

const gameSummary = mongoose.model('gamesummary',gameSummarySchema);

module.exports = gameSummary;