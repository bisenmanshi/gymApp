// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     const storedValue = localStorage.getItem('isLoggedIn');
//     console.log("Stored Value in useEffect: ", storedValue);
//     return storedValue === 'true';
//   });

//   const login = () => {
//     setIsLoggedIn(true);
//     localStorage.setItem('isLoggedIn', 'true');
//   };

//   const logout = () => {
//     setIsLoggedIn(false);
//     localStorage.setItem('isLoggedIn', 'false');
//   };

//   useEffect(() => {
//     const storedValue = localStorage.getItem('isLoggedIn');
//     if (storedValue === 'true') {
//       setIsLoggedIn(true);
//     }
//     else {
//       setIsLoggedIn(false);
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount (e.g., check localStorage or make an API call)
    const checkAuthStatus = async () => {
      // Replace with your logic to check if the user is authenticated
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
