Book Exchange Platform
A full-stack web application that connects book enthusiasts to exchange books seamlessly. Users can list their books, search for books, and initiate exchanges with others.

Features
User Authentication: Secure login, registration, and password reset functionality.
Book Management: Add, edit, and delete books to exchange.
Advanced Search: Search books by title, author, genre, or availability.
Responsive UI: Mobile-friendly design for seamless use across devices.

Tech Stack
Frontend
React.js: Component-based user interface.
Redux: State management.
Bootstrap: Responsive design framework.
Backend
Node.js: JavaScript runtime for the server.
Express.js: Lightweight web framework.
MongoDB: Database for user and book data.
JWT: Authentication using JSON Web Tokens.

Installation
Prerequisites
Node.js installed.
MongoDB installed locally or access to a cloud instance.
Git installed.

1. Clone the Repository
   
git clone https://github.com/your-username/book-exchange-platform.git
cd book-exchange-platform

2. Backend Setup
Navigate to the backend directory:

cd book-exchange-backend
Install dependencies:
npm install
Create a .env file in the backend directory:
MONGO_URI=mongodb://localhost:27017
JWT_SECRET=your_jwt_secret
Start the server:
npm start
The backend server runs at http://localhost:5000.

3. Frontend Setup
Navigate to the frontend directory:
cd book-exchange-frontend
Install dependencies:
npm install
Start the development server:
npm start
The frontend server runs at http://localhost:3000.

API Endpoints
Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.

Books
GET /api/books: Retrieve a list of all books.
POST /api/books: Add a new book to the list.
PUT /api/books/:id: Update a book's details.
DELETE /api/books/:id: Remove a book.
