import React, { useState } from 'react';
import '../assets/css/userform.css';
import { Link , Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';



function UserForm() {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/signup", userData);

      if (response.status === 200) {
        // Show success alert
        swal("Success", "User signed up successfully!", "success");
        navigate("/home")
        

      } else {
        // Show error alert
        swal("Error", "An error occurred during signup", "error");
      }
    } catch (error) {
      console.log(error);
      // Show error alert
      swal("Error", "An error occurred during signup", "error");
    }
  };

  return (
    <div className='user-form-container'>
      <form className='user-form' onSubmit={handleSubmit}>
        
        <h1 className='form-title'>Signup</h1>
        <input
          type="text"
          className='input'
          placeholder='Enter your name'
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className='input'
          placeholder='Enter your email'
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          className='input'
          placeholder='Enter your password'
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary w-50 py-2" type="submit">SignUp</button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        <p><Link to={"/"}>Already have an account?</Link></p>
      
      </form>
    </div>
  );
}

export default UserForm;
