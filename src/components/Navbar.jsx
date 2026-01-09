import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-left">
                <Link to="/" className="navbar-logo">GOWRISHANKAR</Link>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); alert('Available upon request'); }}>Services</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0, document.body.scrollHeight) }}>About</a></li>
                </ul>
            </div>

            <div className="navbar-right">
                <Search className="icon" />
                <Bell className="icon" />
                <div className="profile-icon">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
