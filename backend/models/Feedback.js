const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  message: String,
  rating: Number
});

module.exports = mongoose.model('Feedback', feedbackSchema);
