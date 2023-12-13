// seeders/seed.js
const User = require('../models/user');
const Blogpost = require('../models/blogpost');
const Comment = require('../models/comment');

// Add seed data here

const seedData = async () => {
  // Create a user
  const user = await User.create({
    username: 'sampleuser',
    email: 'sample@example.com',
    password: 'password123',
    name: 'John Doe',
    bio: 'A blogger',
    profilePicture: 'profile.jpg',
  });

  // Create a blog post
  const blogpost = await Blogpost.create({
    title: 'Sample Blog Post',
    content: 'This is the content of the blog post.',
    author: user._id,
  });

  // Create a comment
  await Comment.create({
    user: user._id,
    text: 'Great post!',
    blogPost: blogpost._id,
  });

  console.log('Seed data added successfully');
};

seedData();
