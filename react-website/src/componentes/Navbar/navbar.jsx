import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import { Button } from '../Button/button';

function Navbar() {
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = ()=> {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
       <Fragment>
           <nav className="navbar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-typo3"></i>
                   </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className= {click ? 'fas fa-times' : 'fa fa-bars'}></i>
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className="nav-item">
                           <Link to="/" className="nav-links" onClick={closeMobileMenu}>Inicio</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/servicios" className="nav-links" onClick={closeMobileMenu}>Servicios</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/productos" className="nav-links" onClick={closeMobileMenu}>Productos</Link>
                       </li>
                       <li className="nav-item">
                           <Link to="/signUp" className="nav-links-mobile" onClick={closeMobileMenu}>Registrarse</Link>
                       </li>
                   </ul>
                   {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
               </div>
           </nav>
       </Fragment>
    )
}

export default Navbar


