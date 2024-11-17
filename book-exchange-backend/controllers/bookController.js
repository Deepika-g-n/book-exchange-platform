
const Book = require('../models/Book');

// Add a book
exports.addBook = async (req, res) => {
  const { title, author, genre, condition, availability } = req.body;
  try {
    const newBook = new Book({
      user: req.user.id,
      title,
      author,
      genre,
      condition,
      availability,
    });

    const book = await newBook.save();
    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all books
exports.getBooks = async (req, res) => {
  try {
    if (req.user) {
      const books = await Book.find({ user: req.user.id });
      res.json(books);
    } else {

      res.send([])
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Edit a book
exports.updateBook = async (req, res) => {
  const { title, author, genre, condition, availability } = req.body;

  try {
    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    // Make sure user owns the book
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    book = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: { title, author, genre, condition, availability } },
      { new: true }
    );

    res.json(book);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }

    // Make sure user owns the book
    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Book.findByIdAndDelete(req.params.id);

    res.json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

//Search a book
exports.searchBooks = async (req, res) => {
  const { searchTerm, genre, availability, page = 1, limit = 10 } = req.query.query;
  const query = {};
  
  if (searchTerm){
    query.$or = [
      { title: { $regex: searchTerm, $options: 'i' } }, 
      { author: { $regex: searchTerm, $options: 'i' } }  
    ];  } 
  if (genre) query.genre = { $regex: genre, $options: 'i' };
  
  if (availability) query.availability = availability ; 
  
  try {
    const books = await Book.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    
    const totalBooks = await Book.countDocuments(query);
    res.json({
      books,
      totalBooks,
      totalPages: Math.ceil(totalBooks / limit),
      currentPage: parseInt(page),
    });
  } catch (err) {
    console.error('Error:', err.message);  
    res.status(500).send('Server error');
  }
};



