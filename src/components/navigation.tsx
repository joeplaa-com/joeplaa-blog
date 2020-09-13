
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

    return (
        <Nav className={className} navbar pills>
            <NavItem>
                <NavLink href={navigation.home} active={activeLink(navigation.home)}>{data.Home}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.blog} active={activeLink(navigation.blog)}>{data.Blog}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.portfolio} active={activeLink(navigation.portfolio)}>{data.Portfolio}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.howto} active={activeLink(navigation.howto)}>{data.Howto}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={navigation.recommended} active={activeLink(navigation.recommended)}>{data.Recommended}</NavLink>
            </NavItem>
        </Nav>
    );
}