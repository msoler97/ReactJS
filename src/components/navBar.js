import logo from '../assets/logo.jpeg';

let headerStyles = { 
    backgroundColor: '#0a0a0a',
    display: 'flex',
    justifyContent: 'space-between'
}

function NavBar() {
    return (
        <header className="App-header" style={headerStyles}>
            <img src={logo} className="App-logo" alt="logo" style={{width: '10%'}}/>
            <nav className="App-navBar" style={{width: '80%'}}>
                <ul style={{height: '100%', width: '80%', color: 'whitesmoke', listStyle: 'none', fontFamily: 'sans-serif', fontWeight: 'lighter', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <li> <a className="Link-navBar"> HOME </a> </li>
                    <li> <a className="Link-navBar"> PRODUCTOS </a> </li>
                    <li> <a className="Link-navBar"> NOVEDADES </a> </li>
                    <li> <a className="Link-navBar"> CONTACTO </a> </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;