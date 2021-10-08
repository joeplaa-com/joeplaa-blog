import React, { ReactElement } from 'react';
import { graphql } from 'gatsby';
import SEO from 'react-seo-component';
import { Container } from 'reactstrap';
import FilterCard from '../components/filterCard';
import PostMore from '../components/postMore';
import useSiteMetadata from '../hooks/useSiteMetadata';
import useSiteNavigation from '../hooks/useSiteNavigation';
import { PostQueryProps } from '../types';
import formatAllTags from '../utils/formatAllTags';

const Tag = ({ data, location, pageContext }: PostQueryProps): ReactElement => {
    const { siteDescription, siteImage, siteLanguage, siteLocale, siteTitle, siteUrl, titleSeparator, titleTemplate, twitterUsername } = useSiteMetadata();
    const { tagsNav } = useSiteNavigation();
    const posts = data.allMdx.nodes;
    const tags = formatAllTags([pageContext.tag]);
    return (
        <>
            <SEO
                title={siteTitle}
                description={siteDescription || 'nothin’'}
                image={`${siteUrl}${siteImage}`}
                pathname={`${siteUrl}${pageContext.slug}`}
                titleTemplate={titleTemplate}
                titleSeparator={titleSeparator}
                siteLanguage={siteLanguage}
                siteLocale={siteLocale}
                twitterUsername={twitterUsername}
            />

            <section className='section-fill red-light' id={siteTitle}>
                <Container className='my-auto'>
                    <FilterCard page={tagsNav} tags={tags} />
                    {posts.length > 0 && <PostMore pathname={location.pathname} posts={posts} />}
                </Container>
            </section>
        </>
    );
};

export const query = graphql`query tagsTemplate($tagValue: String) {
    allMdx(
        sort: {fields: [frontmatter___date], order: DESC}
        filter: {frontmatter: {published: {eq: true}, tags: {in: [$tagValue]}}}
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
            }
        }
    }
}`;

export default Tag;
