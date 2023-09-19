const Book = require('../models/book');
const User=require("../models/UserModel")



// Controller function to add a new book
exports.addBook = async (req, res) => {
  try {
    // Extract book data from the request body
    const { title, author, ISBN ,email} = req.body;

    // Check if a book with the same ISBN already exists
    const existingBook = await Book.findOne({ ISBN });

    if (existingBook) {
      return res.status(400).json({ error: 'A book with the same ISBN already exists.' });
    }

    // Create a new book instance
    const newBook = new Book({ title, author, ISBN,email });
    console.log(newBook);

    // Save the new book to the database
    await newBook.save();

    // Return the newly added book as a response
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding book:', error);
    res.status(500).json({ error: 'An error occurred while adding the book.' });
  }
};



// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ error: 'An error occurred while fetching books.' });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  const { _id } = req.params;
  const updatedBook = req.body;

  try {
    const book = await Book.findByIdAndUpdate(_id, updatedBook, { new: true });
    res.json(book);
  } catch (error) {
    console.error('Error updating book:', error);
    res.status(500).json({ error: 'An error occurred while updating the book.' });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const { _id } = req.params;
  

  try {
    await Book.findByIdAndRemove(_id);
    res.json({ message: 'Book deleted successfully.' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'An error occurred while deleting the book.' });
  }
};



