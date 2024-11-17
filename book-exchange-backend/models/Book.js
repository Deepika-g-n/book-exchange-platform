const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
 
  
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
