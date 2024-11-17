import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../../redux/actions/bookActions';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import './BookList.css';

const BookList = () => {
  const dispatch = useDispatch();
  const { books, error, loading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <Container className="book-list-container">
      <h2>Available Books</h2>
      <Link to="/add-book" className="btn btn-primary mb-3">
        Add New Book
      </Link>
      {loading && <Alert variant="info">Loading books...</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && books.length === 0 && (
        <Alert variant="warning">No books available.</Alert>
      )}
      <Row>
        {books.map((book) => (
          <Col key={book._id} md={4} className="mb-4">
            <BookItem book={book} onDelete={handleDelete} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
