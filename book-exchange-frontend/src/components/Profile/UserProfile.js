import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, deleteBook } from '../../redux/actions/bookActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <Container className="user-profile-container">
      <h2>My Profile</h2>
      <Row>
        {books.map((book) => (
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
                <Link to={`/edit-book/${book._id}`} className="btn btn-primary m-2">
                  Edit
                </Link>
                <Button variant="danger" onClick={() => handleDelete(book._id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserProfile;
