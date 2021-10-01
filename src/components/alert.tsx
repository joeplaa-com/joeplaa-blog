import React, { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { MdCheck, MdError, MdInfo, MdWarning } from 'react-icons/md';

interface Props {
    children: ReactElement[],
    type: 'error' | 'info' | 'success' | 'warning'
}

const Alert = ({ type, children }: Props): ReactElement => {
    let className = 'alert ';
    let icon;
    switch (type) {
        case 'error': className += 'alert-error'; icon = <MdError />; break;
        case 'info': className += 'alert-info'; icon = <MdInfo />; break;
        case 'success': className += 'alert-success'; icon = <MdCheck />; break;
        case 'warning': className += 'alert-warning'; icon = <MdWarning />; break;
    }
    return (
        <div className={className}>
            <div><IconContext.Provider value={{ size: '2rem', style: { marginRight: '.5rem' } }}>{icon}</IconContext.Provider></div>
            <div>{children}</div>
        </div>
    );
};

export default Alert;
