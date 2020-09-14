
import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import { useRouter } from 'next/router'
import { data, navigation } from '../lib/data'

export default function Navigation({ className }: { className: string }) {
    const router = useRouter();

    function activeLink(href) {
        const path = router.pathname;
        return (path === href)
    }

    function activeClass(href) {
        const path = router.pathname;
        const result = path === href ? 'linkNav-active' : 'linkNav';
        return result
    }

    return (
        <Nav className={className} navbar>
            <NavItem>
                <NavLink href={navigation.blog} className={activeClass(navigation.blog)} active={activeLink(navigation.blog)}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.recommended} className={activeClass(navigation.recommended)} active={activeLink(navigation.recommended)}>{data.Recommended}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.home} className={activeClass(navigation.home)} active={activeLink(navigation.home)}>{data.Websites}</NavLink>
            </NavItem>
        </Nav>
    );
}