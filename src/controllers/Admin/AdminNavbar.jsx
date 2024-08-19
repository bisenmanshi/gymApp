// AdminNavbar.js
import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext'; // adjust the path as needed
import adminlogo from '../../img/blog/kindpng_1106374.png'
import {FiLogOut} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const AdminNavbar = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    setLoading(true);
    toast.success('Logged out successfully' // Toast will stay for 1 second
    );
    setTimeout(() => {
      logout(); // Update authentication state
      setLoading(false);
      navigate('/login');
    }); // Simulating a delay for demonstration
  };
  return (
    <>
    <div className="fixed top-0 left-64 right-5 bg-slate-900 text-white p-4 flex justify-between shadow-2xl z-10">
      <div className="flex items-center">
        {/* <img src={adminlogo} alt="logo" className="h-10 w-10 mr-4" /> */}
        <span className="text-lg">Admin</span>
      </div>
      <button onClick={handleLogout} className="text-red-500 flex items-center space-x-2 px-4 py-4 hover:bg-gray-700 rounded-lg">
        {loading ? (
          <ClipLoader color="#ffffff" size={24} />
        ) : (
          <FiLogOut className="h-6 w-6" />
        )}
        <span className='font-bold'>Logout</span>
      </button>
      </div>
      <div className="flex items-center mt-32 ">
      <div className="h-48 w-32 overflow-hidden ml-10 mr-6 items-center justify-center">
            <img src={adminlogo} alt="Profile" className="mt-8" />
          </div>
          <div>
            <span className="text-2xl font-semibold text-white">Hello Gymnast</span>
            <p className='text-slate-300 italic'>Welcome to your admin dashboard</p>
          </div>
          </div>  
      {/* Add other navbar items here if needed */}
    
    </>
  );
};

export default AdminNavbar;
