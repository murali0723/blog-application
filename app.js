// app.js
const express = require('express');
const db = require('./config/db');
const User = require('./models/user');
const Blogpost = require('./models/blogpost');
const Comment = require('./models/comment');

const app = express();

// Initialize database connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example routes
app.get('/', async (req, res) => {
  const users = await User.find();
  const blogposts = await Blogpost.find().populate('author');
  const comments = await Comment.find().populate('user blogpost');

  res.json({ users, blogposts, comments });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
