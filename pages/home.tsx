import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Img from 'react-optimized-image'
import { Card, CardBody, CardColumns, CardTitle, CardText, Col, Container, Row } from 'reactstrap'
import Layout from '../src/components/layout'
import { data, siteInfo, navigation } from '../src/lib/data'
import { getAge } from '../src/lib/getAge'

export default function Home() {
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
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa banner',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-com.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa.com banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.HomeDescription} siteTitle={siteInfo.HomeTitle + siteInfo.PageTitle} >
                <div className='image-container shadow'>
                    <Img
                        src={require('../src/assets/home-banner-beach.jpg')}
                        alt={siteInfo.HomeTitle + '-banner'}
                        className='img-fluid'
                    />
                    <div className='overlay'>
                        <h1>{siteInfo.HomeTitle}</h1>
                    </div>
                </div>
                <Container fluid>
                    <CardColumns>
                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>What is Joeplaa?</h4></CardTitle>
                                <CardText>
                                    Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: <strong>Joe</strong>p van de <strong>Laa</strong>rschot.
                                    Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle @joeplaa everywhere on the web. So obviously I had to use for this website too.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>Who is Joeplaa?</h4></CardTitle>
                                <CardText>
                                    I&apos;m Joep, a {getAge('1985/01/14')} year old guy, trying to figure out what he wants to achieve with his time in the sun*.
                                    Currently I live in <a href='https://en.wikipedia.org/wiki/Eindhoven' target='_blank' rel='noopener noreferrer'>Eindhoven in The Netherlands</a>, where I went to <a href='https://www.tue.nl/' target='_blank' rel='noopener noreferrer'>university</a> to study mechanical engineering.
                                    After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <a href='https://www.jodibooks.com' target='_blank' rel='noopener noreferrer'>jodiBooks</a>.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card outline color='primary'>
                            <CardBody>
                                <CardTitle><h4>Why joeplaa.com?</h4></CardTitle>
                                <CardText>
                                    I&apos;ve originally started joeplaa.com as my personal blog. I wanted to have a place where I could write about anything that I was interested in and you can still find my blog here.
                                </CardText>
                                <CardText>
                                    More importantly, with this new website, joeplaa.com 2.0, I want to show what I can do. It both is and contains my portfolio. Have a look around and let me know if you like my work.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <CardTitle><h5><Link href={navigation.blog}><a>{data.Blog}</a></Link></h5></CardTitle>
                                <CardText>
                                    The reason I started this website: I wanted a blog. When starting the focus was on goals, mindset, nutrition and health. Figuring out what I have to do and eat to stay healthy, however, has proven to be a big challenge.
                                    A challenge I don&apos;t have enough time for at the moment. But there&apos;s a lot of stuff I&apos;m trying to understand about myself, humanity, the world and the universe and I learned that talking about them or writing them down really helps.
                                    Giving words to my thought makes them more tangible, concrete and well better. They get more articulated and thought-through.
                                </CardText>
                                <CardText>
                                    Subjects range from diet to mindset and psychology to sociology and politics.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <CardTitle><h5><Link href={navigation.portfolio}><a>{data.Portfolio}</a></Link></h5></CardTitle>
                                <CardText>
                                    Together with Diana I have a company: <a href='https://www.jodibooks.com' target='_blank' rel='noopener noreferrer'>jodiBooks</a>.
                                    With this company we try to make administration and technology (software and computers) for beauty specialists as easy as possible.
                                    We developed the jodiBooks software to assists with that, but we also offer to help people out when they need any other help related to administration and technology.
                                </CardText>
                                <CardText>
                                    What I learned with jodiBooks is that I really like making websites and web apps. If you want a website and would like me to make it for you, send me an e-mail or message.
                                    You can find examples of my work in my portfolio on this website.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <CardTitle><h5><Link href={navigation.howto}><a>{data.Howto}</a></Link></h5></CardTitle>
                                <CardText>
                                    Next to designing websites and programming, I also host the <a href='https://www.jodibooks.com' target='_blank' rel='noopener noreferrer'>jodiBooks</a> software.
                                    Ever since I bought my first computer, I have been learning how to use it as a server. That was more than 15 year ago. I learned a lot through all those year and now I&apos;m doing it professionally.
                                    In these howto&apos;s I share some of the hurdles I encounter and how I crossed them.
                                </CardText>
                                <CardText>
                                    Subjects are: Ubuntu, file-sharing, virtual machines and website hosting.
                                </CardText>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <CardTitle><h5><Link href={navigation.recommended}><a>{data.Recommended}</a></Link></h5></CardTitle>
                                <CardText>
                                    The ideas I write about in my blog all started somewhere. Mostly after I&apos;ve seen a video on YouTube or read a book. In the recommended section I share the most influential and thought-provoking ones I&apos;ve encountered.
                                </CardText>
                                <CardText>
                                    That doesn&apos;t mean I (still) fully support the ideas put forward in them. I grow, learn and change my mind and I&apos;ll very probably have to keep doing that and I hope you will join me.
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardColumns>

                    <Row>
                        <Col md='6' lg='4' className='mx-auto'>
                            <Card className='mb-2' outline color='secondary'>
                                <CardBody>
                                    <blockquote className='blockquote'>
                                        <small className='mb-0'>* <em>&quot;Isn&apos;t it a noble, an enlightened way of spending our brief time in the sun, to work at understanding the universe and how we have come to wake up in it?&quot;</em></small>
                                        <footer className='blockquote-footer'>Richard Dawkins: <cite title='Source Title'><a href='https://www.goodreads.com/work/quotes/3323916-unweaving-the-rainbow-science-delusion-and-the-appetite-for-wonder' target='_blank' rel='noopener noreferrer'>Unweaving the Rainbow</a>.</cite></footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container >
            </Layout >
        </>
    )
}
