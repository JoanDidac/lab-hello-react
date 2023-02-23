import logo from '../images/ironhack-logo-xs.png';
import menu from '../images/menu-top-xs.png'


const Navbar = () => {

    return (
 <nav className='navbar'>
   <a href='https://www.ironhack.com/en/barcelona?utm_campaign=BCN_Spain_Barcelona_Global_Search_Brand_EN&utm_source=google&utm_medium=cpc&utm_content=search-brand&utm_term=ironhack&gclid=Cj0KCQiAutyfBhCMARIsAMgcRJTIlrXGGw55pODp3Kl0kad-ZDDeNhBaRuzNXpvOU59paMfGMd6K0xgaAkeBEALw_wcB'><img src={logo} className="App-menu" alt="logo" /></a>
   <a href='#'><img src={menu} className="App-menu" alt="logo" /></a>

    </nav>
    )
}

export default Navbar;