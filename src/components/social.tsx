import React from 'react'
import { IconContext } from 'react-icons'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaGoodreads } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'
import NewTabLink from './newTabLink'
import { urls } from '../utils/data'
import linkColor from '../utils/linkColor'
import { SocialLinkProps } from '../types'

export default function Header({ color, key, size }: SocialLinkProps) {
    return (
        <IconContext.Provider value={{ size: size, style: { margin: '.5rem' } }}>
            <div className='d-flex justify-content-center flex-wrap'>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.linkedin} key={urls.linkedin + ' ' + key}><FaLinkedin /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.github} key={urls.github + ' ' + key}><FaGithub /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={'mailto:' + urls.email} key={urls.email + ' ' + key}><MdMail /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.facebook} key={urls.facebook + ' ' + key}><FaFacebook /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.instagram} key={urls.instagram + ' ' + key}><FaInstagram /></NewTabLink>
                <NewTabLink className={linkColor(color) + ' nav-padding-social'} href={urls.goodreads} key={urls.goodreads + ' ' + key}><FaGoodreads /></NewTabLink>
            </div>
        </IconContext.Provider>
    );
}
