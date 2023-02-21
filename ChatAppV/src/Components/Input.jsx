import React from 'react'
import {FcGallery} from 'react-icons/fc'
import {IoMdAttach} from 'react-icons/io'
function Input() {
  return (
    <div className='input'>
    <input type='text' placeholder='Type something...'/>
    <div className="send">
   < IoMdAttach/>
      <input type='file' style={{ display:'none'}} id='file'/>
     <label htmlFor='file'>
     <FcGallery/>

     </label>
     <button>send</button>
    </div>
    </div>
  )
}

export default Input
