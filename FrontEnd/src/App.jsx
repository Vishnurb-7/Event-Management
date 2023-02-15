import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import UserLandingPage from "./pages/UserLandingPage"
import Login from "./pages/Login"
import AdminLogin from './pages/adminPage/AdminLogin'
import AdminLanding from './pages/adminPage/AdminLanding'
import ProviderLogin from "./pages/providerPage/ProviderLogin"
import ProviderProfile from "./pages/providerPage/ProviderProfile"
import ProviderSignup from './pages/providerPage/ProviderSignup'
import EditProfile from './pages/providerPage/EditProfile'
import Messages from './components/providerComponents/Messages'
import ProviderChat from './pages/providerPage/ProviderChat'
import UserManagement from './pages/adminPage/UserManagement'
import Chat from "./pages/Chat"
import Providers from "./pages/Providers"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import SingleProvider from "./pages/SingleProvider"
const App = () => {
  return (
   <BrowserRouter>
        <Routes>
          <Route path='/' element = { <UserLandingPage />} />
          <Route path='login' element = {<Login /> }/>
          <Route path='signup' element = {<Signup/> }/>
          <Route path='providers' element = {<Providers/> }/>
          <Route path='provider' element = {<SingleProvider/>}/>
          <Route path='chat' element ={<Chat/>}/>
          <Route path='profile' element = {<Profile/>}/>
          <Route path='ProviderLogin' element = {<ProviderLogin/>}/>
          <Route path='ProviderSignup' element = {<ProviderSignup/>}/>
          <Route path='ProviderProfile' element = {<ProviderProfile/>}/>
          <Route path='EditProfile' element = {<EditProfile/>}/>
          <Route path='messages' element ={<Messages/>}/>
          <Route path='ProviderChat' element = {<ProviderChat/>}/>
          <Route path='AdminLogin' element = {<AdminLogin/>}/>
          <Route path='AdminLanding' element = {<AdminLanding/>}/>
          <Route path='UserManagement' element = {<UserManagement/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
