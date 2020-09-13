import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { IconContext } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import { urls } from '../lib/data'
import linkColor from '../lib/linkColor'
import { LinkProps } from '../types'

export default function Header({ classString, color }: LinkProps) {
    return (
        <IconContext.Provider value={{ size: '1.25rem' }}>
            <Nav className={classString} nav='true'>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.facebook}><FaFacebook /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.instagram}><FaInstagram /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.linkedin}><FaLinkedin /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.github}><FaGithub /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.goodreads}><FaGoodreads /></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={linkColor(color) + ' nav-padding-social'} href={urls.mailto}><MdMail /></NavLink>
                </NavItem>
            </Nav>
        </IconContext.Provider>
    );
}
