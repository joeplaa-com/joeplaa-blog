import React, { ReactElement } from 'react';
import NewTabLink from './newTabLink';
import { QuoteProps } from '../types';

const Quote = ({ quote, source, href, name }: QuoteProps): ReactElement => {
    return (
        <blockquote className="blockquote">
            <p>{quote}</p>
            {name
                ? <footer className="blockquote-footer">
                    <cite title={source}>
                        {name}
                        {source
                            ? href
                                ? <><span> in </span><NewTabLink href={href} text={source} /></>
                                : <><span> in </span>{source}</>
                            : null}
                    </cite>
                </footer>
                : null}
        </blockquote>
    );
};

export default Quote;
