import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png'


const Navbar = () => {

    return (
 <nav className='navbar'>
   <a href='#'><img src={logo} className="App-logo" alt="logo" /></a>
   <a href='#'><img src={menu} className="App-menu" alt="logo" /></a>

    </nav>
    )
}

export default Navbar;