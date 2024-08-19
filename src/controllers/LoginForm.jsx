import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from 'axios';
import { useAuth } from '../Context/AuthContext'; // adjust the path as needed

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/login', formData);
      if (response.data.Status === 'Success') {
        login();
        navigate('/adminIndex');
        toast.success("Logged In");
      } else {
        setError(response.data.Error);
        toast.error(response.data.Error);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
          Username<sup className="text-red-700">*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.username}
          onChange={changeHandler}
          name="username"
          placeholder="Enter Username"
          className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px]"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-50 mb-1 leading-[1.375rem]">
          Password<sup className="text-red-700">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          name="password"
          placeholder="Enter Password"
          className="bg-gray-800 rounded-[0.5rem] text-gray-50 w-full p-[12px]"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
      </label>
      {error && <p className="text-red-700">{error}</p>}
      <button className="bg-yellow-500 rounded-[8px] font-medium text-gray-900 px-[12px] py-[8px] mt-6">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
