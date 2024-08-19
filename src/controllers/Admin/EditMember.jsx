
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// const EditMember = () => {
//   const [members, setMembers] = useState([]);
//   const [editMember, setEditMember] = useState(null);
//   const [newData, setNewData] = useState({
//     MemberId: '',
//     FirstName: '',
//     LastName: '',
//     email: '',
//     PlanId: '',
//     edate: '',
//     jdate: '',
//     gender: '',
//     age: '',
//     contact: '',
//     inamount: ''
//   });
//   const [memberCount, setMemberCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(5);

//   const fetchMembers = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getMember');
//       setMembers(Array.isArray(response.data.Result) ? response.data.Result : []);
//     } catch (error) {
//       console.error('Error fetching members', error);
//       setMembers([]);
//     }
//   };

//   const fetchMemberCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/memberCount');
//       setMemberCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching member count', error);
//       setMemberCount(0);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updateMember/${id}`, newData);
//       fetchMembers();
//       setEditMember(null);
//     } catch (error) {
//       console.error('Error updating member', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deleteMember/${id}`);
//       fetchMembers();
//     } catch (error) {
//       console.error('Error deleting member', error);
//     }
//   };
   
//   const indexOfLastMember = currentPage * perPage;
//   const indexOfFirstMember = indexOfLastMember - perPage;
//   const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   useEffect(() => {
//     fetchMembers();
//     fetchMemberCount();
//   }, []);
  
//   const handleEdit = (member) => {
//     setEditMember(member.MemberId);
//     setNewData({
//       MemberId: member.MemberId,
//     FirstName: member.FirstName,
//     LastName: member.LastName,
//     email: member.email,
//     PlanId: member.PlanId,
//     edate: member.edate,
//     jdate: member.jdate,
//     gender: member.gender,
//     age: member.age,
//     contact: member.contact,
//     inamount: member.inamount
//     });
//   };
//   return (
//     <div className='text-white flex h-screen'>
//       <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className='ml-40 flex flex-col'>
//       <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Members</h2>
//       <div className="overflow-x-auto">
//       <table className="w-full bg-gray-700 shadow-md rounded-lg">
//         <thead className="bg-gray-800 text-white border border-slate-700">
//           <tr className='text-lg'>
//             <th className="w-32 border border-slate-700">MemberId</th>
//             <th className="w-32 border border-slate-700">FirstName</th>
//             <th className="w-32 border border-slate-700">LastName</th>
//             <th className="w-32 border border-slate-700">Contact</th>
//             <th className="w-32 border border-slate-700">Age</th>
//             <th className="w-32 border border-slate-700">Gender</th>
//             <th className="w-32 border border-slate-700">JoiningDate</th>
//             <th className="w-32 border border-slate-700">EndDate</th>
//             <th className="w-32 border border-slate-700">PlanId</th>
//             <th className="w-32 border border-slate-700">Amount</th>
//             <th className="w-32 border border-slate-700">Email</th>
//             <th className="w-32 border border-slate-700">Actions</th>
//           </tr>
//         </thead>
//         <tbody className='text-xl text-center'>
//           {members.length > 0 ? (
//             members.map(member => (
//               <tr key={member.MemberId}>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.MemberId}
//                       onChange={(e) => setNewData({ ...newData, MemberId: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.MemberId
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.FirstName}
//                       onChange={(e) => setNewData({ ...newData, FirstName: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.FirstName
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.LastName}
//                       onChange={(e) => setNewData({ ...newData, LastName: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.LastName
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.contact}
//                       onChange={(e) => setNewData({ ...newData, contact: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.contact
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-20">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.age}
//                       onChange={(e) => setNewData({ ...newData, age: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.age
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-20">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.gender}
//                       onChange={(e) => setNewData({ ...newData, gender: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.gender
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.jdate}
//                       onChange={(e) => setNewData({ ...newData, jdate: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.jdate
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.edate}
//                       onChange={(e) => setNewData({ ...newData, edate: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.edate
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.PlanId}
//                       onChange={(e) => setNewData({ ...newData, PlanId: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.PlanId
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-32">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.inamount}
//                       onChange={(e) => setNewData({ ...newData, inamount: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.inamount
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-40">
//                   {editMember === member.MemberId ? (
//                     <input
//                       type="text"
//                       value={newData.email}
//                       onChange={(e) => setNewData({ ...newData, email: e.target.value })}
//                       className="w-full bg-gray-800 text-white"
//                     />
//                   ) : (
//                     member.email
//                   )}
//                 </td>
//                 <td className="border border-slate-600 px-4 py-2 w-64.">
//                   {editMember === member.MemberId ? (
//                     <button onClick={() => handleUpdate(member.MemberId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(member)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                       <button onClick={() => handleDelete(member.MemberId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="12" className="text-center py-4">No members found.</td>
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
//             disabled={currentMembers.length < perPage}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md"
//           >
//             Next
//           </button>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default EditMember;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const EditMember = () => {
  const [members, setMembers] = useState([]);
  const [editMember, setEditMember] = useState(null);
  const [newData, setNewData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    PlanId: '',
    edate: '',
    jdate: '',
    gender: '',
    age: '',
    contact: '',
    inamount: ''
  });
  const [memberCount, setMemberCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getMember');
      setMembers(Array.isArray(response.data.Result) ? response.data.Result : []);
    } catch (error) {
      console.error('Error fetching members', error);
      setMembers([]);
    }
  };

  const fetchMemberCount = async () => {
    try {
      const response = await axios.get('http://localhost:8081/memberCount');
      setMemberCount(response.data.count);
    } catch (error) {
      console.error('Error fetching member count', error);
      setMemberCount(0);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8081/updateMember/${id}`, newData);
      fetchMembers();
      setEditMember(null);
      setNewData({
        FirstName: '',
        LastName: '',
        email: '',
        PlanId: '',
        edate: '',
        jdate: '',
        gender: '',
        age: '',
        contact: '',
        inamount: ''
      });
    } catch (error) {
      console.error('Error updating member', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deleteMember/${id}`);
      fetchMembers();
    } catch (error) {
      console.error('Error deleting member', error);
    }
  };

  const indexOfLastMember = currentPage * perPage;
  const indexOfFirstMember = indexOfLastMember - perPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setEditMember(null); // Reset the edit state when changing pages
  };

  useEffect(() => {
    fetchMembers();
    fetchMemberCount();
  }, []);

  const handleEdit = (member) => {
    setEditMember(member.MemberId);
    setNewData({
      FirstName: member.FirstName,
      LastName: member.LastName,
      email: member.email,
      PlanId: member.PlanId,
      edate: member.edate,
      jdate: member.jdate,
      gender: member.gender,
      age: member.age,
      contact: member.contact,
      inamount: member.inamount
    });
  };

  return (
    <div className='text-white flex h-screen'>
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar/>
      <div className=' flex flex-col items-center justify-center w-full'>
        <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
            <thead className="bg-gray-800 text-white border border-slate-700">
              <tr className='text-lg'>
                <th className="w-32 border border-slate-700">MemberId</th>
                <th className="w-32 border border-slate-700">FirstName</th>
                <th className="w-32 border border-slate-700">LastName</th>
                <th className="w-32 border border-slate-700">Contact</th>
                <th className="w-32 border border-slate-700">Age</th>
                <th className="w-32 border border-slate-700">Gender</th>
                <th className="w-32 border border-slate-700">JoiningDate</th>
                <th className="w-32 border border-slate-700">EndDate</th>
                <th className="w-32 border border-slate-700">PlanId</th>
                <th className="w-32 border border-slate-700">Amount</th>
                <th className="w-32 border border-slate-700">Email</th>
                <th className="w-32 border border-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
              {currentMembers.length > 0 ? (
                currentMembers.map(member => (
                  <tr key={member.MemberId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
                    <td className="border border-slate-700 px-4 py-2">
                      {member.MemberId}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.FirstName}
                          onChange={(e) => setNewData({ ...newData, FirstName: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.FirstName
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.LastName}
                          onChange={(e) => setNewData({ ...newData, LastName: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.LastName
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.contact}
                          onChange={(e) => setNewData({ ...newData, contact: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.contact
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.age}
                          onChange={(e) => setNewData({ ...newData, age: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.age
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.gender}
                          onChange={(e) => setNewData({ ...newData, gender: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.gender
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.jdate}
                          onChange={(e) => setNewData({ ...newData, jdate: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.jdate
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.edate}
                          onChange={(e) => setNewData({ ...newData, edate: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.edate
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.PlanId}
                          onChange={(e) => setNewData({ ...newData, PlanId: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.PlanId
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.inamount}
                          onChange={(e) => setNewData({ ...newData, inamount: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.inamount
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editMember === member.MemberId ? (
                        <input
                          type="text"
                          value={newData.email}
                          onChange={(e) => setNewData({ ...newData, email: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        member.email
                      )}
                    </td>
                    <td className="border border-slate-700 w-64">
                      {editMember === member.MemberId ? (
                        <button onClick={() => handleUpdate(member.MemberId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(member)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                          <button onClick={() => handleDelete(member.MemberId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">No members found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
            disabled={currentMembers.length < perPage}
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

export default EditMember;
