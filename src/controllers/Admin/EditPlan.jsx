
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHome from './AdminHome';
// const EditPlan = () => {
//   const [plans, setPlans] = useState([]);
//   const [editPlan, setEditPlan] = useState(null);
//   const [newData, setNewData] = useState({
//     PlanName: '',
//     amount: '',
//     duration: '',
//     AccessLevel: '',
//     SpecialPromotions: ''
//   });
//   const [planCount, setPlanCount] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [perPage, setPerPage] = useState(5);
//   const fetchPlans = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getPlan');
//       setPlans(Array.isArray(response.data.planList) ? response.data.planList : []);
//     } catch (error) {
//       console.error('Error fetching plans', error);
//       setPlans([]);
//     }
//   };

//   const fetchPlanCount = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/planCount');
//       setPlanCount(response.data.count);
//     } catch (error) {
//       console.error('Error fetching plan count', error);
//       setPlanCount(0);
//     }
//   };

//   const handleUpdate = async (id) => {
//     try {
//       await axios.put(`http://localhost:8081/updatePlan/${id}`, newData);
//       fetchPlans();
//       setEditPlan(null);
//     } catch (error) {
//       console.error('Error updating plan', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:8081/deletePlan/${id}`);
//       fetchPlans();
//     } catch (error) {
//       console.error('Error deleting plan', error);
//     }
//   };
//   const indexOfLastPlan = currentPage * perPage;
//   const indexOfFirstPlan = indexOfLastPlan - perPage;
//   const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setEditPlan(null); // Reset the edit state when changing pages
//   };

//   const handleEdit = (plan) => {
//     setEditPlan(plan.PlanId);
//     setNewData({
//       PlanName: plan.PlanName,
//       amount: plan.amount,
//       duration: plan.duration,
//       AccessLevel: plan.AccessLevel,
//       SpecialPromotions: plan.SpecialPromotions
//     });
//   };

//   useEffect(() => {
//     fetchPlans();
//     fetchPlanCount();
//   }, []);

//   return (
//     <div className='text-white flex h-screen'>
//       <div className="flex-none w-64">
//         <AdminHome />
//       </div>
//       <div className='flex flex-col items-center justify-center w-full'>
//       <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Plans</h2>
//       <div className="overflow-x-auto">
//       <table className="min-w-full bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
//         <thead className="bg-gray-800 text-white border border-slate-700">
//           <tr className='text-lg'>
//             <th className="w-32 border border-slate-700">PlanId</th>
//             <th className="w-32 border border-slate-700">PlanName</th>
//             <th className="w-32 border border-slate-700">Amount</th>
//             <th className="w-32 border border-slate-700">Duration</th>
//             <th className="w-32 border border-slate-700">Actions</th>
//           </tr>
//         </thead>
//         <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
//           {plans.length > 0 ? (
//             plans.map(plan => (
//               <tr key={plan.PlanId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
//                 <td className="border border-slate-700 px-4 py-2">
//                   {plan.PlanId}
//                 </td>
//                 <td className="border border-slate-700 px-4 py-2">
//                   {editPlan === plan.PlanId ? (
//                     <input
//                       type="text"
//                       value={newData.PlanName}
//                       onChange={(e) => setNewData({ ...newData, PlanName: e.target.value })}
//                       className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                     />
//                   ) : (
//                     plan.PlanName
//                   )}
//                 </td>
//                 <td className="border border-slate-700 px-4 py-2">
//                   {editPlan === plan.PlanId ? (
//                     <input
//                       type="text"
//                       value={newData.amount}
//                       onChange={(e) => setNewData({ ...newData, amount: e.target.value })}
//                       className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                     />
//                   ) : (
//                     plan.amount
//                   )}
//                 </td>
//                 <td className="border border-slate-700 px-4 py-2">
//                   {editPlan === plan.PlanId ? (
//                     <input
//                       type="text"
//                       value={newData.duration}
//                       onChange={(e) => setNewData({ ...newData, duration: e.target.value })}
//                       className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
//                     />
//                   ) : (
//                     plan.duration
//                   )}
//                 </td>
//                 <td className="border border-slate-700 w-64">
//                   {editPlan === plan.PlanId ? (
//                     <button onClick={() => handleUpdate(plan.PlanId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
//                   ) : (
//                     <>
//                       <button onClick={() => handleEdit(plan)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
//                       <button onClick={() => handleDelete(plan.PlanId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="7" className="text-center py-4">No plans found.</td>
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
//             disabled={currentPlans.length < perPage}
//             className="bg-gray-800 text-white px-4 py-2 rounded-md"
//           >
//             Next
//           </button>
//         </div>
         
//       </div>
//     </div>
//   );
// };

// export default EditPlan;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const EditPlan = () => {
  const [plans, setPlans] = useState([]);
  const [editPlan, setEditPlan] = useState(null);
  const [newData, setNewData] = useState({
    PlanName: '',
    amount: '',
    duration: '',
    AccessLevel: '',
    SpecialPromotions: ''
  });
  const [planCount, setPlanCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getPlan');
      setPlans(Array.isArray(response.data.planList) ? response.data.planList : []);
    } catch (error) {
      console.error('Error fetching plans', error);
      setPlans([]);
    }
  };

  const fetchPlanCount = async () => {
    try {
      const response = await axios.get('http://localhost:8081/planCount');
      setPlanCount(response.data.count);
    } catch (error) {
      console.error('Error fetching plan count', error);
      setPlanCount(0);
    }
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8081/updatePlan/${id}`, newData);
      fetchPlans();
      setEditPlan(null);
    } catch (error) {
      console.error('Error updating plan', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/deletePlan/${id}`);
      fetchPlans();
    } catch (error) {
      console.error('Error deleting plan', error);
    }
  };

  const indexOfLastPlan = currentPage * perPage;
  const indexOfFirstPlan = indexOfLastPlan - perPage;
  const currentPlans = plans.slice(indexOfFirstPlan, indexOfLastPlan);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setEditPlan(null); // Reset the edit state when changing pages
  };

  const handleEdit = (plan) => {
    setEditPlan(plan.PlanId);
    setNewData({
      PlanName: plan.PlanName,
      amount: plan.amount,
      duration: plan.duration,
      AccessLevel: plan.AccessLevel,
      SpecialPromotions: plan.SpecialPromotions
    });
  };

  useEffect(() => {
    fetchPlans();
    fetchPlanCount();
  }, []);

  return (
    <div className='text-white flex h-screen'>
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar/>
      <div className='flex flex-col items-center justify-center w-full'>
        <h2 className="text-4xl font-bold mt-20 mb-10 text-center">Plans</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full max-w-5xl bg-gray-700 shadow-md rounded-lg divide-y divide-gray-600">
            <thead className="bg-gray-800 text-white border border-slate-700">
              <tr className='text-lg'>
                <th className="w-32 border border-slate-700">PlanId</th>
                <th className="w-32 border border-slate-700">PlanName</th>
                <th className="w-32 border border-slate-700">Amount</th>
                <th className="w-32 border border-slate-700">Duration</th>
                <th className="w-32 border border-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody className='text-lg text-center divide-y divide-gray-600 border border-slate-700'>
              {currentPlans.length > 0 ? (
                currentPlans.map(plan => (
                  <tr key={plan.PlanId} className="bg-gray-600 hover:bg-gray-500 border border-slate-700">
                    <td className="border border-slate-700 px-4 py-2">{plan.PlanId}</td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editPlan === plan.PlanId ? (
                        <input
                          type="text"
                          value={newData.PlanName}
                          onChange={(e) => setNewData({ ...newData, PlanName: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        plan.PlanName
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editPlan === plan.PlanId ? (
                        <input
                          type="text"
                          value={newData.amount}
                          onChange={(e) => setNewData({ ...newData, amount: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        plan.amount
                      )}
                    </td>
                    <td className="border border-slate-700 px-4 py-2">
                      {editPlan === plan.PlanId ? (
                        <input
                          type="text"
                          value={newData.duration}
                          onChange={(e) => setNewData({ ...newData, duration: e.target.value })}
                          className="w-full bg-gray-800 text-white px-2 py-1 rounded-md"
                        />
                      ) : (
                        plan.duration
                      )}
                      </td>
                    <td className="border border-slate-700 w-64">
                      {editPlan === plan.PlanId ? (
                        <button onClick={() => handleUpdate(plan.PlanId)} className="bg-green-500 text-white px-4 py-2 rounded-md">Save</button>
                      ) : (
                        <>
                          <button onClick={() => handleEdit(plan)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Edit</button>
                          <button onClick={() => handleDelete(plan.PlanId)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">No plans found.</td>
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
            disabled={currentPlans.length < perPage}
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

export default EditPlan;
