import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
import Banner from '../components/banner'
const Filter = lazy(() => import('../components/filter'))
import Layout from '../components/layout'
import PostHero from '../components/postHero'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { IRootState } from '../store/interfaces'
import { PostQueryProps } from '../types'
import currentPage from '../utils/currentPage'
import { metaData, navigation } from '../utils/data'
import filterTag from '../utils/filterTag'
import formatAllTags from '../utils/formatAllTags'

const Blog = ({ data }: PostQueryProps) => {
    const heroPost = data.allMdx.nodes[0];
    const morePosts = data.allMdx.nodes.slice(1);
    const page = currentPage(heroPost.fileAbsolutePath);
    const tags = formatAllTags(data.allMdx.group);

    const filterSelector = (state: IRootState) => state.filter;
    const filter = useSelector(filterSelector);

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
                                <Filter page={page} tags={tags} />
                            </Suspense>
                        )}

                        {heroPost && filterTag(heroPost, filter.selectedTags[page]) && (
                            <PostHero fields={heroPost.fields} fileAbsolutePath={heroPost.fileAbsolutePath} frontmatter={heroPost.frontmatter} />)}

                        {morePosts.length > 0 && <PostMore posts={morePosts.filter((post) => (filterTag(post, filter.selectedTags[page])))} />}
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_BLOG_QUERY {
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
        fileAbsolutePath
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
