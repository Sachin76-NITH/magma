import React from 'react';
import '../styles/blog.scss';
import founder1 from '../assests/fff1.jpeg'; // Replace with the actual import path
import founder2 from '../assests/fff2.png'; 
import founder3 from '../assests/F3.png'; 
import founder4 from '../assests/f6.png'; 
import founder5 from '../assests/F7.jpeg'; 
const Blog = () => {
  // Define an array of founder objects with their information
  const founders = [
    {
      name: 'SACHIN',
      position: 'Founder',
      description: 'ECE STUDENT, WEB DEVELOPER, PROBLEM SOLVER',
      imageUrl: founder1, // Replace with the actual image URL
    },
    {
      name: 'YUGAL KISHORE',
      position: 'Co-Founder',
      description: 'CSE STUDENT, GAME AND WEB DEVELOPER',
      imageUrl: founder2, // Replace with the actual image URL
    },

    {
      name: 'GOVIND GUPTA',
      position: 'Co-Founder',
      description: 'MNC STUDENT , FRONT-END WEB DEVELOPER',
      imageUrl: founder3, // Replace with the actual image URL
    },

    {
      name: 'SHRIYANSHU KUKRETI',
      position: 'Co-Founder',
      description: 'CSE STUDENT, GAME DEVELOPER',
      imageUrl: founder4, // Replace with the actual image URL
    },

    {
      name: 'HARSH BANSAL',
      position: 'Co-Founder',
      description: 'CSE STUDENT , APP DEVELOPER',
      imageUrl: founder5, // Replace with the actual image URL
    },
    // Add more founders as needed
  ];

  return (
    <div className="founders-page">
      <h2>Our Founders</h2>
      <div className="founders-list">
        {founders.map((founder, index) => (
          <div key={index} className="founder-card">
            <img src={founder.imageUrl} alt={founder.name} />
            <h3>{founder.name}</h3>
            <p>{founder.position}</p>
            <p>{founder.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
