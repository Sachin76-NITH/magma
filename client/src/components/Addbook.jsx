import React, { useState } from 'react';
import axios from 'axios';
import '../styles/addbook.scss'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseAuth } from './UseAuth';
import { getGlobalEmail } from '../Global/global';


function Addbook() {
  const { isAuthenticated } = UseAuth();
  
  const navigate = useNavigate();
  // const generateError=()=>  toast('Same Book', {
  //   position: 'bottom-right',
  // });

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      email: getGlobalEmail()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your API to add the book
      const response = await axios.post('http://localhost:3002/add-book', formData);

      // Handle success, clear the form, or redirect as needed
      console.log('Book added successfully:', response.data);
      setFormData({
        title: '',
        author: '',
        ISBN: '',
      });
      if (response.data.error) {
        // generateError(response.data.error);
      } else {
        navigate('/User');
      }
    }catch (error) {
       console.log("same book")
          console.error('Error adding book:', error);
          // generateError();
           toast("SAME BOOK")
         
        //   toast.error(error, {
        //     position:"bottom-right",
        // });
    }
  };
  if (!isAuthenticated) {
    return  navigate("/Login");
   }
   else{

  return (
    <div className="add-book-container">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ISBN">ISBN:</label>
          <input
            type="text"
            id="ISBN"
            name="ISBN"
            value={formData.ISBN}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="add-book-button">
          Add Book
        </button>
      </form>
      <ToastContainer position="bottom-right" />
    </div>
  );
}}

export default Addbook;
