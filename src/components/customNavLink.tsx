import React, { ReactElement } from 'react';
import { NavLink } from 'reactstrap';
import { Link } from './customLink';
import { CustomNavLinkProps } from '../types';

const CustomNavLink = (props: CustomNavLinkProps): ReactElement => {
    if (!props.href) {
        return (
            <Link {...props} className={'nav-link'} title={props.title ? props.title : undefined}>
                {props.children ? props.children : null}
            </Link>
        );
    } else {
        return (
            <NavLink href={props.href}>
                {props.children}
            </NavLink>
        );
    }
};

export default CustomNavLink;
