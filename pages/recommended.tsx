import { NextSeo } from 'next-seo'
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap'
import Layout from '../src/components/layout'
import { data, siteInfo, navigation } from '../src/lib/data'

export default function Recommended() {
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
                            alt: 'joeplaa website blog',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.RecommendedDescription} siteTitle={siteInfo.RecommendedTitle + siteInfo.PageTitle} >
                <Container>
                    <Card className='mt-3'>
                        <CardBody>
                            <CardTitle><h5>{data.Recommended}</h5></CardTitle>
                            <CardText>
                                The ideas I write about in my blog all started somewhere. Mostly after I&apos;ve seen a video on YouTube or read a book. In the recommended section I share the most influential and thought-provoking ones I&apos;ve encountered.
                            </CardText>
                            <CardText>
                                That doesn&apos;t mean I (still) fully support the ideas put forward in them. I grow, learn and change my mind and I&apos;ll very probably have to keep doing that and I hope you will join me.
                            </CardText>
                        </CardBody>
                    </Card>
                    Recommended books and videos
                </Container>
            </Layout>
        </>
    )
}
