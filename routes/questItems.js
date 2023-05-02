const express = require('express');
const router = express.Router();
const QuestItem = require('../models/questItem');

// Get all quest items
router.get('/', async (req, res) => {
  try {
    const questItems = await QuestItem.find();
    res.json(questItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a quest item's completion status
router.patch('/:id', async (req, res) => {
  const id = req.params.id;
  const completed = req.body.completed;

  try {
    await QuestItem.updateOne({ _id: id }, { completed: completed });
    res.json({ message: 'Quest item updated' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
