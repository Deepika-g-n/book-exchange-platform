const express = require('express');
const { addBook, getBooks, updateBook,deleteBook,searchBooks } = require('../controllers/bookController');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/',auth, addBook);
router.get('/',auth, getBooks);
router.put('/:id',auth, updateBook);
router.delete('/:id',auth, deleteBook);
router.get('/search', auth, searchBooks);

module.exports = router;
