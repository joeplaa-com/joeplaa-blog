import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './footer'
import Header from './header'
import { LayoutProps } from '../types'

// Sticky footer: https://css-tricks.com/couple-takes-sticky-footer/
export default function Layout({ children }: LayoutProps) {
    return (
        <div className='page-wrapper'>
            <Helmet>
                <noscript>
                    {`<div style={{ height: '100vw', width: '100%' }}>
                        <div style={{ padding: '20px', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                            <h1>Oops!!!!</h1>
                            <p>This website only works with JavaScript enabled.</p>
                            <p>This website explains <a href="https://www.enable-javascript.com/nl/">how to enable JavaScript in your browser.</a></p>
                        </div>
                    </div>`}
                </noscript>
                <meta httpEquiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />
            </Helmet>
            <Header />
            <main className='content'>{children}</main>
            <Footer className='footer-background' />
        </div>
    );
}