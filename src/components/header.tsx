import React, { ReactElement } from 'react';
import Menu from './menu';
import { NavbarProps } from '../types';

export default function Header({ navbarLightText }: NavbarProps): ReactElement {
    return (
        <header>
            <Menu navbarLightText={navbarLightText} />
        </header>
    );
}
