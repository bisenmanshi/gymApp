import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './AdminNavbar';
const AddEquipment = () => {
    const navigate = useNavigate();
  const [equipmentData, setEquipmentData] = useState({
    EquipmentId: '',
    EquipmentName: '',
    price: '',
    unit: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipmentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/addEquipment', equipmentData);
      toast.success('Equipment added successfully');
      // Reset form fields after successful submission
      setEquipmentData({
        EquipmentId: '',
        EquipmentName: '',
        price: '',
        unit: '',
        date: '',
        description: ''
      });
    } catch (error) {
      console.error('Error adding equipment', error);
      toast.error('Failed to add equipment');
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
        <h1 className="text-center font-bold text-black text-3xl mb-6">Add Equipment</h1>
        <form onSubmit={handleSubmit} className="space-y-6 p-6 rounded-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EquipmentId">
              Equipment ID
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="EquipmentId"
              type="text"
              name="EquipmentId"
              value={equipmentData.EquipmentId}
              onChange={handleChange}
              placeholder="Equipment ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="EquipmentName">
              Equipment Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="EquipmentName"
              type="text"
              name="EquipmentName"
              value={equipmentData.EquipmentName}
              onChange={handleChange}
              placeholder="Equipment Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              name="price"
              value={equipmentData.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">
              Unit
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="unit"
              type="text"
              name="unit"
              value={equipmentData.unit}
              onChange={handleChange}
              placeholder="Unit"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="date"
              type="date"
              name="date"
              value={equipmentData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              value={equipmentData.description}
              onChange={handleChange}
              placeholder="Description"
              required
            ></textarea>
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

export default AddEquipment;
