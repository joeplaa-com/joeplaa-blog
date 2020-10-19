import { graphql } from 'gatsby'
import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Book from '../components/book'
import Video from '../components/video'
import Layout from '../components/layout'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import { metaData } from '../utils/data'
import { PostTemplateProps } from '../types'

const RecommendedTemplate = ({ data, pageContext }: PostTemplateProps) => {
    const { body, fields, frontmatter } = data.mdx;
    const { title, tags, excerpt, date, cover, author } = frontmatter;
    const { previous, next } = pageContext;
    return (
        <Layout>
            <SEO
                title={title}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                description={excerpt}
                image={
                    cover === null
                        ? `${metaData.SiteUrl}${metaData.SiteImage}`
                        : `${metaData.SiteUrl}${cover.publicURL}`
                }
                pathname={`${metaData.SiteUrl}${fields.slug}`}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
                author={author}
                article={true}
                datePublished={date}
            />

            <section className='section-fill gray-medium' id={metaData.RecommendedTitle}>
                <Container className='my-auto post-container'>
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
                            {tags.includes('Book')
                                ? <Book frontmatter={frontmatter} />
                                : <Video frontmatter={frontmatter} body={body} />}
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-between align-items-center'>
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
        </Layout>
    );
};

export const query = graphql`
  query recommendedTemplate($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        cover {
          publicURL
          childImageSharp {
              fluid(srcSetBreakpoints: [320, 480]) {
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