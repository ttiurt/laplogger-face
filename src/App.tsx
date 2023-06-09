// npm modules 
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'




// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import AllRaces from './pages/AllRaces/AllRaces'




// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'




// services
import * as authService from './services/authService'
// import * as profileService from './services/profileService'




// styles
import './App.css'




// types
import { User } from './types/models'
// ^^ DONT FORGET TO BRING PROFILE BACK




function App(): JSX.Element {
  const [user, setUser] = useState<User | null>(authService.getUser())
  const navigate = useNavigate()
  




  // vv FOR LATER ADMIN PERMS vv

  // const [profiles, setProfiles] = useState<Profile[]>([])
  // useEffect((): void => {
  //   const fetchProfiles = async (): Promise<void> => {
  //     try {
  //       const profileData: Profile[] = await profileService.getAllProfiles()
  //       setProfiles(profileData)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   user ? fetchProfiles() : setProfiles([])
  // }, [user])
  





  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/races"
          element={
            <ProtectedRoute user={user}>
              <AllRaces user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
