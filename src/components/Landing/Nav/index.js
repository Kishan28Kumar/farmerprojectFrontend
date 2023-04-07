import './index.css';
import Logo from '../../../assets/logo.png'

import {FaBars} from 'react-icons/fa';

function Nav(){

    function handleNav(){
        const navList = document.querySelector('.navbar-list');
        navList.classList.toggle('nav-active');
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-content-container">
                    <h1 className="logo-h1"><span>F</span>armer Market</h1>
                    <ul className="navbar-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <button onClick={handleNav} className="burger-menu">
                        <FaBars />
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav;