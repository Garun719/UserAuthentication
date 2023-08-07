import React from 'react'
import '../component/assets/css/userform.css'
function UserForm() {
  return (
  <>
  <form className='user-form' >

<h1>User Signup</h1>
   <input type="text" className='input'placeholder='enter your email' />
   <input type="text" className='input'placeholder='enter your password' />

    <div className="form-check text-start my-5 ">
      <input className="form-check-input" type="checkbox" value="remember-me"  id="flexCheckDefault"/>
      <label className="form-check-label" for="flexCheckDefault" > 
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-50 py-2" type="submit">Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
  </form>
  
  </>
  )
}

export default UserForm