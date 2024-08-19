// import React from 'react';
// import { useAuth } from '../Context/AuthContext'; // adjust the path as needed
// import { NavLink } from "react-router-dom";
// import logo from "../img/logo.png";
// import { toast } from "react-hot-toast";

// const Navbar = () => {
//   const { isLoggedIn } = useAuth();

//   if (isLoggedIn) return null;

//   return (
//     <div className="bg-gray-800">
//       <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src={logo} alt="logo" width={160} height={32} className="h-9" />
//           </div>
//         </NavLink>
//        <nav>
//           <ul className="text-gray-200 flex font-medium text-1xl gap-x-6">
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact Us</NavLink>
//             </li>
//           </ul>
//         </nav>
//         <div>
//           {!isLoggedIn && (
//             <NavLink to="/login">
//               <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
//                 Login
//               </button>
//             </NavLink>
//           )}
//           {/* {isLoggedIn && (
//             <button
//               onClick={() => {
//                 // logout();
//                 setIsLoggedIn(false);
//                 toast.success("Logged Out!");
//               }}
//               className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700"
//             >
//               Log Out
//             </button>
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { useAuth } from '../Context/AuthContext'; // adjust the path as needed
// import { NavLink } from "react-router-dom";
// import logo from "../img/logo.png";
// import { toast } from "react-hot-toast";

// const Navbar = () => {
//   const { isLoggedIn, logout } = useAuth();

//   return (
//     <div className="bg-gray-800">
//       <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
//         <NavLink to="/">
//           <div className="ml-5">
//             <img src={logo} alt="logo" width={160} height={32} className="h-9" />
//           </div>
//         </NavLink>
//         <nav>
//           <ul className="text-gray-200 flex font-medium text-1xl gap-x-6">
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About Us</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact Us</NavLink>
//             </li>
           
//           </ul>
//         </nav>
//         <div>
//         {!isLoggedIn && (
//             <NavLink to="/login">
//               <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
//                 Login
//               </button>
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { useAuth } from '../Context/AuthContext'; // adjust the path as needed
import { NavLink } from "react-router-dom";
import logo from "../img/blog/kindpng_2676215.png";

const Navbar = () => {
  const { isLoggedIn, loading } = useAuth();

  return (
    <div className="bg-gray-800">
      <div className="flex flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <NavLink to="/">
          <div>
            <img src={logo} alt="logo" className="h-10 w-28 object-cover" />
          </div>
        </NavLink>
        <nav>
          <ul className="text-gray-200 flex font-medium text-1xl gap-x-6">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          {!loading && !isLoggedIn && (
            <NavLink to="/login">
              <button className="bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
