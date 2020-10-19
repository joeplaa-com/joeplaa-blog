import React, { lazy, Suspense } from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
const FilterCard = lazy(() => import('../components/filterCard'))
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const RecommendedTemplate = ({ data, location, pageContext }: PostQueryProps) => {
    const posts = data.allMdx.nodes;
    const tags = formatAllTags(data.allMdx.group);
    const { currentPage, numPages } = pageContext;

    const isSSR = typeof window === "undefined";
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
                        {!isSSR && (
                            <Suspense fallback={<RenderLoader />}>
                                <FilterCard pathname={location.pathname} tags={tags} />
                            </Suspense>
                        )}
                        {!isSSR && posts.length > 0 && <PostMore pathname={location.pathname} posts={posts} />}
                        {!isSSR && <Pagination currentPage={currentPage} numPages={numPages} path={navigation.portfolio} />}
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default RecommendedTemplate; 
