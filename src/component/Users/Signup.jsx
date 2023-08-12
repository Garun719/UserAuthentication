import React, { useState } from 'react';
import '../assets/css/userform.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';


function UserForm() {
  const [userData, setUserData] = useState({name: '', email: '', password: '' });

  const handleInputChange = event => {
    const { name, value } = event.target;

    // console.log(event.target.value)

    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Now userData object contains the user's data
    console.log("userData", userData);

    const response = async()=>{
      await axios.post("http://localhost:5000/signup", userData).then((res)=>{
        console.log(res.data)

      }).catch((err)=>{
        console.log(err)
      })
    }

    response()

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
