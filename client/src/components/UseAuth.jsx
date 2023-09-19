import { useState, useEffect } from 'react';

export function UseAuth() {
  // Initialize isAuthenticated as false initially
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the user is authenticated based on the presence of a token in local storage
    const token = localStorage.getItem('token');

    if (token) {
      // You can add additional checks here to validate the token if needed
      // For example, check the token's expiration or perform other checks
      // If token is valid, set isAuthenticated to true
      setIsAuthenticated(true);
    }

    setIsLoading(false); // Set loading to false after checking authentication status
  }, []);

  return {
    isAuthenticated,
    isLoading,
  };
}
