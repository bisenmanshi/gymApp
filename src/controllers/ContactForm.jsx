import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    mobile_no: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/api/contact', formData);
      setResponseMessage('Your message has been sent successfully!');
      setFormData({ FirstName: '', LastName: '', email: '', mobile_no: '', message: '' });
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="w-[900px] border border-slate-600 mx-auto bg-slate-800 p-8 rounded-md shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="block text-white font-bold mb-2" htmlFor="FirstName">First Name</label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="block text-white font-bold mb-2" htmlFor="LastName">Last Name</label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="mobile_no">Mobile</label>
          <input
            type="text"
            id="mobile_no"
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleChange}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border bg-gray-900 border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
        >
          Submit
        </button>
        {responseMessage && <p className="mt-4 text-center text-white">{responseMessage}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
