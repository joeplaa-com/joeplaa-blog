import React, { useState, useEffect } from 'react'
import { Collapse, Navbar, NavbarToggler } from 'reactstrap'
import { Link } from './customLink'
import Navigation from './navigation'
import BannerBlog from '../svg/banner-blog.svg'
import { navigation, settings } from '../utils/data'

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    // *** Get scroll position and change navbar styling accordingly
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarActive = scrollPosition > 10 ? 'active shadow navbar-light' : isOpen ? 'active navbar-light' : 'navbar-dark';
    // ***

    return (
        <Navbar className={navbarActive + ' ' + 'fixed-top'} expand={settings.breakpoint}>
            <div className='d-flex align-items-center p-0'>
                <Link to={navigation.home}>
                    <div className="mr-2"><BannerBlog height="55px" /></div>
                </Link>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className='ml-auto' />
            </Collapse>
        </Navbar>
    );
}