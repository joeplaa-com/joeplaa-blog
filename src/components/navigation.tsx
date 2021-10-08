import React, { ReactElement } from 'react';
import { Nav, NavItem } from 'reactstrap';
import CustomNavLink from './customNavLink';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { NavigationProps } from '../types';

export default function Navigation({ className }: NavigationProps): ReactElement {
    const { pageAboutTitle, pageBlogTitle, pageRecommendedTitle } = useSiteMetadata();
    const { about, blog, recommended } = useSiteNavigation();
    return (
        <Nav className={className} navbar>
            <NavItem>
                <CustomNavLink to={blog}>{pageBlogTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={recommended}>{pageRecommendedTitle}</CustomNavLink>
            </NavItem>
            <NavItem>
                <CustomNavLink to={about}>{pageAboutTitle}</CustomNavLink>
            </NavItem>
        </Nav>
    );
}
