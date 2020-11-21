import React from 'react'
import { Location } from '@reach/router'
import { Link as GatsbyLink } from 'gatsby'
import { LinkProps } from '../types'

export const Link = ({ children, to, activeClassName, partiallyActive, state, ...other }: LinkProps) => {
    // Tailor the following test to your environment.
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = /^\/(?!\/)/.test(to)

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <Location>
                {({ location }) => (
                    <GatsbyLink
                        to={to}
                        activeClassName={activeClassName}
                        partiallyActive={partiallyActive}
                        //make sure user's state is not overwritten
                        state={{ prevPathname: location.pathname, ...state }}
                        {...other}
                    >
                        {children}
                    </GatsbyLink>
                )}
            </Location>
        )
    }
    return (
        <a href={to} {...other}>
            {children}
        </a>
    )
}