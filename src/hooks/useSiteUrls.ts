import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteUrls() {
    const { site } = useStaticQuery(
        graphql`
            query SITE_URLS_QUERY {
                site {
                    siteMetadata {
                        urls {
                            email
                            facebook
                            github
                            goodreads
                            instagram
                            linkedin
                            umami
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}