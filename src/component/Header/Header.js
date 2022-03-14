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
                    <i class="bx bx-menu" onClick={showSidebar}></i>
                </Link>
                <div className='menu-bars download'>
                    <a href="https://drive.google.com/file/d/12Zgq7DdI8wx06cbdiFP9LNsVtpFJygIb/view?usp=sharing" download target="/_blank" >Resume <i class='bx bx-download' ></i></a>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <i class="bx bx-x-circle"></i>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/home">
                            <i class="bx bx-home"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/projects">
                            <i class='bx bxl-react' ></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/about">
                            <i class='bx bx-user-circle' ></i>
                            <span>About</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/blog">
                        <i class='bx bxl-blogger' ></i>
                            <span>Blog</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to="/contact">
                        <i class='bx bxs-contact' ></i>
                            <span>Contact Us</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;