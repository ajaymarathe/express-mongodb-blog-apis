const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Add Comment
router.post('/', async (req, res) => {
  const { postId, authorId, content } = req.body;
  try {
    const comment = new Comment({ postId, authorId, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
});

module.exports = router;
