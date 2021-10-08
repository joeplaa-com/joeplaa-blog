import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    email: string,
    facebook: string,
    github: string,
    goodreads: string,
    instagram: string,
    linkedin: string,
    umami: string
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
                            umami
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.urls;
}
