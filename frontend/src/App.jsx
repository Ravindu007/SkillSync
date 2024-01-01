import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CompanyProfile from './pages/CompanyProfile'
import UserProfile from './pages/UserProfile'
import Navbar from './components/navbar/Navbar'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/company/:id' element={<CompanyProfile/>}></Route>
          <Route path='/user/:id' element={<UserProfile/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
