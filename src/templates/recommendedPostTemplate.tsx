import { graphql } from 'gatsby'
import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Book from '../components/book'
import Filter from '../components/filter'
import Video from '../components/video'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import useSiteMetadata from '../hooks/useSiteMetadata'
import useSiteNavigation from '../hooks/useSiteNavigation'
import formatPostTags from '../utils/formatPostTags'
import { PageTemplateProps } from '../types'

const RecommendedTemplate = ({ data, location, pageContext }: PageTemplateProps) => {
    const { pageRecommendedTitle, siteImage, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { recommended } = useSiteNavigation();
    const { body, fields, frontmatter } = data.mdx;
    const { title, excerpt, date, cover, author } = frontmatter;
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
                author={author}
                article={true}
                datePublished={date}
            />
            <section className='section-fill gray-medium' id={pageRecommendedTitle}>
                <Container className='my-auto post-container'>
                    <Filter buttonType={location.state?.prevPathname ? 'back' : 'more'} page={recommended} className='mb-3' tags={tags} />
                    <Row className='image-container'>
                        <Col>
                            <PostImage path={false} title={title} picture={cover.childImageSharp} rounded={true} />
                            <div className='overlay-text rounded'>
                                <h1 className='display-3 text-center'>{title}</h1>
                                <h3><em>{date}</em></h3>
                            </div>
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <Col>
                            {frontmatter.tags.includes('Book')
                                ? <Book frontmatter={frontmatter} />
                                : <Video frontmatter={frontmatter} body={body} />}
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-between align-items-center mt-4'>
                        {!previous ? null : (
                            previous && (
                                <Col xs='12' sm='6' lg='5' xl='4'>
                                    <PostBrowseButton page='recommended' type='previous' to={previous.fields.slug} title={previous.frontmatter.title} />
                                </Col>
                            )
                        )}
                        {!next ? null : (
                            next && (
                                <Col xs='12' sm='6' lg='5' xl='4' className='d-flex justify-content-end mt-2 mt-sm-0'>
                                    <PostBrowseButton page='recommended' type='next' to={next.fields.slug} title={next.frontmatter.title} />
                                </Col>
                            )
                        )}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
  query recommendedPostTemplate($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        cover {
          publicURL
          childImageSharp {
              fluid(maxWidth: 480, srcSetBreakpoints: [320]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        date(formatString: "YYYY MMMM D")
        excerpt
        id {
          asin
          isbn
        }
        links {
          amazon
          goodreads
          kobo
          youtube
        }
        subtitle
        tags
        title
      }
      body
      fields {
        slug
      }
    }
  }
`;

export default RecommendedTemplate;