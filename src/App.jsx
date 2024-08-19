// import { Routes, Route,Navigate} from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import Navbar from "./controllers/Navbar";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import Login from "./Pages/Login";
// import AdminIndex from './controllers/Admin/AdminIndex'
// import { AuthProvider } from './Context/AuthContext'; // adjust the path as needed
// import AddEnquiry from "./controllers/Admin/AddEnquiry";
// import AddEquipment from "./controllers/Admin/AddEquipment";
// import AddMember from "./controllers/Admin/AddMember";
// import AddPlan from "./controllers/Admin/AddPlan";
// import ManageEnquiry from "./controllers/Admin/ManageEnquiry";
// import ManageEquipment from "./controllers/Admin/ManageEquipment";
// import ManageMember from "./controllers/Admin/ManageMember";
// import ManagePlan from "./controllers/Admin/ManagePlan";
// function App() {
 
//   return (
//     <AuthProvider>
//       <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-x-hidden">
//          <Navbar /> 
        
//         <Routes>
//           <Route path="/adminIndex" element={<AdminIndex />} />
//           <Route path="/adminIndex/addEnquiry" element={<AddEnquiry />} />
//           <Route path="/adminIndex/manageEnquiry" element={<ManageEnquiry />} />
//           <Route path="/adminIndex/addEquipment" element={<AddEquipment />} />
//           <Route path="/adminIndex/manageEquipment" element={<ManageEquipment />} />
//           <Route path="/adminIndex/addPlan" element={<AddPlan />} />
//           <Route path="/adminIndex/managePlan" element={<ManagePlan />} />
//           <Route path="/adminIndex/addMember" element={<AddMember />} />
//           <Route path="/adminIndex/manageMember" element={<ManageMember />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;
// import { Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
// import Home from "./Pages/Home";
// import Navbar from "./controllers/Navbar";
// import Contact from "./Pages/Contact";
// import About from "./Pages/About";
// import Login from "./Pages/Login";
// import AdminIndex from './controllers/Admin/AdminIndex'
// import { AuthProvider, useAuth } from './Context/AuthContext'; // adjust the path as needed
// import AddEnquiry from "./controllers/Admin/AddEnquiry";
// import AddEquipment from "./controllers/Admin/AddEquipment";
// import AddMember from "./controllers/Admin/AddMember";
// import AddPlan from "./controllers/Admin/AddPlan";
// import ManageEnquiry from "./controllers/Admin/ManageEnquiry";
// import ManageEquipment from "./controllers/Admin/ManageEquipment";
// import ManageMember from "./controllers/Admin/ManageMember";
// import ManagePlan from "./controllers/Admin/ManagePlan";
// import { TakeAttendance } from "./controllers/Admin/ManageMember";
// import { ViewAttendance } from "./controllers/Admin/ManageMember";
// import EditEnquiry from "./controllers/Admin/EditEnquiry";
// import EditEquipment from "./controllers/Admin/EditEquipment";
// import EditMember from "./controllers/Admin/EditMember";
// import EditPlan from "./controllers/Admin/EditPlan";
// function App() {
//   return (
//     <AuthProvider>
//       <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-x-hidden">
        
//         <Routes>
//           <Route path="/" element={<HomeWithNavbar />} />
//           <Route path="/about" element={<AboutWithNavbar />} />
//           <Route path="/contact" element={<ContactWithNavbar />} />
//           <Route path="/login" element={<LoginWithNavbar />} />

//           <Route path="/adminIndex" element={<ProtectedRoute><AdminIndex /></ProtectedRoute>} />
//           <Route path="/adminIndex/addEnquiry" element={<ProtectedRoute><AddEnquiry /></ProtectedRoute>} />
//           <Route path="/adminIndex/manageEnquiry" element={<ProtectedRoute><ManageEnquiry /></ProtectedRoute>} />
//           <Route path="/adminIndex/addEquipment" element={<ProtectedRoute><AddEquipment /></ProtectedRoute>} />
//           <Route path="/adminIndex/manageEquipment" element={<ProtectedRoute><ManageEquipment /></ProtectedRoute>} />
//           <Route path="/adminIndex/addPlan" element={<ProtectedRoute><AddPlan /></ProtectedRoute>} />
//           <Route path="/adminIndex/managePlan" element={<ProtectedRoute><ManagePlan /></ProtectedRoute>} />
//           <Route path="/adminIndex/addMember" element={<ProtectedRoute><AddMember /></ProtectedRoute>} />
//           <Route path="/adminIndex/manageMember" element={<ProtectedRoute><ManageMember /></ProtectedRoute>} />
//           <Route path="/take-attendance" element={<ProtectedRoute><TakeAttendance /></ProtectedRoute>} />
//           <Route path="/view-attendance" element={<ProtectedRoute><ViewAttendance /></ProtectedRoute>} />
//           <Route path="/adminIndex/editenquiry" element={<ProtectedRoute><EditEnquiry/></ProtectedRoute>}/>
//           <Route path="/adminIndex/editequipment" element={<ProtectedRoute><EditEquipment/></ProtectedRoute>}/>
//           <Route path="/adminIndex/editmember" element={<ProtectedRoute><EditMember/></ProtectedRoute>}/>
//           <Route path="/adminIndex/editplan" element={<ProtectedRoute><EditPlan/></ProtectedRoute>}/>
//         </Routes>
//       </div>
//     </AuthProvider>
//   );
// }

// const ProtectedRoute = ({ children }) => {
//   const { isLoggedIn } = useAuth();
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };

// const HomeWithNavbar = () => (
//   <>
//     <Navbar />
//     <Home />
//   </>
// );

// const AboutWithNavbar = () => (
//   <>
//     <Navbar />
//     <About />
//   </>
// );

// const ContactWithNavbar = () => (
//   <>
//     <Navbar />
//     <Contact />
//   </>
// );

// const LoginWithNavbar = () => (
//   <>
//     <Navbar />
//     <Login />
//   </>
// );

// export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./controllers/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import AdminIndex from './controllers/Admin/AdminIndex'
import { AuthProvider, useAuth } from './Context/AuthContext'; // adjust the path as needed
import AddEnquiry from "./controllers/Admin/AddEnquiry";
import AddEquipment from "./controllers/Admin/AddEquipment";
import AddMember from "./controllers/Admin/AddMember";
import AddPlan from "./controllers/Admin/AddPlan";
import ManageEnquiry from "./controllers/Admin/ManageEnquiry";
import ManageEquipment from "./controllers/Admin/ManageEquipment";
import ManageMember from "./controllers/Admin/ManageMember";

import { TakeAttendance } from "./controllers/Admin/ManageMember";
import { ViewAttendance } from "./controllers/Admin/ManageMember";
import EditEnquiry from "./controllers/Admin/EditEnquiry";
import EditEquipment from "./controllers/Admin/EditEquipment";
import EditMember from "./controllers/Admin/EditMember";
import EditPlan from "./controllers/Admin/EditPlan";
function App() {
  
  return (
   
    <AuthProvider>
      <div className="w-screen h-screen bg-gray-900 flex flex-col overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomeWithNavbar />} />
          <Route path="/about" element={<AboutWithNavbar />} />
          <Route path="/contact" element={<ContactWithNavbar />} />
          <Route path="/login" element={<LoginWithNavbar />} />
          <Route path="/adminIndex" element={<ProtectedRoute><AdminIndex /></ProtectedRoute>} />
          <Route path="/adminIndex/addEnquiry" element={<ProtectedRoute><AddEnquiry /></ProtectedRoute>} />
          <Route path="/adminIndex/manageEnquiry" element={<ProtectedRoute><ManageEnquiry /></ProtectedRoute>} />
          <Route path="/adminIndex/addEquipment" element={<ProtectedRoute><AddEquipment /></ProtectedRoute>} />
          <Route path="/adminIndex/manageEquipment" element={<ProtectedRoute><ManageEquipment /></ProtectedRoute>} />
          <Route path="/adminIndex/addPlan" element={<ProtectedRoute><AddPlan /></ProtectedRoute>} />
          
          <Route path="/adminIndex/addMember" element={<ProtectedRoute><AddMember /></ProtectedRoute>} />
          <Route path="/adminIndex/manageMember" element={<ProtectedRoute><ManageMember /></ProtectedRoute>} />
          <Route path="/take-attendance" element={<ProtectedRoute><TakeAttendance /></ProtectedRoute>} />
          <Route path="/view-attendance" element={<ProtectedRoute><ViewAttendance /></ProtectedRoute>} />
          <Route path="/adminIndex/editenquiry" element={<ProtectedRoute><EditEnquiry /></ProtectedRoute>}/>
          <Route path="/adminIndex/editequipment" element={<ProtectedRoute><EditEquipment /></ProtectedRoute>}/>
          <Route path="/adminIndex/editmember" element={<ProtectedRoute><EditMember /></ProtectedRoute>}/>
          <Route path="/adminIndex/editplan" element={<ProtectedRoute><EditPlan /></ProtectedRoute>}/>
        </Routes>
      </div>
    </AuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const HomeWithNavbar = () => (
  <>
    <Navbar />
    <Home />
  </>
);

const AboutWithNavbar = () => (
  <>
    <Navbar />
    <About />
  </>
);

const ContactWithNavbar = () => (
  <>
    <Navbar />
    <Contact />
  </>
);

const LoginWithNavbar = () => (
  
  <>
  
    <Navbar />
    <Login />
  </>
);

export default App;
