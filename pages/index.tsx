import React, { useEffect } from 'react'
import Router from 'next/router'
import { BlogJsonLd } from 'next-seo'
import { navigation, siteInfo } from '../src/lib/data'

export default function Index() {
    useEffect(() => {
        const { pathname } = Router;
        if (pathname === '/') {
            Router.push(navigation.home);
        }
    }, []);
    return (
        <BlogJsonLd
            datePublished='08/30/2020'
            dateModified='08/30/2020'
            authorName={siteInfo.AuthorName}
            title={siteInfo.SiteTitle}
            description={siteInfo.SiteDescription}
            url={process.env.NEXT_PUBLIC_URL}
            images={[
                process.env.NEXT_PUBLIC_URL + '/og_logo.png',
            ]}
        />
    );
}
