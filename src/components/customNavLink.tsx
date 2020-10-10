import React from 'react'
import { Link } from 'gatsby'
import { NavLink } from 'reactstrap'
import { CustomNavLinkProps } from '../types'

const CustomNavLink = (props: CustomNavLinkProps) => {
    if (!props.href) {
        return (
            <Link {...props} className={'nav-link'} title={props.title ? props.title : undefined}>
                {props.children ? props.children : null}
            </Link>
        )
    } else {
        return (
            <NavLink href={props.href}>
                {props.children}
            </NavLink>
        )
    }
}

export default CustomNavLink