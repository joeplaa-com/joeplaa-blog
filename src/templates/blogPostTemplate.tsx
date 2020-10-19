import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Col, Row } from 'reactstrap'
import SEO from 'react-seo-component'
import Filter from '../components/filter'
import Layout from '../components/layout'
import PostBrowseButton from '../components/postBrowseButton'
import PostImage from '../components/postImage'
import { metaData } from '../utils/data'
import formatPostTags from '../utils/formatPostTags'
import { PostTemplateProps } from '../types'

const PostTemplate = ({ data, location, pageContext }: PostTemplateProps) => {
    const { body, fields, frontmatter } = data.mdx;
    const { title, excerpt, date, cover } = frontmatter;
    const { previous, next } = pageContext;
    const tags = formatPostTags(frontmatter.tags);
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
                author={metaData.AuthorName}
                article={true}
                datePublished={date}
            />

            <section className='section-fill gray-medium' id={metaData.BlogTitle}>
                <Container className='my-auto post-container'>
                    <Filter back={true} pathname={location.pathname} className='mb-3' tags={tags} />
                    <div className='image-container'>
                        <PostImage path={false} title={title} picture={frontmatter.cover.childImageSharp} rounded={true} />
                        <div className='overlay-text rounded'>
                            <h1 className='display-3 text-center'>{title}</h1>
                            <h3><em>{date}</em></h3>
                        </div>
                    </div>

                    <div className='markdown'>
                        <MDXRenderer>{body}</MDXRenderer>
                        <hr />
                    </div>

                    <Row className='d-flex justify-content-between align-items-center'>
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
        </Layout>
    );
};

export const query = graphql`
  query blogPostTemplate($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        tags
        excerpt
        date(formatString: "YYYY MMMM D")
        cover {
          publicURL
          childImageSharp {
              fluid(srcSetBreakpoints: [320, 640, 960, 1080]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        author
      }
      body
      fields {
        slug
      }
    }
  }
`;

export default PostTemplate;