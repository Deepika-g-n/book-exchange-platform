import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/actions/bookActions';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './BookList.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [condition, setCondition] = useState('');
  const [availability, setAvailability] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ title, author, genre, condition, availability }));
    setTitle('');
    setAuthor('');
    setGenre('');
    setCondition('');
    setAvailability('');
    navigate('/profile');
  };

  return (
    <Container className="add-book-container">
      <h2>Add a New Book</h2>
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
          Add Book
        </Button>
      </Form>
    </Container>
  );
};

export default AddBook;
