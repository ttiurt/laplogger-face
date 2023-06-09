// npm modules
import { NavLink } from 'react-router-dom'



// types
import { User } from '../../types/models'

interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <nav>
      <NavLink className='navLink' to="/"><img src="/track.png" alt="LL-Logo" /></NavLink>
      {user ?
        <ul>
          <li><NavLink className='navLink' to="/races">Races</NavLink></li>
          {/* <li className='navProf'><NavLink to="/profiles">Profiles</NavLink></li> */}
          <li className='navChng'><NavLink className='navLink' to="/auth/change-password">Change Password</NavLink></li>
          <li className='navLogOut'><NavLink className='navLink' to="" onClick={handleLogout}>LOG OUT</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink className='navLink' to="/auth/login">Log In</NavLink></li>
          <li><NavLink className='navLink' to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
