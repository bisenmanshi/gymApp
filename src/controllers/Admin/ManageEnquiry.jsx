
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import toast, { Toaster } from 'react-hot-toast';
// // import { debounce } from 'lodash';
// // import AdminHome from './AdminHome'; // Adjust the path as needed
// // import { FiAlignJustify } from 'react-icons/fi';
// // const ManageEnquiry = () => {
// //   const [enquiries, setEnquiries] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedEnquiry, setSelectedEnquiry] = useState(null);
// //   const [newLogMessage, setNewLogMessage] = useState('');
// //   const [logs, setLogs] = useState([]);
// //   const [loading, setLoading] = useState(false); // Loading state for fetching data
// //   const [sidebarMode, setSidebarMode] = useState('collapsed'); // Manage sidebar mode

// //   useEffect(() => {
// //     fetchEnquiries();
// //   }, []);

// //   // Fetch all enquiries initially
// //   const fetchEnquiries = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await axios.get('http://localhost:8081/getEnquiry');
// //       setEnquiries(response.data.Result || []);
// //     } catch (error) {
// //       toast.error('Error fetching enquiries');
// //       console.error('Error fetching enquiries', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Debounced search function for real-time search
// //   const handleSearch = debounce(async () => {
// //     if (!searchTerm.trim()) {
// //       fetchEnquiries(); // Fetch all enquiries if search term is empty
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const response = await axios.get(`http://localhost:8081/getEnquiry/${searchTerm}`);
// //       setEnquiries(response.data.Result || []);
// //     } catch (error) {
// //       toast.error('Error searching enquiries');
// //       console.error('Error searching enquiries', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, 300); // Debounce time in milliseconds

// //   // Fetch enquiry details and logs when an enquiry is clicked
// //   const handleEnquiryClick = async (id) => {
// //     setLoading(true);
// //     try {
// //       const enquiryResponse = await axios.get(`http://localhost:8081/getEnquiry/${id}`);
// //       setSelectedEnquiry(enquiryResponse.data.Result[0] || null);

// //       const logsResponse = await axios.get(`http://localhost:8081/getCommunicationLogs/${id}`);
// //       setLogs(logsResponse.data.Result || []);
// //     } catch (error) {
// //       toast.error('Error fetching enquiry details');
// //       console.error('Error fetching enquiry details', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Add communication log for the selected enquiry
// //   const handleLogSubmit = async () => {
// //     try {
// //       await axios.post('http://localhost:8081/addCommunicationLog', {
// //         enquiry_id: selectedEnquiry.EnquiryId,
// //         message: newLogMessage
// //       });
// //       fetchLogs(selectedEnquiry.EnquiryId); // Fetch logs again after adding a new log
// //       setNewLogMessage('');
// //       toast.success('Log added successfully');
// //     } catch (error) {
// //       toast.error('Error adding communication log');
// //       console.error('Error adding communication log', error);
// //     }
// //   };

// //   // Fetch communication logs for a specific enquiry
// //   const fetchLogs = async (id) => {
// //     try {
// //       const response = await axios.get(`http://localhost:8081/getCommunicationLogs/${id}`);
// //       setLogs(response.data.Result || []);
// //     } catch (error) {
// //       toast.error('Error fetching communication logs');
// //       console.error('Error fetching communication logs', error);
// //     }
// //   };

// //   // Handle going back to the list of all enquiries
// //   const handleGoBack = () => {
// //     setSelectedEnquiry(null); // Reset selected enquiry to null to show all enquiries
// //     setLogs([]); // Clear logs
// //     setSearchTerm(''); // Reset search term if any
// //     fetchEnquiries(); // Fetch all enquiries again
// //   };
// //   const toggleSidebarMode = () => {
// //     setSidebarMode((prevMode) => (prevMode === 'expanded' ? 'collapsed' : 'expanded'));
// //   };
// //   return (
// //     <div className="flex">
// //       <AdminHome/>
// //        {/* <AdminHome sidebarMode={sidebarMode} />
      
       
// //           <nav className="flex fixed top-0 left-0 w-full z-10 font-bold bg-slate-800 text-4xl text-white p-6 gap-20">
// //             <FiAlignJustify onClick={toggleSidebarMode} />
// //             <h1>Admin Dashboard</h1>
// //           </nav>
// //          */}
// //       <div className="container mx-auto p-4 text-white flex-1">
// //         <Toaster />
// //         <h1 className="text-2xl font-bold mb-4">Manage Enquiries</h1>
       
// //         {!selectedEnquiry && (
// //           <div className="flex mb-4 text-black">
// //             <input
// //               type="text"
// //               placeholder="Search by Enquiry ID..."
// //               value={searchTerm}
// //               onChange={(e) => {
// //                 setSearchTerm(e.target.value);
// //                 handleSearch();
// //               }}
// //               className="border rounded p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             <button
// //               onClick={handleSearch}
// //               className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             >
// //               Search
// //             </button>
// //           </div>
// //         )}

// //         {loading ? (
// //           <p className="text-gray-600">Loading...</p>
// //         ) : (
// //           <ul className="list-disc pl-5 mb-4">
// //             {enquiries.length > 0 ? (
// //               enquiries.map((enquiry) => (
// //                 <li
// //                   key={enquiry.EnquiryId}
// //                   onClick={() => handleEnquiryClick(enquiry.EnquiryId)}
// //                   className="cursor-pointer hover:underline transition duration-300 ease-in-out"
// //                 >
// //                   {enquiry.FirstName} {enquiry.LastName}
// //                 </li>
// //               ))
// //             ) : (
// //               <li>No enquiries found</li>
// //             )}
// //           </ul>
// //         )}

// //         {selectedEnquiry && (
// //           <div className="border p-4 rounded shadow-md">
// //             <button
// //               onClick={handleGoBack}
// //               className="mb-2 p-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
// //             >
// //               Go Back
// //             </button>
// //             <h2 className="text-xl font-semibold mb-2">Enquiry Details</h2>
// //             <p>
// //               <strong>Name:</strong> {selectedEnquiry.FirstName} {selectedEnquiry.LastName}
// //             </p>
// //             <p>
// //               <strong>Contact:</strong> {selectedEnquiry.contact}
// //             </p>
// //             <p>
// //               <strong>Email:</strong> {selectedEnquiry.email}
// //             </p>
// //             <p>
// //               <strong>Age:</strong> {selectedEnquiry.age}
// //             </p>
// //             <p>
// //               <strong>Gender:</strong> {selectedEnquiry.gender}
// //             </p>
// //             <p>
// //               <strong>Assigned to:</strong> {selectedEnquiry.assigned_to}
// //             </p>
// //             <p>
// //               <strong>Follow-up Date:</strong> {selectedEnquiry.follow_up_date}
// //             </p>

// //             <h3 className="text-lg font-semibold mt-4">Communication Logs</h3>
// //             <ul className="list-disc pl-5 mb-4">
// //               {logs.length > 0 ? (
// //                 logs.map((log) => (
// //                   <li key={log.log_id}>
// //                     {new Date(log.communication_date).toLocaleString()}: {log.message}
// //                   </li>
// //                 ))
// //               ) : (
// //                 <li>No communication logs found</li>
// //               )}
// //             </ul>

// //             <textarea
// //               value={newLogMessage}
// //               onChange={(e) => setNewLogMessage(e.target.value)}
// //               placeholder="Add a log message..."
// //               className={`border rounded p-2 w-full mb-2 ${newLogMessage.length === 0 ? 'border-red-500' : ''}`}
// //             />
// //             <button
// //               onClick={handleLogSubmit}
// //               className="p-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
// //             >
// //               Add Log
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ManageEnquiry;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { debounce } from 'lodash';
// import AdminHome from './AdminHome'; // Adjust the path as needed

// const ManageEnquiry = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedEnquiry, setSelectedEnquiry] = useState(null);
//   const [newLogMessage, setNewLogMessage] = useState('');
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(false); // Loading state for fetching data

//   useEffect(() => {
//     fetchEnquiries();
//   }, []);

//   // Fetch all enquiries initially
//   const fetchEnquiries = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:8081/getEnquiry');
//       setEnquiries(response.data.Result || []);
//     } catch (error) {
//       toast.error('Error fetching enquiries');
//       console.error('Error fetching enquiries', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Debounced search function for real-time search
//   const handleSearch = debounce(async () => {
//     if (!searchTerm.trim()) {
//       fetchEnquiries(); // Fetch all enquiries if search term is empty
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await axios.get(`http://localhost:8081/getEnquiry/${searchTerm}`);
//       setEnquiries(response.data.Result || []);
//     } catch (error) {
//       toast.error('Error searching enquiries');
//       console.error('Error searching enquiries', error);
//     } finally {
//       setLoading(false);
//     }
//   }, 300); // Debounce time in milliseconds

//   // Fetch enquiry details and logs when an enquiry is clicked
//   const handleEnquiryClick = async (id) => {
//     setLoading(true);
//     try {
//       const enquiryResponse = await axios.get(`http://localhost:8081/getEnquiry/${id}`);
//       setSelectedEnquiry(enquiryResponse.data.Result[0] || null);

//       const logsResponse = await axios.get(`http://localhost:8081/getCommunicationLogs/${id}`);
//       setLogs(logsResponse.data.Result || []);
//     } catch (error) {
//       toast.error('Error fetching enquiry details');
//       console.error('Error fetching enquiry details', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Add communication log for the selected enquiry
//   const handleLogSubmit = async () => {
//     try {
//       await axios.post('http://localhost:8081/addCommunicationLog', {
//         enquiry_id: selectedEnquiry.EnquiryId,
//         message: newLogMessage
//       });
//       fetchLogs(selectedEnquiry.EnquiryId); // Fetch logs again after adding a new log
//       setNewLogMessage('');
//       toast.success('Log added successfully');
//     } catch (error) {
//       toast.error('Error adding communication log');
//       console.error('Error adding communication log', error);
//     }
//   };

//   // Fetch communication logs for a specific enquiry
//   const fetchLogs = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:8081/getCommunicationLogs/${id}`);
//       setLogs(response.data.Result || []);
//     } catch (error) {
//       toast.error('Error fetching communication logs');
//       console.error('Error fetching communication logs', error);
//     }
//   };

//   // Handle going back to the list of all enquiries
//   const handleGoBack = () => {
//     setSelectedEnquiry(null); // Reset selected enquiry to null to show all enquiries
//     setLogs([]); // Clear logs
//     setSearchTerm(''); // Reset search term if any
//     fetchEnquiries(); // Fetch all enquiries again
//   };

//   return (
//     <div className="flex h-screen">
//       <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className="flex-1 container mx-auto p-4 text-white">
//         <Toaster />
//         <div className="mt-4">
//           <h1 className="text-2xl font-bold mb-4">Manage Enquiries</h1>

//           {!selectedEnquiry && (
//             <div className="flex mb-4 text-black">
//               <input
//                 type="text"
//                 placeholder="Search by Enquiry ID..."
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   handleSearch();
//                 }}
//                 className="border rounded p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 onClick={handleSearch}
//                 className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               >
//                 Search
//               </button>
//             </div>
//           )}

//           {loading ? (
//             <p className="text-gray-600">Loading...</p>
//           ) : (
//             <ul className="list-disc pl-5 mb-4">
//               {enquiries.length > 0 ? (
//                 enquiries.map(enquiry => (
//                   <li
//                     key={enquiry.EnquiryId}
//                     onClick={() => handleEnquiryClick(enquiry.EnquiryId)}
//                     className="cursor-pointer hover:underline transition duration-300 ease-in-out"
//                   >
//                     {enquiry.FirstName} {enquiry.LastName}
//                   </li>
//                 ))
//               ) : (
//                 <li>No enquiries found</li>
//               )}
//             </ul>
//           )}

//           {selectedEnquiry && (
//             <div className="border p-4 rounded shadow-md">
//               <button
//                 onClick={handleGoBack}
//                 className="mb-2 p-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
//               >
//                 Go Back
//               </button>
//               <h2 className="text-xl font-semibold mb-2">Enquiry Details</h2>
//               <p>
//                 <strong>Name:</strong> {selectedEnquiry.FirstName} {selectedEnquiry.LastName}
//               </p>
//               <p>
//                 <strong>Contact:</strong> {selectedEnquiry.contact}
//               </p>
//               <p>
//                 <strong>Email:</strong> {selectedEnquiry.email}
//               </p>
//               <p>
//                 <strong>Age:</strong> {selectedEnquiry.age}
//               </p>
//               <p>
//                 <strong>Gender:</strong> {selectedEnquiry.gender}
//               </p>
//               <p>
//                 <strong>Assigned to:</strong> {selectedEnquiry.assigned_to}
//               </p>
//               <p>
//                 <strong>Follow-up Date:</strong> {selectedEnquiry.follow_up_date}
//               </p>

//               <h3 className="text-lg font-semibold mt-4">Communication Logs</h3>
//               <ul className="list-disc pl-5 mb-4">
//                 {logs.length > 0 ? (
//                   logs.map(log => (
//                     <li key={log.log_id}>
//                       {new Date(log.communication_date).toLocaleString()}: {log.message}
//                     </li>
//                   ))
//                 ) : (
//                   <li>No communication logs found</li>
//                 )}
//               </ul>

//               <textarea
//                 value={newLogMessage}
//                 onChange={(e) => setNewLogMessage(e.target.value)}
//                 placeholder="Add a log message..."
//                 className={`border rounded p-2 w-full mb-2 ${newLogMessage.length === 0 ? 'border-red-500' : ''}`}
//               />
//               <button
//                 onClick={handleLogSubmit}
//                 className="p-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 Add Log
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageEnquiry;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageEnquiry = () => {
//     const [enquiries, setEnquiries] = useState([]);
//     const [search, setSearch] = useState('');
//     const [statusFilter, setStatusFilter] = useState('');
//     const [page, setPage] = useState(1);
//     const [selectedEnquiry, setSelectedEnquiry] = useState(null);
//     const [newStatus, setNewStatus] = useState('');
//     const [message, setMessage] = useState('');

//     useEffect(() => {
//         fetchEnquiries();
//     }, [search, statusFilter, page]);

//     const fetchEnquiries = async () => {
//         try {
//             const response = await axios.get('http://localhost:8081/getEnquiry', {
//                 params: { search, status: statusFilter, page }
//             });
//             setEnquiries(response.data.result);
//         } catch (error) {
//             console.error('Error fetching enquiries:', error);
//         }
//     };

//     const handleEnquiryClick = (enquiry) => {
//         setSelectedEnquiry(enquiry);
//         setNewStatus(enquiry.status); // Initialize newStatus with current status
      
//     };

//     const handleStatusChange = async () => {
//         try {
//             await axios.put(`http://localhost:8081/updateEnquiryStatus/${selectedEnquiry.EnquiryId}`, {
//                 status: newStatus,
//             });
//             setMessage('Enquiry status updated successfully.');
//             // Optionally update the enquiry list or reset component state as needed
//         } catch (error) {
//             console.error('Error updating status:', error);
//             setMessage('Error updating status. Please try again.');
//         }
//     };

//     return (
//         <div className="container mx-auto p-4 text-white">
//             <h2 className="text-2xl font-bold mb-4">Manage Enquiries</h2>
//             <div className="flex space-x-4 mb-4">
//                 <input
//                     type="text"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     placeholder="Search by name or email"
//                     className="w-full p-2 bg-gray-900 rounded border border-gray-700"
//                 />
//                 <select
//                     value={statusFilter}
//                     onChange={(e) => setStatusFilter(e.target.value)}
//                     className="w-full p-2 bg-gray-900 rounded border border-gray-700"
//                 >
//                     <option value="">All Statuses</option>
//                     <option value="Pending">Pending</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Resolved">Resolved</option>
//                 </select>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Enquiry List</h3>
//                     <ul className="bg-gray-800 rounded-lg p-4">
//                         {enquiries.map((enquiry) => (
//                             <li key={enquiry.EnquiryId} className="cursor-pointer py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleEnquiryClick(enquiry)}>
//                                 {enquiry.FirstName} {enquiry.LastName} - {enquiry.status}
                                
//                             </li>
//                         ))}
//                     </ul>
//                     <div className="flex justify-between mt-4">
//                         <button
//                             onClick={() => setPage(page > 1 ? page - 1 : 1)}
//                             className="bg-blue-600 text-white px-4 py-2 rounded"
//                         >
//                             Previous
//                         </button>
//                         <button
//                             onClick={() => setPage(page + 1)}
//                             className="bg-blue-600 text-white px-4 py-2 rounded"
//                         >
//                             Next
//                         </button>
//                     </div>
//                 </div>
//                 <div>
//                     {selectedEnquiry && (
//                         <div className="bg-gray-800 p-4 rounded-lg">
//                             <h3 className="text-xl font-semibold mb-2">Enquiry Details</h3>
//                             <p>Name: {selectedEnquiry.FirstName} {selectedEnquiry.LastName}</p>
//                             <p>Email: {selectedEnquiry.email}</p>
//                             <p>Phone: {selectedEnquiry.contact}</p>
//                             <p>Status: {selectedEnquiry.status}</p>
//                             <div className="mt-2">
//                                 <label className="block mb-1">Update Status:</label>
//                                 <select
//                                     value={newStatus}
//                                     onChange={(e) => setNewStatus(e.target.value)}
//                                     className="w-full p-2 bg-gray-900 rounded border border-gray-700"
//                                 >
//                                     <option value="Pending">Pending</option>
//                                     <option value="In Progress">In Progress</option>
//                                     <option value="Resolved">Resolved</option>
//                                 </select>
//                                 <button onClick={handleStatusChange} className="bg-green-600 text-white px-4 py-2 rounded mt-2">Update Status</button>
//                             </div>
//                         </div>
//                     )}
//                     {message && <p className="mt-4 text-green-600">{message}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ManageEnquiry;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const ManageEnquiry = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [page, setPage] = useState(1);
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [newStatus, setNewStatus] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchEnquiries();
    }, [search, statusFilter, page]);

    const fetchEnquiries = async () => {
        try {
            const response = await axios.get('http://localhost:8081/getEnquiry', {
                params: { search, status: statusFilter, page }
            });
            setEnquiries(response.data.result);
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        }
    };

    const handleEnquiryClick = (enquiry) => {
        setSelectedEnquiry(enquiry);
        setNewStatus(enquiry.status); // Initialize newStatus with current status
    };

    const handleStatusChange = async () => {
        try {
            await axios.put(`http://localhost:8081/updateEnquiryStatus/${selectedEnquiry.EnquiryId}`, {
                status: newStatus,
            });
            setMessage('Enquiry status updated successfully.');

            // Update the enquiries list locally
            const updatedEnquiries = enquiries.map((enquiry) => {
                if (enquiry.EnquiryId === selectedEnquiry.EnquiryId) {
                    return { ...enquiry, status: newStatus };
                }
                return enquiry;
            });
            setEnquiries(updatedEnquiries);
            setSelectedEnquiry({ ...selectedEnquiry, status: newStatus }); // Update selected enquiry status
        } catch (error) {
            console.error('Error updating status:', error);
            setMessage('Error updating status. Please try again.');
        }
    };

    return (
        <div className="text-white flex h-screen">
            <div className="w-64 flex-none">
                <AdminHome />
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
        <div className="container mx-auto p-20 text-white">
            <h2 className="text-3xl font-bold mb-10">Manage Enquiries</h2>
            <div className="flex space-x-4 mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or email"
                    className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                />
                <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                >
                    <option value="">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Resolved">Resolved</option>
                </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Enquiry List</h3>
                    <ul className="bg-gray-800 rounded-lg p-4">
                        {enquiries.map((enquiry) => (
                            <li key={enquiry.EnquiryId} className="cursor-pointer py-2 px-4 hover:bg-gray-700 rounded" onClick={() => handleEnquiryClick(enquiry)}>
                                {enquiry.FirstName} {enquiry.LastName} - {enquiry.status}
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => setPage(page > 1 ? page - 1 : 1)}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setPage(page + 1)}
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div>
                    {selectedEnquiry && (
                        <div className="bg-gray-800 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Enquiry Details</h3>
                            <p>Name: {selectedEnquiry.FirstName} {selectedEnquiry.LastName}</p>
                            <p>Email: {selectedEnquiry.email}</p>
                            <p>Phone: {selectedEnquiry.contact}</p>
                            <p>Status: {selectedEnquiry.status}</p>
                            <div className="mt-2">
                                <label className="block mb-1">Update Status:</label>
                                <select
                                    value={newStatus}
                                    onChange={(e) => setNewStatus(e.target.value)}
                                    className="w-full p-2 bg-gray-900 rounded border border-gray-700"
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Resolved">Resolved</option>
                                </select>
                                <button onClick={handleStatusChange} className="bg-green-600 text-white px-4 py-2 rounded mt-2">Update Status</button>
                            </div>
                        </div>
                    )}
                    {message && <p className="mt-4 text-green-600">{message}</p>}
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default ManageEnquiry;
