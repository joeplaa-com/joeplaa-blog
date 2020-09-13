/* eslint-disable no-undef */
import { siteInfo } from './data'

export default {
    openGraph: {
        type: 'website',
        url: process.env.NEXT_PUBLIC_URL + '/',
        locale: 'en_US',
        site_name: siteInfo.SiteName,
        title: siteInfo.SiteTitle,
        titleTemplate: siteInfo.SiteTitle + ' | %s',
        description: siteInfo.SiteDescription,
        images: [
            {
                url: process.env.NEXT_PUBLIC_URL + '/og_logo.png',
                width: 300,
                height: 300,
                alt: 'joeplaa logo',
            }
        ]
    }
};