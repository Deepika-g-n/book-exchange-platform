import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BookItem.css';
// import SendExchangeRequest from '../Exchanges/SendExchangeRequest';

const BookItem = ({ book, onDelete }) => {
  // const recipientId = book.owner._id;
  return (
    <Card className="book-item">
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
        <Button variant="danger" onClick={() => onDelete(book._id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
