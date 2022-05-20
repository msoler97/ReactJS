import logo from '../../assets/logo.jpeg'
import CartIcon from '../CartIcon/CartIcon.js'
import { NavLink } from 'react-router-dom'

let headerStyles = { 
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

function NavBar() {
    return (
        <header className="App-header" style={headerStyles}>
            <NavLink to="/" style={{width: '10%'}}><img src={logo} className="App-logo" alt="logo"/> </NavLink>
            <nav className="App-navBar" style={{width: '80%'}}>
                <ul style={{height: '100%', width: '90%', color: 'whitesmoke', listStyle: 'none', fontFamily: 'sans-serif', fontWeight: 'lighter', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <li> <NavLink className="Link-navBar" to="/"> HOME </NavLink> </li>
                    <li> <NavLink className="Link-navBar" to="/products"> PRODUCTOS </NavLink> </li>
                    <li> <NavLink className="Link-navBar" to="/news"> NOVEDADES </NavLink> </li>
                    <li> <NavLink className="Link-navBar" to="/contact"> CONTACTO </NavLink> </li>
                </ul>
            </nav>
            <NavLink to="/cart"> <CartIcon count={'4'}/> </NavLink>
        </header>
    )
}

export default NavBar;