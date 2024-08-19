 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// const EditEquipment = () => {
//   const [equipments, setEquipments] = useState([]);
//   const [editEquipment, setEditEquipment] = useState(null);
//   const [newData, setNewData] = useState({
//     EquipmentId: '',
//     EquipmentName: '',
//     price: '',
//     unit: '',
//     date: '',
//     description: ''
//   });
//   const [equipmentCount, setEquipmentCount] = useState(0); 
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(5);
//   const fetchEquipments = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getEquipment');
//       setEquipments(Array.isArray(response.data.Result) ? response.data.Result : []);
//     } catch (error) {
//       console.error('Error fetching equipments', error);
//       setEquipments([]);
//     }
//   };

//   const fetchEquipmentCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/equipmentCount');
//       setEquipmentCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching equipment count', error);
//       setEquipmentCount(0); 
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updateEquipment/${id}`, newData);
//       fetchEquipments();
//       setEditEquipment(null);
//     } catch (error) {
//       console.error('Error updating equipment', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteEquipment/${id}`);
//       fetchEquipments();
//     } catch (error) {
//       console.error('Error deleting equipment', error);
//     }
//   };
  
//   const handleEdit = (equipment) => {
//     setEditEquipment(equipment.EquipmentId)
//     setNewData({
//       EquipmentId: equipment.EquipmentId,
//       EquipmentName: equipment.EquipmentName,
//       price: equipment.price,
//       unit: equipment.unit,
//       date: equipment.date,
//       description: equipment.description
//     });
//   };
//   const indexOfLastEnquiry = currentPage * perPage;
//   const indexOfFirstEnquiry = indexOfLastEnquiry - perPage;
//   const currentEnquiries = equipments.slice(indexOfFirstEnquiry, indexOfLastEnquiry);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   useEffect(() => {
//     fetchEquipments();
//     fetchEquipmentCount();
//   }, []);

//   return (
//     <div className='text-white flex h-screen'>
//        <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className='ml-40 flex flex-col'>
//       <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Equipments</h2>
//       <div className="overflow-x-auto">
//       <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
//         <thead>
//           <tr className='text-2xl border border-slate-600 px-4 py-2'>
//             <th className="w-32">EquipmentId</th>
//             <th className="w-32">Name</th>
//             <th className="w-32">Price</th>
//             <th className="w-32">Unit</th>
//             <th className="w-40">Date</th>
//             <th className="w-40">Description</th>
//             <th className="w-32">Actions</th>
//           </tr>
//         </thead>
//         <tbody className='text-xl text-center'>
//           {equipments.length > 0 ? (
//             equipments.map(equipment => (
//               <tr key={equipment.EquipmentId}>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="text"
//                       value={newData.EquipmentId}
//                       onChange={(e) => setNewData({ ...newData, EquipmentId: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.EquipmentId
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="text"
//                       value={newData.EquipmentName}
//                       onChange={(e) => setNewData({ ...newData, EquipmentName: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.EquipmentName
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="text"
//                       value={newData.price}
//                       onChange={(e) => setNewData({ ...newData, price: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.price
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="text"
//                       value={newData.unit}
//                       onChange={(e) => setNewData({ ...newData, unit: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.unit
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="date"
//                       value={newData.date}
//                       onChange={(e) => setNewData({ ...newData, date: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.date
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <input
//                       type="text"
//                       value={newData.description}
//                       onChange={(e) => setNewData({ ...newData, description: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     equipment.description
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editEquipment === equipment.EquipmentId ? (
//                     <button onClick={() => handleUpdate(equipment.EquipmentId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(equipment)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                       <button onClick={() => handleDelete(equipment.EquipmentId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center py-4">No equipments found.</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       </div>
//       <div className="flex justify-center mt-4">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentEnquiries.length < perPage}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md"
//           >
//             Next
//           </button>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default EditEquipment;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// import AdminNavbar from './AdminNavbar';
// const EditEquipment = () => {
//   const [equipments, setEquipments] = useState([]);
//   const [editEquipment, setEditEquipment] = useState(null);
//   const [newData, setNewData] = useState({
//     EquipmentId: '',
//     EquipmentName: '',
//     price: '',
//     unit: '',
//     date: '',
//     description: ''
//   });
//   const [equipmentCount, setEquipmentCount] = useState(0); 
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(5);

//   const fetchEquipments = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getEquipment');
//       setEquipments(Array.isArray(response.data.Result) ? response.data.Result : []);
//     } catch (error) {
//       console.error('Error fetching equipments', error);
//       setEquipments([]);
//     }
//   };

//   const fetchEquipmentCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/equipmentCount');
//       setEquipmentCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching equipment count', error);
//       setEquipmentCount(0); 
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updateEquipment/${id}`, newData);
//       fetchEquipments();
//       setEditEquipment(null);
//     } catch (error) {
//       console.error('Error updating equipment', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteEquipment/${id}`);
//       fetchEquipments();
//     } catch (error) {
//       console.error('Error deleting equipment', error);
//     }
//   };
  
//   const handleEdit = (equipment) => {
//     setEditEquipment(equipment.EquipmentId)
//     setNewData({
//       EquipmentId: equipment.EquipmentId,
//       EquipmentName: equipment.EquipmentName,
//       price: equipment.price,
//       unit: equipment.unit,
//       date: equipment.date,
//       description: equipment.description
//     });
//   };

//   const indexOfLastEquipment = currentPage * perPage;
//   const indexOfFirstEquipment = indexOfLastEquipment - perPage;
//   const currentEquipments = equipments.slice(indexOfFirstEquipment, indexOfLastEquipment);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchEquipments();
//     fetchEquipmentCount();
//   }, []);

//   return (
//     <div className='text-white flex h-screen'>
//       <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className="flex-1 flex flex-col">
//         <AdminNavbar/>
//       <div className='flex flex-col items-center justify-center w-full'>
//         <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Equipments</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
//             <thead className="bg-gray-800 text-white border border-slate-700">
//               <tr className='text-lg'>
//                 <th className="w-32 border border-slate-700">EquipmentId</th>
//                 <th className="w-32 border border-slate-700">Name</th>
//                 <th className="w-32 border border-slate-700">Price</th>
//                 <th className="w-32 border border-slate-700">Unit</th>
//                 <th className="w-32 border border-slate-700">Date</th>
//                 <th className="w-32 border border-slate-700">Description</th>
//                 <th className="w-32 border border-slate-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
//               {currentEquipments.length > 0 ? (
//                 currentEquipments.map(equipment => (
//                   <tr key={equipment.EquipmentId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
//                     <td className=" py-2 px-4 border border-slate-700">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="text"
//                           value={newData.EquipmentId}
//                           onChange={(e) => setNewData({ ...newData, EquipmentId: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.EquipmentId
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border border-slate-700">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="text"
//                           value={newData.EquipmentName}
//                           onChange={(e) => setNewData({ ...newData, EquipmentName: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.EquipmentName
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border border-slate-700">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="text"
//                           value={newData.price}
//                           onChange={(e) => setNewData({ ...newData, price: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.price
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border border-slate-700">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="text"
//                           value={newData.unit}
//                           onChange={(e) => setNewData({ ...newData, unit: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.unit
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border border-slate-700">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="date"
//                           value={newData.date}
//                           onChange={(e) => setNewData({ ...newData, date: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.date
//                       )}
//                     </td>
//                     <td className="py-2 px-4 border border-slate-700 ">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <input
//                           type="text"
//                           value={newData.description}
//                           onChange={(e) => setNewData({ ...newData, description: e.target.value })}
//                           className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                         />
//                       ) : (
//                         equipment.description
//                       )}
//                     </td>
//                     <td className=" border border-slate-700 w-64">
//                       {editEquipment === equipment.EquipmentId ? (
//                         <button onClick={() => handleUpdate(equipment.EquipmentId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                       ) : (
//                         <>
//                           <button onClick={() => handleEdit(equipment)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                           <button onClick={() => handleDelete(equipment.EquipmentId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center py-4">No equipments found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         {/* Pagination controls */}
//         <div className="flex justify-center mt-4">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentEquipments.length < perPage}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default EditEquipment;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// import AdminNavbar from './AdminNavbar';

// const EditEquipment = () => {
//   const [equipments, setEquipments] = useState([]);
//   const [editEquipment, setEditEquipment] = useState(null);
//   const [newData, setNewData] = useState({
//     EquipmentId: '',
//     EquipmentName: '',
//     price: '',
//     unit: '',
//     date: '',
//     description: ''
//   });
//   const [equipmentCount, setEquipmentCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(5);

//   const fetchEquipments = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getEquipment');
//       setEquipments(Array.isArray(response.data.Equipment) ? response.data.Equipment : []);
//     } catch (error) {
//       console.error('Error fetching equipments', error);
//       setEquipments([]);
//     }
//   };

//   const fetchEquipmentCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/equipmentCount');
//       setEquipmentCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching equipment count', error);
//       setEquipmentCount(0);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updateEquipment/${id}`, newData);
//       fetchEquipments();
//       setEditEquipment(null);
//     } catch (error) {
//       console.error('Error updating equipment', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteEquipment/${id}`);
//       fetchEquipments();
//     } catch (error) {
//       console.error('Error deleting equipment', error);
//     }
//   };

//   const handleEdit = (equipment) => {
//     setEditEquipment(equipment.EquipmentId);
//     setNewData({
//       EquipmentId: equipment.EquipmentId,
//       EquipmentName: equipment.EquipmentName,
//       price: equipment.price,
//       unit: equipment.unit,
//       date: equipment.date,
//       description: equipment.description
//     });
//   };

//   const indexOfLastEquipment = currentPage * perPage;
//   const indexOfFirstEquipment = indexOfLastEquipment - perPage;
//   const currentEquipments = equipments.slice(indexOfFirstEquipment, indexOfLastEquipment);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     fetchEquipments();
//     fetchEquipmentCount();
//   }, []);

//   return (
//     <div className='text-white flex h-screen'>
//       <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className="flex-1 flex flex-col">
//         <AdminNavbar />
//         <div className='flex flex-col items-center justify-center w-full'>
//           <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Equipments</h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
//               <thead className="bg-gray-800 text-white border border-slate-700">
//                 <tr className='text-lg'>
//                   <th className="w-32 border border-slate-700">EquipmentId</th>
//                   <th className="w-32 border border-slate-700">Name</th>
//                   <th className="w-32 border border-slate-700">Price</th>
//                   <th className="w-32 border border-slate-700">Unit</th>
//                   <th className="w-32 border border-slate-700">Available Units</th>
//                   <th className="w-32 border border-slate-700">Date</th>
//                   <th className="w-32 border border-slate-700">Description</th>
//                   <th className="w-32 border border-slate-700">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
//                 {currentEquipments.length > 0 ? (
//                   currentEquipments.map(equipment => (
//                     <tr key={equipment.EquipmentId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="text"
//                             value={newData.EquipmentId}
//                             onChange={(e) => setNewData({ ...newData, EquipmentId: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.EquipmentId
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="text"
//                             value={newData.EquipmentName}
//                             onChange={(e) => setNewData({ ...newData, EquipmentName: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.EquipmentName
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="text"
//                             value={newData.price}
//                             onChange={(e) => setNewData({ ...newData, price: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.price
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="text"
//                             value={newData.unit}
//                             onChange={(e) => setNewData({ ...newData, unit: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.unit
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {equipment.availableUnits}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="date"
//                             value={newData.date}
//                             onChange={(e) => setNewData({ ...newData, date: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.date
//                         )}
//                       </td>
//                       <td className="py-2 px-4 border border-slate-700">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <input
//                             type="text"
//                             value={newData.description}
//                             onChange={(e) => setNewData({ ...newData, description: e.target.value })}
//                             className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                           />
//                         ) : (
//                           equipment.description
//                         )}
//                       </td>
//                       <td className="border border-slate-700 w-64">
//                         {editEquipment === equipment.EquipmentId ? (
//                           <button onClick={() => handleUpdate(equipment.EquipmentId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                         ) : (
//                           <>
//                             <button onClick={() => handleEdit(equipment)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                             <button onClick={() => handleDelete(equipment.EquipmentId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                           </>
//                         )}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="8" className="text-center py-4">No equipments found.</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//           {/* Pagination controls */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => paginate(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="bg-gray-800 text-white px-4 py-2 rounded-md mr-2"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => paginate(currentPage + 1)}
//               disabled={currentEquipments.length < perPage}
//               className="bg-gray-800 text-white px-4 py-2 rounded-md"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditEquipment;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';

const EditEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [editEquipment, setEditEquipment] = useState(null);
  const [newData, setNewData] = useState({
    EquipmentId: '',
    EquipmentName: '',
    price: '',
    unit: '',
    date: '',
    description: ''
  });
  const [equipmentCount, setEquipmentCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const fetchEquipments = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getEquipment');
      setEquipments(Array.isArray(response.data.Equipment) ? response.data.Equipment : []);
    } catch (error) {
      console.error('Error fetching equipments', error);
      setEquipments([]);
    }
  };

  const fetchEquipmentCount = async () => {
    try {
      const response = await axios.get('http://localhost:8081/equipmentCount');
      setEquipmentCount(response.data.count);
    } catch (error) {
      console.error('Error fetching equipment count', error);
      setEquipmentCount(0);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8081/updateEquipment/${id}`, newData);
      fetchEquipments();
      setEditEquipment(null);
    } catch (error) {
      console.error('Error updating equipment', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete equipment with ID: ${id}`);
      await axios.delete(`http://localhost:8081/deleteEquipment/${id}`);
      console.log(`Successfully deleted equipment with ID: ${id}`);
      fetchEquipments();
    } catch (error) {
      console.error('Error deleting equipment', error);
    }
  };

  const handleEdit = (equipment) => {
    setEditEquipment(equipment.EquipmentId);
    setNewData({
      EquipmentId: equipment.EquipmentId,
      EquipmentName: equipment.EquipmentName,
      price: equipment.price,
      unit: equipment.unit,
      date: equipment.date,
      description: equipment.description
    });
  };

  const indexOfLastEquipment = currentPage * perPage;
  const indexOfFirstEquipment = indexOfLastEquipment - perPage;
  const currentEquipments = equipments.slice(indexOfFirstEquipment, indexOfLastEquipment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetchEquipments();
    fetchEquipmentCount();
  }, []);

  return (
    <div className='text-white flex h-screen'>
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className='flex flex-col items-center justify-center w-full'>
          <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Equipments</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
              <thead className="bg-gray-800 text-white border border-slate-700">
                <tr className='text-lg'>
                  <th className="w-32 border border-slate-700">EquipmentId</th>
                  <th className="w-32 border border-slate-700">Name</th>
                  <th className="w-32 border border-slate-700">Price</th>
                  <th className="w-32 border border-slate-700">Unit</th>
                  <th className="w-32 border border-slate-700">Available Units</th>
                  <th className="w-32 border border-slate-700">Date</th>
                  <th className="w-32 border border-slate-700">Description</th>
                  <th className="w-32 border border-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
                {currentEquipments.length > 0 ? (
                  currentEquipments.map(equipment => (
                    <tr key={equipment.EquipmentId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="text"
                            value={newData.EquipmentId}
                            onChange={(e) => setNewData({ ...newData, EquipmentId: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.EquipmentId
                        )}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="text"
                            value={newData.EquipmentName}
                            onChange={(e) => setNewData({ ...newData, EquipmentName: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.EquipmentName
                        )}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="text"
                            value={newData.price}
                            onChange={(e) => setNewData({ ...newData, price: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.price
                        )}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="text"
                            value={newData.unit}
                            onChange={(e) => setNewData({ ...newData, unit: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.unit
                        )}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {equipment.availableUnits}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="date"
                            value={newData.date}
                            onChange={(e) => setNewData({ ...newData, date: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.date
                        )}
                      </td>
                      <td className="py-2 px-4 border border-slate-700">
                        {editEquipment === equipment.EquipmentId ? (
                          <input
                            type="text"
                            value={newData.description}
                            onChange={(e) => setNewData({ ...newData, description: e.target.value })}
                            className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                          />
                        ) : (
                          equipment.description
                        )}
                      </td>
                      <td className="border border-slate-700 w-64">
                        {editEquipment === equipment.EquipmentId ? (
                          <button onClick={() => handleUpdate(equipment.EquipmentId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
                        ) : (
                          <>
                            <button onClick={() => handleEdit(equipment)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                            <button onClick={() => handleDelete(equipment.EquipmentId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">No equipments found.</td>
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
              disabled={currentEquipments.length < perPage}
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

export default EditEquipment;
