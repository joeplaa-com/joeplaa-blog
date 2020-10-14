import React, { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { graphql } from 'gatsby'
import SEO from 'react-seo-component'
import { Container } from 'reactstrap'
const Filter = lazy(() => import('../components/filter'))
import Layout from '../components/layout'
import PostMore from '../components/postMore'
import RenderLoader from '../components/renderLoader'
import { PostQueryProps } from '../types'
import { filterActionCreators } from '../store/actions/filter'
import { IRootState } from '../store/interfaces'
import currentPage from '../utils/currentPage'
import { metaData, navigation } from '../utils/data'
import filterTag from '../utils/filterTag'
import formatAllTags from '../utils/formatAllTags'

const Recommended = ({ data }: PostQueryProps) => {
    const page = currentPage(data.allMdx.nodes[0].fileAbsolutePath);
    const tags = formatAllTags(data.allMdx.group);

    const filterSelector = (state: IRootState) => state.filter;
    const filter = useSelector(filterSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterActionCreators.addTagsFilter(page, tags));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const isSSR = typeof window === "undefined"

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
                                <Filter page={page} tags={tags} />
                            </Suspense>
                        )}
                        <PostMore posts={data.allMdx.nodes.filter((post) => (filterTag(post, filter.userFilter[currentPage(post.fileAbsolutePath)])))} />
                    </Container>
                </section>
            </Layout>
        </>
    );
};

export const query = graphql`
  query SITE_RECOMMENDED_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } }, fileAbsolutePath: {regex: "/content/recommended/"} }
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

export default Recommended; 
