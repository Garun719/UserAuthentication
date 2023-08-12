import React from 'react'
import '../component/assets/css/userform.css'

function UserForm() {
  return (
    <div className='user-form-container'>
      <form className='user-form'>
        <h1 className='form-title'>Signup</h1>
        <input type="text" className='input' placeholder='Enter your name' />
        <input type="text" className='input' placeholder='Enter your email' />
        <input type="password" className='input' placeholder='Enter your password' />
        <button className="btn btn-primary w-50 py-2" type="submit">SignUp</button>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        <p><a href="">Login here?</a></p>
      </form>
    </div>
  )
}

export default UserForm;
