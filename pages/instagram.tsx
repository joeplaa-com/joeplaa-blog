import { NextSeo } from 'next-seo'
import { Container } from 'reactstrap'
import Layout from '../src/components/layout'
import { siteInfo, navigation } from '../src/lib/data'

export default function Instagram() {
    return (
        <>
            <NextSeo
                title={siteInfo.HomeTitle}
                titleTemplate={siteInfo.SiteTitle + ' | %s'}
                description={siteInfo.HomeDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + navigation.home,
                    title: siteInfo.HomeTitle,
                    description: siteInfo.HomeDescription,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-blog.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa blog banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.InstagramDescription} siteTitle={siteInfo.InstagramTitle + siteInfo.PageTitle} >
                <Container>
                </Container>
            </Layout>
        </>
    )
}
