import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const AddPlan = () => {
    const navigate = useNavigate();
  const [planData, setPlanData] = useState({
    PlanId: '',
    PlanName: '',
    amount: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/addPlan', planData);
      toast.success('Plan added successfully');
      // Reset form fields after successful submission
      setPlanData({
        PlanId: '',
        PlanName: '',
        amount: '',
        duration: ''
      });
    } catch (error) {
      console.error('Error adding plan', error);
      toast.error('Failed to add plan');
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
        <h1 className="text-center font-bold text-black text-3xl mb-6">Add Plan</h1>
        <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PlanId">
              Plan ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PlanId"
              type="text"
              name="PlanId"
              value={planData.PlanId}
              onChange={handleChange}
              placeholder="Plan ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="PlanName">
              Plan Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="PlanName"
              type="text"
              name="PlanName"
              value={planData.PlanName}
              onChange={handleChange}
              placeholder="Plan Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="amount"
              type="number"
              name="amount"
              value={planData.amount}
              onChange={handleChange}
              placeholder="Amount"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Duration
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="duration"
              type="text"
              name="duration"
              value={planData.duration}
              onChange={handleChange}
              placeholder="Duration (e.g., 6 months)"
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

export default AddPlan;
