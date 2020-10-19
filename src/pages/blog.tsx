import React, { lazy, Suspense } from 'react'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import Banner from '../components/banner'
const Filter = lazy(() => import('../components/filter'))
import Layout from '../components/layout'
import PostHero from '../components/postHero'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { PostQueryProps } from '../types'
import { metaData, navigation } from '../utils/data'
import formatAllTags from '../utils/formatAllTags'

const Blog = ({ data, location }: PostQueryProps) => {
    const heroPost = data.allMdx.nodes[0];
    const morePosts = data.allMdx.nodes.slice(1);
    const tags = formatAllTags(data.allMdx.group);

    const isSSR = typeof window === "undefined";
    return (
        <>
            <Layout>
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

                <Banner
                    title={metaData.SiteName}
                    subtitle={metaData.BlogSubtitle}
                    src="banner-3-1.jpg"
                    alt="beach banner" />

                <section className='section-fill red-dark' id={metaData.BlogTitle}>
                    <Container className='my-auto'>
                        {!isSSR && (
                            <Suspense fallback={<RenderLoader />}>
                                <Filter pathname={location.pathname} tags={tags} />
                            </Suspense>
                        )}
                        {heroPost && <PostHero fields={heroPost.fields} frontmatter={heroPost.frontmatter} pathname={location.pathname} />}
                        {morePosts.length > 0 && <PostMore pathname={location.pathname} posts={morePosts} />}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query pageBlog {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/blog/"} }
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
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default Blog;
