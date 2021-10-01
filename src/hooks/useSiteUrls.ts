import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    email: string,
    facebook: string,
    github: string,
    goodreads: string,
    instagram: string,
    linkedin: string,
    plausible: string
}

export default function useSiteUrls(): Props {
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
                            plausible
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}
