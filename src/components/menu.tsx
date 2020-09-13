import React, { useState } from 'react'
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import Navigation from './navigation'
import Social from './social'
import { settings, siteInfo } from '../lib/data'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color='navbar-gray' light className='shadow' expand={settings.breakpoint}>
            <NavbarBrand href='/'>
                <img alt={siteInfo.SiteName} src={require('../assets/banner-com.png')} height='65px' />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Navigation className='mx-auto' />
                <Social classString='justify-content-center' color='navbar' />
            </Collapse>
        </Navbar>
    );
}
