import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './UseAuth';
import { getGlobalEmail } from '../Global/global';

import '../styles/viewbook.scss'; // Import your CSS file

function Viewbook() {
  const { isAuthenticated } = UseAuth();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    // Fetch data from your API endpoint using Axios
    axios.get("http://localhost:3002/view") // Replace with your actual API endpoint
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (book) => {
    // Set the book to be edited
    setEditingBook(book);
  };

  const handleDeleteClick = (book) => {
    if(book.email != getGlobalEmail()) return;
    const confirmDelete = window.confirm(`Are you sure you want to delete "${book.title}"?`);

    if (confirmDelete) {
      // Send a DELETE request to your API to delete the book
            
  

      axios.delete(`http://localhost:3002/view/${book._id}`) // Replace with your delete endpoint
        .then(() => {
          // Remove the book from the state
          setBooks((prevBooks) => prevBooks.filter((b) => b._id !== book._id));
        })
        .catch((error) => {
          console.error('Error deleting book:', error);
        });
    }
  };

  const handleCancelEdit = () => {
    // Clear the editingBook state to cancel editing
    setEditingBook(null);
  };

  const handleSaveEdit = (editedBook) => {
    // Send a PUT request to your API to update the book
    if(editedBook.email != getGlobalEmail()) return;
    axios.put(`http://localhost:3002/view/${editedBook._id}`, editedBook) // Replace with your update endpoint
      .then(() => {
        // Update the book in the state
        setBooks((prevBooks) =>
          prevBooks.map((book) => (book._id === editedBook._id ? editedBook : book))
        );
        // Clear the editingBook state
        setEditingBook(null);
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };
  if (!isAuthenticated) {
    return  navigate("/Login");
   }
   else{

  return (
    <div className="view-book-container">
      <h2>View Books</h2>
      <table className="book-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>
                {editingBook && editingBook._id === book._id ? (
                  <input
                    type="text"
                    value={editingBook.title}
                    onChange={(e) =>
                      setEditingBook({ ...editingBook, title: e.target.value })
                    }
                  />
                ) : (
                  book.title
                )}
              </td>
              <td>
                {editingBook && editingBook._id === book._id ? (
                  <input
                    type="text"
                    value={editingBook.author}
                    onChange={(e) =>
                      setEditingBook({ ...editingBook, author: e.target.value })
                    }
                  />
                ) : (
                  book.author
                )}
              </td>
              <td>{book.ISBN}</td>
              <td>
                {editingBook && editingBook._id === book._id ? (
                  <>
                    <button onClick={() => handleSaveEdit(editingBook)} className="save-button">Save</button>
                    <button onClick={handleCancelEdit} className="cancel-button">Cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditClick(book)} className="edit-button">Edit</button>
                    <button onClick={() => handleDeleteClick(book)} className="delete-button">Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}}

export default Viewbook;
