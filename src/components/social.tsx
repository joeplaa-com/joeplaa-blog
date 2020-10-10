import React from 'react'
import { IconContext } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import NewTabLink from './newTabLink'
import { urls } from '../utils/data'
import linkColor from '../utils/linkColor'
import { SocialLinkProps } from '../types'

export default function Header({ color, size }: SocialLinkProps) {
    return (
        <IconContext.Provider value={{ size: size, style: { margin: '.5rem' } }}>
            <div className='d-flex justify-content-center'>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.linkedin}><FaLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.github}><FaGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + urls.email}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.facebook}><FaFacebook /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.instagram}><FaInstagram /></NewTabLink>
            </div>
        </IconContext.Provider>
    );
}
