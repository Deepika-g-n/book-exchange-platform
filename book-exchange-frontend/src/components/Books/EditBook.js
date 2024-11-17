import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editBook } from '../../redux/actions/bookActions';
import { Form, Button, Container } from 'react-bootstrap';
import './BookList.css';

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.books.find((book) => book._id === id));

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setGenre(book.genre);
      setCondition(book.condition);
      setAvailability(book.availability);
    }
  }, [book]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook(id, { title, author, genre, condition, availability }));
    navigate('/profile');
  };

  return (
    <Container className="edit-book-container">
      <h2>Edit Book</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="condition">
          <Form.Label>Condition</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter condition"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="availability">
          <Form.Label>Availability</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditBook;
