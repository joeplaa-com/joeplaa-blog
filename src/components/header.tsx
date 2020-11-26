import React from 'react'
import Menu from './menu'
import { NavbarProps } from '../types'

export default function Header ({ navbarLightText }: NavbarProps) {
    return (
        <header>
            <Menu navbarLightText={navbarLightText} />
        </header>
    )
}