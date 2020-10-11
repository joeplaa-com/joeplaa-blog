import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
const Filter = lazy(() => import('../components/filter'));
import Layout from '../components/layout'
import PostHero from '../components/postHero'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { PostQueryProps } from '../types'
import { filterActionCreators } from '../store/actions/filter'
import { IRootState } from '../store/interfaces'
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
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterActionCreators.addTagsFilter(page, tags));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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

                <section className='section-fill red-dark' id={metaData.BlogTitle}>
                    <Container className='my-auto'>
                        <Suspense fallback={<RenderLoader />}>
                            <Filter page={page} tags={tags} />
                        </Suspense>
                        {heroPost && filterTag(heroPost, filter.userFilter[page]) && (
                            <PostHero excerpt={heroPost.excerpt} fields={heroPost.fields} fileAbsolutePath={heroPost.fileAbsolutePath} frontmatter={heroPost.frontmatter} />
                        )}

                        {morePosts.length > 0 && <PostMore posts={morePosts.filter((post) => (filterTag(post, filter.userFilter[currentPage(post.fileAbsolutePath)])))} />}
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
        excerpt(pruneLength: 250)
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
