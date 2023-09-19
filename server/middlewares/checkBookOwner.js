const Book = require('../models/book');

// Create an authorization middleware function
const checkBookOwner = async (req, res, next) => {
    const { user } = req; // Get the user object from the authenticated request
  
    try {
      // Find the book by ID
      const book = await Book.findById(req.params._id);
  
      // Check if the book owner (user ID associated with the book) matches the authenticated user's ID
      if (!book || !book.userId || book.userId.toString() !== user.id) {
        return res.status(403).json({ error: 'Unauthorized. You can only update your own books.' });
      }
  
      // If the user is the book owner, allow the update request to proceed
      next();
    } catch (error) {
      console.error('Error checking book ownership:', error);
      res.status(500).json({ error: 'An error occurred while checking book ownership.' });
    }
  };
  
  // Export the middleware function
  module.exports = { checkBookOwner };
  