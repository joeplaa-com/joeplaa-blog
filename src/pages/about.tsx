import React from 'react'
import SEO from 'react-seo-component'
import { Container, Col, Row } from 'reactstrap'
import { Link } from '../components/customLink'
import ImageAbout from '../components/imageAbout'
import NewTabLink from '../components/newTabLink'
import Social from '../components/social'
import { metaData, navigation } from '../utils/data'

const About = () => {
    return (
        <>
            <SEO
                title={metaData.AboutTitle}
                description={metaData.AboutDescription || `nothin’`}
                image={`${metaData.SiteUrl}${metaData.AboutImage}`}
                pathname={`${metaData.SiteUrl}${navigation.about}`}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
            />

            <section className='section-fill red-light' id={metaData.AboutTitle}>
                <Container className='my-auto'>
                    <Row>
                        <Col>
                            <h1 className='display-1 text-center text-md-left'>{metaData.AboutTitle}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' md='auto'>
                            <div className='my-3 my-md-auto mx-auto shadow' style={{ width: '240px' }}>
                                <ImageAbout
                                    src={'joep-in-suit.jpg'}
                                    alt={'Picture of Joep in fitting room, trying on a suit'}
                                    className="mx-auto"
                                />
                            </div>
                        </Col>
                        <Col className='d-flex flex-column justify-content-between'>
                            <div>
                                <h2>Who is Joeplaa</h2>
                                <p>I&apos;m {metaData.FirstName}, 35 years old and currently living in <NewTabLink href='https://en.wikipedia.org/wiki/Eindhoven'>Eindhoven in The Netherlands</NewTabLink>. I went to Eindhoven to study mechanical engineering at <NewTabLink href='https://www.tue.nl/'>TU/e</NewTabLink> university. After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <NewTabLink href='https://www.jodibooks.com'>jodiBooks</NewTabLink>.</p>
                                <p>At jodiBooks I have learned how to do front-end design and website hosting. A skill I use with <Link to={process.env.GATSBY_URL}>joeplaa.com</Link> to help other people create their digital homes; I design their homepages and take care of hosting them.</p>
                            </div>
                            <div>
                                <Social color='dark' key='About' size='2rem' />
                            </div>
                            <div>
                                <h2>What is Joeplaa</h2>
                                <p>Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: {metaData.FirstName} {metaData.LastName}. Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle <code>@joeplaa</code> everywhere on the web.</p>
                                <p>Originally I used joeplaa.com as my <Link to={navigation.blog}>personal blog</Link>, but with the start of &quot;Joeplaa the business&quot;, I moved the blog to <Link to={navigation.blog}>blog.joeplaa.com</Link>. The main page, <Link to={process.env.GATSBY_URL}>joeplaa.com</Link>, is now used to show you what I can do. It both is and contains my <Link to={navigation.portfolio}>portfolio</Link>. Have a look around and <Link to={navigation.contact}>let me know</Link> if you like my work.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;
