import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import SEO from 'react-seo-component'
import { Button, Card, CardBody, CardDeck, Container, Col, Row } from 'reactstrap'
import { Link } from '../components/customLink'
import Banner from '../components/banner'
import PostHero from '../components/postHero'
import PostPreview from '../components/postPreview'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import { content } from '../utils/content'
import { PostIndexProps } from '../types'

const Index = ({ data, location }: PostIndexProps) => {
    const { pageBlogSubtitle, pageBlogTitle, siteDescription, siteImage, siteLanguage, siteLocale, siteName, siteTitle, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { blog } = useSiteNavigation();
    const heroPost = data.blogLatest.nodes[0];
    const morePosts = data.blogLatest.nodes.slice(1);
    const books = data.bookLatest.nodes;
    const videos = data.videoLatest.nodes;
    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription || `nothin’`}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />
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

            <Banner
                title={siteName}
                subtitle={pageBlogSubtitle}
                src="banner-3-1.jpg"
                alt="beach banner" />

            <section className='section-home red-dark' id={pageBlogTitle}>
                <Container className='my-auto'>
                    {heroPost && <PostHero fields={heroPost.fields} frontmatter={heroPost.frontmatter} pathname={location.pathname} />}

                    {morePosts && <CardDeck className='mt-3'>
                        {morePosts.map((post) => (
                            <PostPreview
                                fields={post.fields}
                                frontmatter={post.frontmatter}
                                key={post.fields.slug}
                                pathname={location.pathname}
                            />
                        ))}
                        {[...books, ...videos].map((post) => (
                            <PostPreview
                                fields={post.fields}
                                frontmatter={post.frontmatter}
                                key={post.fields.slug}
                                pathname={location.pathname}
                            />
                        ))}
                        <Card>
                            <CardBody>
                                <Row className='d-flex align-content-between justify-content-lg-between flex-wrap'>
                                    <Col xs='12' lg='auto' className='mb-3 mb-lg-0'>
                                        <Link to={blog}>
                                            <Button color='primary' block>{content.MorePosts}</Button>
                                        </Link>
                                    </Col>
                                    <Col xs='12' lg='auto'>
                                        <Link to={blog}>
                                            <Button color='primary' block>{content.MoreBooksVideos}</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </CardDeck>}
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
    query indexPage {
        blogLatest: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/blog/"} }
            limit: 2
        ) {
            nodes {
                id
                frontmatter {
                    author
                    cover {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 960, srcSetBreakpoints: [320, 640]) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    date(formatString: "YYYY MMMM D")
                    excerpt
                    tags
                    title
                }
                fields {
                    slug
                }
            }
        }
        bookLatest: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/recommended/books/"} }
            limit: 1
        ) {
            nodes {
                id
                frontmatter {
                    author
                    cover {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 480, srcSetBreakpoints: [240, 320]) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    date(formatString: "YYYY MMMM D")
                    excerpt
                    tags
                    title
                }
                fields {
                    slug
                }
            }
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
        videoLatest: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/recommended/videos/"} }
            limit: 1
        ) {
            nodes {
                id
                frontmatter {
                    author
                    cover {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 480, srcSetBreakpoints: [240, 320]) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                    date(formatString: "YYYY MMMM D")
                    excerpt
                    tags
                    title
                }
                fields {
                    slug
                }
            }
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;

export default Index;