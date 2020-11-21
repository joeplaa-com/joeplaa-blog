import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Pagination from '../components/pagination'
import PostMore from '../components/postMore'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const BlogMoreTemplate = ({ data, location, pageContext }: PostQueryProps) => {
    const morePosts = data.allMdx.nodes;
    const { currentPage, numPages, tags } = pageContext;
    const tagsFormatted = formatAllTags(tags);

    return (
        <>
            <SEO
                title={metaData.BlogTitle}
                description={metaData.BlogDescription || `nothin’`}
                image={`${metaData.SiteUrl}${metaData.BlogImage}`}
                pathname={`${metaData.SiteUrl}${navigation.blog}`}
                titleTemplate={metaData.TitleTemplate}
                titleSeparator={metaData.TitleSeparator}
                siteLanguage={metaData.SiteLanguage}
                siteLocale={metaData.SiteLocale}
                twitterUsername={metaData.TwitterUsername}
            />

            <section className='section-fill red-dark' id={metaData.BlogTitle}>
                <Container className='my-auto'>
                    <FilterCard pathname={location.pathname} tags={tagsFormatted} />
                    {morePosts.length > 0 && <PostMore pathname={location.pathname} posts={morePosts} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={navigation.blog} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`
  query blogMoreTemplate($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/blog/"} }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        id
        frontmatter {
          author
          cover {
            publicURL
            childImageSharp {
                fluid(srcSetBreakpoints: [320, 640, 960]) {
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
  }
`;

export default BlogMoreTemplate;
