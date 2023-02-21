import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img
        src='https://randomuser.me/api/portraits/women/90.jpg'
        alt='img'
        />
        
        <div className="userChatInfo">
          <span>
            Shalini
          </span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Search
