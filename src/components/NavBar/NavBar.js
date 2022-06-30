import logo from '../../assets/logo.png'
import CartIcon from '../CartIcon/CartIcon.js'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <header className="App-header">
            <NavLink to="/" style={{width: '10%'}}><img src={logo} className="App-logo" alt="logo" style={{maxWidth: '90px', marginLeft: '20px'}}/> </NavLink>
            <nav className="App-navBar" style={{width: '80%'}}>
                <ul className="Navbar-links">
                    <li> <NavLink className="Link-navBar" to="/"> HOME </NavLink> </li>
                    <li> <NavLink className="Link-navBar" to="/products"> PRODUCTOS </NavLink> 
                    <ul>
                         <li> <NavLink to="/category/1"> Vinos tintos </NavLink> </li>
                         <li> <NavLink to="/category/2"> Vinos blancos </NavLink> </li>
                         <li> <NavLink to="/category/3"> Vinos rosados </NavLink> </li>
                         <li> <NavLink to="/category/4"> Espumantes </NavLink> </li>
                    </ul></li>
                    <li> <NavLink className="Link-navBar" to="/news"> NOVEDADES </NavLink> </li>
                    <li> <NavLink className="Link-navBar" to="/contact"> CONTACTO </NavLink> </li>
                </ul>
            </nav>
            <NavLink to="/cart"> <CartIcon/> </NavLink>
        </header>
    )
}

export default NavBar;