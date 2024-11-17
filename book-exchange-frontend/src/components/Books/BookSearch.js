import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchBooks } from '../../redux/actions/searchActions';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import './BookSearch.css';

const BookSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [availability, setAvailability] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.search.books);
 const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchBooks({ searchTerm, genre, availability, page: currentPage, limit: booksPerPage }));
    }
  }, [dispatch, searchTerm, genre, availability, currentPage, booksPerPage]);


  const handleSearch = (e) => {
    e.preventDefault();
    // Dispatch the search action with the current search criteria
    dispatch(searchBooks({ searchTerm, genre, availability }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <Container className="book-search-container">
      <h2>Search Books</h2>
      <Form className="search-bar" onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search books by title, author, genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          
        />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
      <div className="filters">
        <Form.Control
          as="select"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="">Select Genre</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Fantasy">Fantasy</option>
        </Form.Control>
        <Form.Control
          as="select"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Select Availability</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </Form.Control>
      </div>
      <Row>
        {currentBooks.length === 0 ? (
          <div className="no-results">No books found.</div>
        ) : (
          currentBooks.map((book) => (
            <Col key={book._id} md={4} className="mb-4">
              <Card className="book-card">
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <strong>Author:</strong> {book.author}
                    <br />
                    <strong>Genre:</strong> {book.genre}
                    <br />
                    <strong>Condition:</strong> {book.condition}
                    <br />
                    <strong>Availability:</strong> {book.availability}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <div className="pagination">
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, i) => (
          <Button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default BookSearch;
