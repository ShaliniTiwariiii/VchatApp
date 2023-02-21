import React from 'react'

function Navbar() {
  return (
    <div className='navbar' >
      <span className='logo'>
       chat
      </span>
      <div className='user'>
      {/* <img src='https://randomuser.me/api/portraits/women/90.jpg' alt=''/> */}
      <span>Shalini</span>
      <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
