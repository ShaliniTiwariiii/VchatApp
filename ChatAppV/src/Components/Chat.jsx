import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Input from './Input'
import Messages from './Messages'

function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>shalini tiwati k</span>
        <div className="chatIcons">
      <AiFillCamera/>
      <AiOutlineUserAdd/>
      <FiMoreHorizontal/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat
