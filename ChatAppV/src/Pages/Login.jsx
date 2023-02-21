import React from 'react'
import {FcGallery} from 'react-icons/fc'
function Login() {
  return (
    <div className='formContainer'>
   <div className='formWrapper'>
    <span className='logo'>Lama Chat</span>
    <span className='title'>Register</span>
   <form>
  
    <input type='email' placeholder='email'/>
    <input type='password' placeholder='password'/>
     <input  type='file' style={{display:'none'}} id='file'/>
    
     <button>Sign in</button>
  </form>
  <p>You don't have an account? Register</p>
   </div>

    </div>
  )
}

export default Login

