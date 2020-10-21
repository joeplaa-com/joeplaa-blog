import React from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import FilterCard from '../components/filterCard'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostMore from '../components/postMore'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const RecommendedTemplate = ({ data, location, pageContext }: PostQueryProps) => {
    const posts = data.allMdx.nodes;
    const { currentPage, numPages, tags } = pageContext;
    const tagsFormatted = formatAllTags(tags);

    return (
        <>
            <Layout>
                <SEO
                    title={metaData.RecommendedTitle}
                    description={metaData.RecommendedDescription || `nothin’`}
                    image={`${metaData.SiteUrl}${metaData.RecommendedImage}`}
                    pathname={`${metaData.SiteUrl}${navigation.recommended}`}
                    titleTemplate={metaData.TitleTemplate}
                    titleSeparator={metaData.TitleSeparator}
                    siteLanguage={metaData.SiteLanguage}
                    siteLocale={metaData.SiteLocale}
                    twitterUsername={metaData.TwitterUsername}
                />

                <section className='section-fill red-medium' id={metaData.RecommendedTitle}>
                    <Container className='text-left my-auto'>
                        <FilterCard pathname={location.pathname} tags={tagsFormatted} />
                        {posts.length > 0 && <PostMore pathname={location.pathname} posts={posts} />}
                        <Pagination currentPage={currentPage} numPages={numPages} path={navigation.portfolio} />
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query recommendedTemplate($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/recommended/"} }
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
                fluid(srcSetBreakpoints: [320, 640]) {
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

export default RecommendedTemplate; 
