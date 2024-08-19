
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// const EditEnquiry = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [editEnquiryId, setEditEnquiryId] = useState(null);
//   const [newData, setNewData] = useState({
//     FirstName: '',
//     LastName: '',
//     contact: '',
//     email: '',
//     age: '',
//     gender: ''
//   });

//   useEffect(() => {
//     fetchEnquiries();
//   }, []);

//   const fetchEnquiries = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getEnquiry');
//       setEnquiries(response.data.result); // Assuming backend returns 'result' array
//     } catch (error) {
//       console.error('Error fetching enquiries', error);
//       setEnquiries([]);
//     }
//   };

//   const handleEdit = (enquiry) => {
//     setEditEnquiryId(enquiry.EnquiryId);
//     setNewData({
//       FirstName: enquiry.FirstName,
//       LastName: enquiry.LastName,
//       contact: enquiry.contact,
//       email: enquiry.email,
//       age: enquiry.age,
//       gender: enquiry.gender
//     });
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updateEnquiry/${id}`, newData);
//       fetchEnquiries(); // Refresh the enquiries after update
//       setEditEnquiryId(null); // Clear edit mode
//     } catch (error) {
//       console.error('Error updating enquiry', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteEnquiry/${id}`);
//       fetchEnquiries(); // Refresh the enquiries after delete
//     } catch (error) {
//       console.error('Error deleting enquiry', error);
//     }
//   };

//   return (
//     <div className='text-white flex h-screen'>
//       <div className="flex-none w-64">
//           <AdminHome />
//       </div>
//       <div className='ml-40 flex flex-col'>
//       <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Enquiries</h2>
//       <table className="w-full bg-gray-700 shadow-md rounded-lg">
//         <thead>
//           <tr className='text-2xl border border-slate-600 px-4 py-2'>
//             <th className="w-32">First Name</th>
//             <th className="w-32">Last Name</th>
//             <th className="w-32">Contact</th>
//             <th className="w-40">Email</th>
//             <th className="w-20">Age</th>
//             <th className="w-20">Gender</th>
//             <th className="w-32">Actions</th>
//           </tr>
//         </thead>
//         <tbody className='text-xl text-center'>
//           {enquiries.length > 0 ? (
//             enquiries.map(enquiry => (
//               <tr key={enquiry.EnquiryId}>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.FirstName}
//                       onChange={(e) => setNewData({ ...newData, FirstName: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.FirstName
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.LastName}
//                       onChange={(e) => setNewData({ ...newData, LastName: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.LastName
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.contact}
//                       onChange={(e) => setNewData({ ...newData, contact: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.contact
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.email}
//                       onChange={(e) => setNewData({ ...newData, email: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.email
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-20">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.age}
//                       onChange={(e) => setNewData({ ...newData, age: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.age
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-20">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <input
//                       type="text"
//                       value={newData.gender}
//                       onChange={(e) => setNewData({ ...newData, gender: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     enquiry.gender
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEnquiryId === enquiry.EnquiryId ? (
//                     <button onClick={() => handleUpdate(enquiry.EnquiryId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(enquiry)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                       <button onClick={() => handleDelete(enquiry.EnquiryId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center py-4">No enquiries found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
   
//       </div>
//     </div>
//   );
// };

// export default EditEnquiry;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const EditEnquiry = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [editEnquiryId, setEditEnquiryId] = useState(null);
  const [newData, setNewData] = useState({
    FirstName: '',
    LastName: '',
    contact: '',
    email: '',
    age: '',
    gender: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getEnquiry');
      setEnquiries(response.data.result); // Assuming backend returns 'result' array
    } catch (error) {
      console.error('Error fetching enquiries', error);
      setEnquiries([]);
    }
  };

  const handleEdit = (enquiry) => {
    setEditEnquiryId(enquiry.EnquiryId);
    setNewData({
      FirstName: enquiry.FirstName,
      LastName: enquiry.LastName,
      contact: enquiry.contact,
      email: enquiry.email,
      age: enquiry.age,
      gender: enquiry.gender
    });
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8081/updateEnquiry/${id}`, newData);
      // Assuming your backend updates successfully, update state locally
      const updatedEnquiries = enquiries.map(enquiry =>
        enquiry.EnquiryId === id ? { ...enquiry, ...newData } : enquiry
      );
      setEnquiries(updatedEnquiries);
      setEditEnquiryId(null); // Clear edit mode
    } catch (error) {
      console.error('Error updating enquiry', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deleteEnquiry/${id}`);
      const updatedEnquiries = enquiries.filter(enquiry => enquiry.EnquiryId !== id);
      setEnquiries(updatedEnquiries);
    } catch (error) {
      console.error('Error deleting enquiry', error);
    }
  };

  const indexOfLastEnquiry = currentPage * perPage;
  const indexOfFirstEnquiry = indexOfLastEnquiry - perPage;
  const currentEnquiries = enquiries.slice(indexOfFirstEnquiry, indexOfLastEnquiry);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='text-white flex h-screen'>
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar/>
      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Enquiries</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
            <thead className="bg-gray-800 text-white border border-slate-700">
              <tr className='text-lg'>
                <th className="w-32 border border-slate-700">First Name</th>
                <th className="w-32 border border-slate-700">Last Name</th>
                <th className="w-32 border border-slate-700">Contact</th>
                <th className="w-32 border border-slate-700">Email</th>
                <th className="w-32 border border-slate-700">Age</th>
                <th className="w-32 border border-slate-700">Gender</th>
                <th className="w-32 border border-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
              {currentEnquiries.length > 0 ? (
                currentEnquiries.map(enquiry => (
                  <tr key={enquiry.EnquiryId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.FirstName}
                        onChange={(e) => setNewData({ ...newData, FirstName: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.FirstName
                    )}</td>
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.LastName}
                        onChange={(e) => setNewData({ ...newData, LastName: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.LastName
                    )}</td>
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.contact}
                        onChange={(e) => setNewData({ ...newData, contact: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.contact
                    )}</td>
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.email}
                        onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.email
                    )}</td>
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.age}
                        onChange={(e) => setNewData({ ...newData, age: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.age
                    )}</td>
                    <td className="py-2 px-4 border border-slate-700">{editEnquiryId === enquiry.EnquiryId ? (
                      <input
                        type="text"
                        value={newData.gender}
                        onChange={(e) => setNewData({ ...newData, gender: e.target.value })}
                        className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                      />
                    ) : (
                      enquiry.gender
                    )}</td>
                    <td className="w-64 border border-slate-700">
                      {editEnquiryId === enquiry.EnquiryId ? (
                        <button onClick={() => handleUpdate(enquiry.EnquiryId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(enquiry)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                          <button onClick={() => handleDelete(enquiry.EnquiryId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">No enquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentEnquiries.length < perPage}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Next
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default EditEnquiry;
