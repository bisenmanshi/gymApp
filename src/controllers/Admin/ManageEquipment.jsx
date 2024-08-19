// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// const ManageEquipment = () => {
//   const [equipmentList, setEquipmentList] = useState([]);
//   const [selectedEquipment, setSelectedEquipment] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [bookingDetails, setBookingDetails] = useState({
//     memberId: '',
//     bookingDate: '',
//     startTime: '',
//     endTime: ''
//   });
 
//   useEffect(() => {
//     fetchEquipment();
    
//   }, []);

//   const fetchEquipment = async () => {
//     try {
//       const response = await axios.get('http://localhost:8081/getEquipment');
//       setEquipmentList(response.data.Equipment);
//     } catch (error) {
//       console.error('Error fetching equipment:', error);
//       toast.error('Error fetching equipment');
//     }
//   };

//   const handleBookEquipment = async () => {
//     if (!selectedEquipment) {
//       toast.error('Please select equipment to book');
//       return;
//     }

//     if (selectedEquipment.AvailabilityStatus === 'Unavailable') {
//       toast.error('This equipment is unavailable for booking');
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post('http://localhost:8081/api/equipment/book', {
//         equipmentId: selectedEquipment.EquipmentId,
//         ...bookingDetails
//       });
//       toast.success('Equipment booked successfully');
//       fetchEquipment();
      
//       setSelectedEquipment(null); // Reset selected equipment
//       setBookingDetails({
//         memberId: '',
//         bookingDate: '',
//         startTime: '',
//         endTime: ''
//       }); // Reset booking details
//     } catch (error) {
//       console.error('Error booking equipment:', error);
//       toast.error('Error booking equipment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBookingChange = (e) => {
//     setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
//   };

//   const handleStatusUpdate = async (bookingId, newStatus) => {
//     try {
//       await axios.put(`http://localhost:8081/updateBookingStatus/${bookingId}`, { status: newStatus });
//       toast.success('Booking status updated successfully');
//       // Fetch updated bookings
//     } catch (error) {
//       console.error('Error updating booking status', error);
//       toast.error('Error updating booking status');
//     }
//   };

//   return (
//     <div className="manage-equipment-container">
//       <h2 className="text-2xl font-bold mb-4">Manage Equipment</h2>
//       <div className="equipment-list mb-4">
//         <h3 className="text-xl font-semibold mb-2">Equipment List</h3>
//         {equipmentList.map((equipment) => (
//           <div key={equipment.EquipmentId} className="equipment-item p-4 mb-2 border rounded bg-gray-100">
//             <div className="flex justify-between items-center">
//               <div>
//                 <p><strong>Name:</strong> {equipment.EquipmentName}</p>
//                 <p><strong>Price:</strong> {equipment.price}</p>
//                 <p><strong>Total Units:</strong> {equipment.unit}</p>
//                 <p><strong>Available Units:</strong> {equipment.availableUnits}</p>
//                 <p><strong>Availability:</strong> {equipment.AvailabilityStatus}</p>
//                 <p><strong>Description:</strong> {equipment.description}</p>
//               </div>
//               <button
//                 className={`bg-${equipment.AvailabilityStatus === 'Unavailable' ? 'gray' : 'blue'}-500 text-white px-4 py-2 rounded`}
//                 onClick={() => setSelectedEquipment(equipment)}
//                 disabled={equipment.AvailabilityStatus === 'Unavailable'}
//               >
//                 {equipment.AvailabilityStatus === 'Unavailable' ? 'Unavailable' : 'Select'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedEquipment && (
//         <div className="booking-form mb-4">
//           <h3 className="text-xl font-semibold mb-2">Book Equipment: {selectedEquipment.EquipmentName}</h3>
//           <form>
//             <div className="mb-2">
//               <label className="block text-gray-700">Member ID</label>
//               <input
//                 type="text"
//                 name="memberId"
//                 value={bookingDetails.memberId}
//                 onChange={handleBookingChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">Booking Date</label>
//               <input
//                 type="date"
//                 name="bookingDate"
//                 value={bookingDetails.bookingDate}
//                 onChange={handleBookingChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">Start Time</label>
//               <input
//                 type="time"
//                 name="startTime"
//                 value={bookingDetails.startTime}
//                 onChange={handleBookingChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-700">End Time</label>
//               <input
//                 type="time"
//                 name="endTime"
//                 value={bookingDetails.endTime}
//                 onChange={handleBookingChange}
//                 className="border p-2 rounded w-full"
//               />
//             </div>
//             <button
//               type="button"
//               className={`bg-${loading ? 'gray' : 'green'}-500 text-white px-4 py-2 rounded`}
//               onClick={handleBookEquipment}
//               disabled={loading || selectedEquipment.AvailabilityStatus === 'Unavailable'}
//             >
//               {loading ? 'Booking...' : 'Book Equipment'}
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageEquipment;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const ManageEquipment = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    memberId: '',
    bookingDate: '',
    startTime: '',
    endTime: ''
  });

  useEffect(() => {
    fetchEquipment();
  }, []);

  const fetchEquipment = async () => {
    try {
      const response = await axios.get('http://localhost:8081/getEquipment');
      setEquipmentList(response.data.Equipment);
    } catch (error) {
      console.error('Error fetching equipment:', error);
      toast.error('Error fetching equipment');
    }
  };

  const handleBookEquipment = async () => {
    if (!selectedEquipment) {
      toast.error('Please select equipment to book');
      return;
    }

    if (selectedEquipment.AvailabilityStatus === 'Unavailable') {
      toast.error('This equipment is unavailable for booking');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:8081/api/equipment/book', {
        equipmentId: selectedEquipment.EquipmentId,
        ...bookingDetails
      });
      toast.success('Equipment booked successfully');
      fetchEquipment();
      setSelectedEquipment(null); // Reset selected equipment
      setBookingDetails({
        memberId: '',
        bookingDate: '',
        startTime: '',
        endTime: ''
      }); // Reset booking details
    } catch (error) {
      console.error('Error booking equipment:', error);
      toast.error('Error booking equipment');
    } finally {
      setLoading(false);
    }
  };

  const handleBookingChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleStatusUpdate = async (bookingId, newStatus) => {
    try {
      await axios.put(`http://localhost:8081/updateBookingStatus/${bookingId}`, { status: newStatus });
      toast.success('Booking status updated successfully');
      // Fetch updated bookings
    } catch (error) {
      console.error('Error updating booking status', error);
      toast.error('Error updating booking status');
    }
  };

  return (
    <div className="text-white flex h-screen">
            <div className="w-64 flex-none">
                <AdminHome />
            </div>
            <div className="flex-1 flex flex-col">
                <AdminNavbar />
    <div className="manage-equipment-container bg-gray-900 text-white p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-16 mt-14">Manage Equipment</h2>
      <div className="equipment-list mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipmentList.map((equipment) => (
          <div
            key={equipment.EquipmentId}
            className="equipment-item p-4 border border-slate-700 rounded bg-gray-800 shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <p><strong>Name:</strong> {equipment.EquipmentName}</p>
                <p><strong>Price:</strong> {equipment.price}</p>
                <p><strong>Total Units:</strong> {equipment.unit}</p>
                <p><strong>Available Units:</strong> {equipment.availableUnits}</p>
                <p><strong>Availability:</strong> {equipment.AvailabilityStatus}</p>
                <p><strong>Description:</strong> {equipment.description}</p>
              </div>
              <button
                className={`mt-4 px-4 py-2 rounded text-white ${equipment.AvailabilityStatus === 'Unavailable' ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                onClick={() => setSelectedEquipment(equipment)}
                disabled={equipment.AvailabilityStatus === 'Unavailable'}
              >
                {equipment.AvailabilityStatus === 'Unavailable' ? 'Unavailable' : 'Select'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedEquipment && (
        <div className="booking-form mb-6 bg-gray-800 p-6 rounded shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Book Equipment: {selectedEquipment.EquipmentName}</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-300">Member ID</label>
              <input
                type="text"
                name="memberId"
                value={bookingDetails.memberId}
                onChange={handleBookingChange}
                className="border p-2 rounded w-full bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Booking Date</label>
              <input
                type="date"
                name="bookingDate"
                value={bookingDetails.bookingDate}
                onChange={handleBookingChange}
                className="border p-2 rounded w-full bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Start Time</label>
              <input
                type="time"
                name="startTime"
                value={bookingDetails.startTime}
                onChange={handleBookingChange}
                className="border p-2 rounded w-full bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">End Time</label>
              <input
                type="time"
                name="endTime"
                value={bookingDetails.endTime}
                onChange={handleBookingChange}
                className="border p-2 rounded w-full bg-gray-700 text-white"
              />
            </div>
            <button
              type="button"
              className={`bg-${loading ? 'gray' : 'green'}-500 text-white px-4 py-2 rounded`}
              onClick={handleBookEquipment}
              disabled={loading || selectedEquipment.AvailabilityStatus === 'Unavailable'}
            >
              {loading ? 'Booking...' : 'Book Equipment'}
            </button>
          </form>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ManageEquipment;
