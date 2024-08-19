import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const AddMember = () => {
    const navigate = useNavigate();
  const [memberData, setMemberData] = useState({
    MemberId: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/addMember', memberData);
      toast.success('Member added successfully');
      // Reset form fields after successful submission
      setMemberData({
        MemberId: '',
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
      console.error('Error adding member', error);
      toast.error('Failed to add member');
    }
  };

  return (
    <div className='text-white flex h-screen'>
      <div className="flex-none w-64">
        <AdminHome />
      </div>
      <div className="flex-1 flex flex-col">
        <AdminNavbar/>
      <div className="p-6 max-w-6xl w-full mx-auto bg-gray-100 shadow-lg rounded-lg my-10">
        <h1 className="text-center font-bold text-black text-3xl mb-6">Add Member</h1>
        <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="MemberId">
              Member ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="MemberId"
              type="text"
              name="MemberId"
              value={memberData.MemberId}
              onChange={handleChange}
              placeholder="Member ID"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="FirstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="FirstName"
              type="text"
              name="FirstName"
              value={memberData.FirstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="LastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="LastName"
              type="text"
              name="LastName"
              value={memberData.LastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              value={memberData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PlanId">
              Plan ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PlanId"
              type="text"
              name="PlanId"
              value={memberData.PlanId}
              onChange={handleChange}
              placeholder="Plan ID"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edate">
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="edate"
              type="date"
              name="edate"
              value={memberData.edate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jdate">
              Join Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jdate"
              type="date"
              name="jdate"
              value={memberData.jdate}
              onChange={handleChange}
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
              value={memberData.gender}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
              value={memberData.age}
              onChange={handleChange}
              placeholder="Age"
              required
            />
          </div>
           
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
              Contact
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="contact"
              type="text"
              name="contact"
              value={memberData.contact}
              onChange={handleChange}
              placeholder="Contact"
              required
            />
          </div>
          
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inamount">
              Initial Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inamount"
              type="number"
              name="inamount"
              value={memberData.inamount}
              onChange={handleChange}
              placeholder="Initial Amount"
              required
            />
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

export default AddMember;
