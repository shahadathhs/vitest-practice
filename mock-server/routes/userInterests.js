const express = require('express');
const UserInterests = require('../models/userInterests');
const router = express.Router();

// Route to get all documents
router.get('/', async (req, res) => {
  try {
    const userInterests = await UserInterests.find();
    res.json(userInterests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new document
router.post('/', async (req, res) => {
  try {
    const userInterest = new UserInterests(req.body);
    await userInterest.save();
    res.json(userInterest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to update a document
router.put('/:id', async (req, res) => {
  try {
    const userInterest = await UserInterests.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(userInterest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to delete a document
router.delete('/:id', async (req, res) => {
  try {
    const userInterest = await UserInterests.findByIdAndDelete(req.params.id);
    res.json(userInterest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;