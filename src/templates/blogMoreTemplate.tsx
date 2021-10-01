import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import Pagination from '../components/pagination';
import PostMore from '../components/postMore';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { PostQueryProps } from '../types';
import formatAllTags from '../utils/formatAllTags';

const BlogMoreTemplate = ({ data, pageContext }: PostQueryProps): ReactElement => {
    const { pageBlogDescription, pageBlogImage, pageBlogTitle, siteLanguage, siteLocale, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { blog } = useSiteNavigation();
    const morePosts = data.allMdx.nodes;
    const { currentPage, numPages, tags } = pageContext;
    const tagsFormatted = formatAllTags(tags);

    return (
        <>
            <SEO
                title={pageBlogTitle}
                description={pageBlogDescription || 'nothin’'}
                image={`${siteUrl}${pageBlogImage}`}
                pathname={`${siteUrl}${blog}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill red-dark' id={pageBlogTitle}>
                <Container className='my-auto'>
                    <FilterCard page={blog} tags={tagsFormatted} />
                    {morePosts.length > 0 && <PostMore pathname={blog} posts={morePosts} />}
                    <Pagination currentPage={currentPage} numPages={numPages} path={blog} />
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query blogMoreTemplate($skip: Int!, $limit: Int!) {
    allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}}, fileAbsolutePath: {regex: "/content/blog/"}}
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
                        gatsbyImageData(width: 960, breakpoints: [320, 640], layout: CONSTRAINED)
                    }
                }
                date(formatString: "YYYY MMMM D")
                excerpt
                tags
                title
            }
            fields {
                slug
                readingTime {
                    text
                }
            }
        }
    }
}`;

export default BlogMoreTemplate;
