const mongoose = require('mongoose');

const questItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const QuestItem = mongoose.model('QuestItem', questItemSchema);

module.exports = QuestItem;
