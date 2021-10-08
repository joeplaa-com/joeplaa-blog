import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import Pagination from '../components/pagination';
import PostMore from '../components/postMore';
import { PostQueryProps } from '../types';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import formatAllTags from '../utils/formatAllTags';

const RecommendedTemplate = ({ data, pageContext }: PostQueryProps): ReactElement => {
    const { pageRecommendedDescription, pageRecommendedImage, pageRecommendedTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { recommended } = useSiteNavigation();
    const posts = data.allMdx.nodes;
    const { currentPage, numPages, tags } = pageContext;
    const tagsFormatted = formatAllTags(tags);

    return (
        <>
            <SEO
                title={pageRecommendedTitle}
                description={pageRecommendedDescription || 'nothin’'}
                image={`${siteUrl}${pageRecommendedImage}`}
                pathname={`${siteUrl}${recommended}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill red-medium' id={pageRecommendedTitle}>
                <Container className='text-left my-auto'>
                    <FilterCard page={recommended} tags={tagsFormatted} />
                    {posts.length > 0 && <PostMore pathname={recommended} posts={posts} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={recommended} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query recommendedTemplate($skip: Int!, $limit: Int!) {
    allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: {regex: "/content/recommended/"}}
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
                        gatsbyImageData(width: 320, layout: CONSTRAINED)
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
}`;

export default RecommendedTemplate;
