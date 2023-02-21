

import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './style.scss'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
//import { AuthContext } from './AuthContext'
import { useContext } from 'react'
function App() {
 // const {currentUser} = useContext(AuthContext)
  return (
  <>
<BrowserRouter>
<Routes>
  <Route path='/'>
    <Route index element={<Home/>} />
    <Route path='login'element={<Login/>} />
    <Route path='register'element={<Register/>} />
  </Route>
</Routes>
</BrowserRouter>

  </>
  )
}

export default App
