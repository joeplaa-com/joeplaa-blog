import React from 'react'
import NewTabLink from './newTabLink'
import { QuoteProps } from '../types'

const Quote = ({ quote, source, href, name, profile }: QuoteProps) => {
    return (
        <blockquote className="blockquote">
            <p>{quote}</p>
            <footer className="blockquote-footer"><cite title={source}>{profile ? <NewTabLink href={profile} text={name} /> : name} in <NewTabLink href={href} text={source} /></cite></footer>
        </blockquote>
    )
}

export default Quote;