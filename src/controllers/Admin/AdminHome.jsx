
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
// import { useAuth } from '../../Context/AuthContext'; // adjust the path as needed
import {
  FiChevronDown, FiHome, FiUsers, FiBox, FiClipboard,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { FcPackage } from "react-icons/fc";
// import toast from 'react-hot-toast';


const AdminHome = () => {
  // const { logout } = useAuth();
  // const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const handleLogout = () => {
  //   setLoading(true);
  //   toast.success('Logged out successfully' // Toast will stay for 1 second
  //   );
  //   setTimeout(() => {
  //     logout(); // Update authentication state
  //     setLoading(false);
  //     navigate('/login');
  //   }); // Simulating a delay for demonstration
  // };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? null : dropdown));
  };

  const menuItems = [
    {
      name: 'Home',
      icon: <FiHome className="h-6 w-6" />,
      link: '/adminIndex',
      dropdown: false,
    },
    {
      name: 'Enquiry',
      icon: <FiClipboard className="h-6 w-6" />,
      dropdown: true,
      items: [
        { name: 'Add Enquiry', link: '/adminIndex/addEnquiry' },
        { name: 'Manage Enquiry', link: '/adminIndex/manageEnquiry' },
        
      ],
    },
    {
      name: 'Equipment',
      icon: <FiBox className="h-6 w-6" />,
      dropdown: true,
      items: [
        { name: 'Add Equipment', link: '/adminIndex/addEquipment' },
        { name: 'Manage Equipment', link: '/adminIndex/manageEquipment' },
        
      ],
    },
    {
      name: 'Members',
      icon: <FiUsers className="h-6 w-6" />,
      dropdown: true,
      items: [
        { name: 'Add Member', link: '/adminIndex/addMember' },
        { name: 'Manage Member', link: '/adminIndex/manageMember' },
       
      ],
    },
    {
      name: 'Plans',
      icon: <FiChevronDown className="h-6 w-6" />,
      dropdown: true,
      items: [
        { name: 'Add Plan', link: '/adminIndex/addPlan' },
       
       
      ],
    },
    {
      name: 'Trainer',
      icon: <FiBox className="h-6 w-6" />,
      dropdown: true,
      items: [
        { name: 'Add Trainer', link: '/adminIndex/addTrainer'},
        
        
      ],
    },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 h-full fixed inset-y-0 left-0 py-7 px-2">
      <div className="mb-20 text-center">
        <h1 className="text-lg font-extrabold text-slate-300">Gym Management System</h1>
      </div>
      {menuItems.map((item) => (
        <div key={item.name} className="relative mb-2">
          {item.dropdown ? (
            <>
              <button onClick={() => toggleDropdown(item.name)} className="text-white flex items-center justify-between w-full px-4 py-4 hover:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
                <FiChevronDown className={`h-6 w-6 transform transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-1 bg-gray-800 rounded-md shadow-lg w-full z-10 overflow-hidden"
                  >
                    {item.items.map((subItem) => (
                      <Link to={subItem.link} key={subItem.name} className="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <Link to={item.link} className="text-white flex items-center space-x-2 px-4 py-4 hover:bg-gray-700 rounded-lg">
              {item.icon}
              <span>{item.name}</span>
            </Link>
          )}
        </div>
      ))}
      {/* <button onClick={handleLogout} className="text-white flex items-center space-x-2 px-4 py-4 hover:bg-gray-700 rounded-lg w-full">
        {loading ? (
          <ClipLoader color="#ffffff" size={24} />
        ) : (
          <FiLogOut className="h-6 w-6" />
        )}
        <span>Logout</span>
      </button> */}
    </div>
  );
};

export default AdminHome;
