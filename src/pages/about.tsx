import React, { ReactElement } from 'react';
import SEO from 'react-seo-component';
import { Container, Col, Row } from 'reactstrap';
import { Link } from '../components/customLink';
import ImageAbout from '../components/imageAbout';
import NewTabLink from '../components/newTabLink';
import Social from '../components/social';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import useSiteSettings from '../hooks/useSiteSettings';

const About = (): ReactElement => {
    const { authorFirstName, authorLastName, pageAboutDescription, pageAboutImage, pageAboutTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { about, blog, contact, joeplaa, portfolio } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    return (
        <>
            <SEO
                title={pageAboutTitle}
                description={pageAboutDescription || 'nothin’'}
                image={`${siteUrl}${pageAboutImage}`}
                pathname={`${siteUrl}${about}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill red-light' id={pageAboutTitle}>
                <Container className='my-auto'>
                    <Row>
                        <Col>
                            <h1 className={`display-1 text-center text-${breakpoint}-left`}>{pageAboutTitle}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' className={`col-${breakpoint}-auto`}>
                            <div className={`my-3 my-${breakpoint}-auto mx-auto shadow`} style={{ width: '240px' }}>
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
                                <p>I&apos;m {authorFirstName}, 35 years old and currently living in <NewTabLink href='https://en.wikipedia.org/wiki/Eindhoven'>Eindhoven in The Netherlands</NewTabLink>. I went to Eindhoven to study mechanical engineering at <NewTabLink href='https://www.tue.nl/'>TU/e</NewTabLink> university. After working as a mechanical engineer for 7.5 years, I quit my &quot;dayjob&quot; and started working full time on my own company: <NewTabLink href='https://www.jodibooks.com'>jodiBooks</NewTabLink>.</p>
                                <p>At jodiBooks I have learned how to do front-end design and website hosting. A skill I use with <Link to={process.env.GATSBY_URL}>joeplaa.com</Link> to help other people create their digital homes; I design their homepages and take care of hosting them.</p>
                            </div>
                            <div>
                                <Social color='dark' key='About' size='2rem' />
                            </div>
                            <div>
                                <h2>What is Joeplaa</h2>
                                <p>Joeplaa, pronounce &quot;you-p-laah&quot;, is an abbreviation of my full name: {authorFirstName} {authorLastName}. Initially I started using it to shorten my e-mail address, but it turned into my &quot;official&quot; handle <code>@joeplaa</code> everywhere on the web.</p>
                                <p>Originally I used joeplaa.com as my <Link to={blog}>personal blog</Link>, but with the start of &quot;Joeplaa the business&quot;, I moved the blog to <Link to={blog}>blog.joeplaa.com</Link>. The main page, <Link to={joeplaa}>joeplaa.com</Link>, is now used to show you what I can do. It both is and contains my <Link to={portfolio}>portfolio</Link>. Have a look around and <Link to={contact}>let me know</Link> if you like my work.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;
