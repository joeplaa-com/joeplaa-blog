import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import CustomNavLink from './customNavLink'
import { metaData, navigation } from '../utils/data'
import { NavigationProps } from '../types'

export default function Navigation({ className }: NavigationProps) {

    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={navigation.blog}>{metaData.BlogTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.recommended}>{metaData.RecommendedTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={navigation.about}>{metaData.AboutTitle}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}