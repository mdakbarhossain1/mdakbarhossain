import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);



    return (

        <div className="header-fixed">
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <i class="fas fa-bars" onClick={showSidebar}></i>
                </Link>
                <div className='menu-bars download'>
                    <a href="https://drive.google.com/file/d/12Zgq7DdI8wx06cbdiFP9LNsVtpFJygIb/view?usp=sharing" download target="/_blank" >Resume <i class="fas fa-cloud-download-alt"></i></a>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <i class="far fa-times-circle"></i>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/home">
                            <i class="fas fa-home"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/projects">
                            <i class="fab fa-react"></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/about">
                            <i class="fas fa-user-alt"></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/blog">
                            <i class="fab fa-blogger-b"></i>
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/contact">
                            <i class="fas fa-address-book"></i>
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;