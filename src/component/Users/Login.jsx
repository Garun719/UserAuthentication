
import React, { useState } from 'react';
import '../assets/css/userform.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

function UserForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
const navigate  = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signin', {
        email,
        password,
      });

      if (response.status === 200) {
        // Show success alert
        swal("Success", "User sign In successfully!", "success");
        navigate("/home")
      } else {
        // Show error alert
        swal("Error", "An error occurred during sign In", "error");
      }
    } catch (error) {
      console.log(error);
      // Show error alert
      swal("Error", "An error occurred during sig In", "error");
    }
  };

  return (
    <div className='user-form-container'>
      <form className='user-form' onSubmit={handleSignIn}>
        <h1 className='form-title'>LOGIN</h1>
        <input
          type='text'
          className='input'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='input'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='btn btn-primary w-50 py-2' type='submit'>
          Sign In
        </button>
        <p className='mt-5 mb-3 text-body-secondary'>&copy; 2017–2023</p>
        <p>
          Don't have an account? <Link to={'/signup'}>Sign Up</Link>
        </p>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default UserForm;

