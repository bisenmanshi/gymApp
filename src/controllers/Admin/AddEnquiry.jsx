// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import AdminHome from './AdminHome';

// const AddEnquiry = () => {
//   const navigate = useNavigate();
//   const [enquiryData, setEnquiryData] = useState({
//     EnquiryId: '',
//     FirstName: '',
//     LastName: '',
//     contact: '',
//     email: '',
//     age: '',
//     gender: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEnquiryData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8081/addEnquiry', enquiryData);
//       toast.success('Enquiry added successfully');
//       // Reset form fields after successful submission
//       setEnquiryData({
//         EnquiryId: '',
//         FirstName: '',
//         LastName: '',
//         contact: '',
//         email: '',
//         age: '',
//         gender: ''
//       });
//     } catch (error) {
//       console.error('Error adding enquiry', error);
//       toast.error('Failed to add enquiry');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
//       <AdminHome/>
//       <div className="p-4">
//         <h1 className="text-center font-bold text-2xl">Add Enquiry</h1>
//         <form onSubmit={handleSubmit} className="mt-6">
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enquiryId">
//               Enquiry ID
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="enquiryId"
//               type="text"
//               name="EnquiryId"
//               value={enquiryData.EnquiryId}
//               onChange={handleChange}
//               placeholder="Enquiry ID"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//               First Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="firstName"
//               type="text"
//               name="FirstName"
//               value={enquiryData.FirstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
//               Last Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="lastName"
//               type="text"
//               name="LastName"
//               value={enquiryData.LastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
//               Contact Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="contact"
//               type="text"
//               name="contact"
//               value={enquiryData.contact}
//               onChange={handleChange}
//               placeholder="Contact Number"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               name="email"
//               value={enquiryData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
//               Age
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="age"
//               type="number"
//               name="age"
//               value={enquiryData.age}
//               onChange={handleChange}
//               placeholder="Age"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
//               Gender
//             </label>
//             <select
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="gender"
//               name="gender"
//               value={enquiryData.gender}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Back
//             </button>
//           </div>
//         </form>
//       </div>
    
//     </div>
//   );
// };

// export default AddEnquiry;
// import React, { useState } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';
// import AdminHome from './AdminHome';
// import AdminNavbar from './AdminNavbar';
// const AddEnquiry = () => {
//   const navigate = useNavigate();
//   const [enquiryData, setEnquiryData] = useState({
//     EnquiryId: '',
//     FirstName: '',
//     LastName: '',
//     contact: '',
//     email: '',
//     age: '',
//     gender: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEnquiryData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8081/addEnquiry', enquiryData);
//       toast.success('Enquiry added successfully');
//       // Reset form fields after successful submission
//       setEnquiryData({
//         EnquiryId: '',
//         FirstName: '',
//         LastName: '',
//         contact: '',
//         email: '',
//         age: '',
//         gender: ''
//       });
//     } catch (error) {
//       console.error('Error adding enquiry', error);
//       toast.error('Failed to add enquiry');
//     }
//   };

//   return (
//     <div className='text-white flex h-screen'>
//     <div className="flex-none w-64">
//       <AdminHome />
//     </div>
//     <div className="flex-1 flex flex-col">
//       <AdminNavbar/>
//       <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-10 w-full">
//         <h1 className="text-center text-black font-bold text-3xl mb-6">Add Enquiry</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enquiryId">
//               Enquiry ID
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="enquiryId"
//               type="text"
//               name="EnquiryId"
//               value={enquiryData.EnquiryId}
//               onChange={handleChange}
//               placeholder="Enquiry ID"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//               First Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="firstName"
//               type="text"
//               name="FirstName"
//               value={enquiryData.FirstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
//               Last Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="lastName"
//               type="text"
//               name="LastName"
//               value={enquiryData.LastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
//               Contact Number
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="contact"
//               type="text"
//               name="contact"
//               value={enquiryData.contact}
//               onChange={handleChange}
//               placeholder="Contact Number"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//               Email Address
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="email"
//               type="email"
//               name="email"
//               value={enquiryData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
//               Age
//             </label>
//             <input
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="age"
//               type="number"
//               name="age"
//               value={enquiryData.age}
//               onChange={handleChange}
//               placeholder="Age"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
//               Gender
//             </label>
//             <select
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               id="gender"
//               name="gender"
//               value={enquiryData.gender}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Back
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default AddEnquiry;
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';

const AddEnquiry = () => {
  const navigate = useNavigate();
  const [enquiryData, setEnquiryData] = useState({
    EnquiryId: '',
    FirstName: '',
    LastName: '',
    contact: '',
    email: '',
    age: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/addEnquiry', enquiryData);
      toast.success('Enquiry added successfully');
      // Reset form fields after successful submission
      setEnquiryData({
        EnquiryId: '',
        FirstName: '',
        LastName: '',
        contact: '',
        email: '',
        age: '',
        gender: ''
      });
    } catch (error) {
      console.error('Error adding enquiry', error);
      toast.error('Failed to add enquiry');
    }
  };

  return (
    <div className="text-white flex h-screen">
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className="p-6 max-w-6xl mx-auto bg-gray-100 shadow-lg rounded-lg my-10 w-full text-white">
          <h1 className="text-center font-bold text-black text-3xl mb-6">Add Enquiry</h1>
          <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg w-full">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enquiryId">
                Enquiry ID
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="enquiryId"
                type="text"
                name="EnquiryId"
                value={enquiryData.EnquiryId}
                onChange={handleChange}
                placeholder="Enquiry ID"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                name="FirstName"
                value={enquiryData.FirstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                name="LastName"
                value={enquiryData.LastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                name="contact"
                value={enquiryData.contact}
                onChange={handleChange}
                placeholder="Contact Number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                value={enquiryData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="age"
                type="number"
                name="age"
                value={enquiryData.age}
                onChange={handleChange}
                placeholder="Age"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="gender"
                name="gender"
                value={enquiryData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEnquiry;
