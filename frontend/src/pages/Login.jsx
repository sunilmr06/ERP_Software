import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/",
        formData
      );

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

    //   alert("Login Successful");

      navigate("/Home");

    } catch (error) {

      alert("Invalid Credentials");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold text-blue-600">
            Login Page
          </h1>

          <p className="text-gray-500 mt-2">
            {/* SMR ERP */}
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}