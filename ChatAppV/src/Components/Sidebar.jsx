import React from 'react'
import Search from '../Components/Search'
import Navbar from '../Components/Navbar'
import Chats from './Chats'
function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar

