import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Filter from '../components/filter'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import useSiteSettings from '../hooks/useSiteSettings'
import formatPostTags from '../utils/formatPostTags'
import { PageTemplateProps } from '../types'

const PostTemplate = ({ data, location, pageContext }: PageTemplateProps) => {
    const { authorName, pageBlogTitle, siteImage, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { blog } = useSiteNavigation();
    const { breakpoint } = useSiteSettings();
    const { body, fields, frontmatter } = data.mdx;
    const { title, excerpt, date, cover } = frontmatter;
    const { previous, next } = pageContext;
    const tags = formatPostTags(frontmatter.tags);

    return (
        <>
            <SEO
                title={title}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                description={excerpt}
                image={
                    cover === null
                        ? `${siteUrl}${siteImage}`
                        : `${siteUrl}${cover.publicURL}`
                }
                pathname={`${siteUrl}${fields.slug}`}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
                author={authorName}
                article={true}
                datePublished={date}
            />
            <section className='section-fill gray-medium' id={pageBlogTitle}>
                <Container className='my-auto post-container'>
                    <Filter buttonType={location.state?.prevPathname ? 'back' : 'more'} page={blog} className='mb-3' tags={tags} />
                    <div className={`d-${breakpoint}-none post-header`}>
                        <h1 className='display-3 text-center'>{title}</h1>
                    </div>
                    <div className='image-container'>
                        <PostImage path={false} title={title} picture={frontmatter.cover.childImageSharp} rounded={true} />
                        <div className={`d-none d-${breakpoint}-block image-overlay-blur rounded`}></div>
                        <div className={`d-none d-${breakpoint}-block image-overlay-text rounded`}>
                            <h1 className='display-3 text-center'>{title}</h1>
                        </div>
                    </div>

                    <Row className='markdown mt-3'>
                        <Col xs='12' className='d-inline-flex align-items-center'>
                            <em>{date}</em><span className='ml-auto'>{fields.readingTime?.text}</span>
                        </Col>
                        <Col>
                            <MDXRenderer>{body}</MDXRenderer>
                            <hr />
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-between align-items-center mt-4'>
                        {!previous ? null : (
                            previous && (
                                <Col xs='12' sm='6' lg='5' xl='4'>
                                    <PostBrowseButton page='blog' type='previous' to={previous.fields.slug} title={previous.frontmatter.title} />
                                </Col>
                            )
                        )}
                        {!next ? null : (
                            next && (
                                <Col xs='12' sm='6' lg='5' xl='4' className='d-flex justify-content-end mt-2 mt-sm-0'>
                                    <PostBrowseButton page='blog' type='next' to={next.fields.slug} title={next.frontmatter.title} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query blogPostTemplate($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
        frontmatter {
            title
            tags
            excerpt
            date(formatString: "YYYY MMMM D")
            cover {
                publicURL
                childImageSharp {
                    gatsbyImageData(width: 960, breakpoints: [320, 640], layout: CONSTRAINED)
                }
            }
            author
        }
        body
        fields {
            slug
            readingTime {
                text
            }
        }
    }
}`;

export default PostTemplate;