import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    about: string,
    blog: string,
    contact: string,
    home: string,
    joeplaa: string,
    portfolio: string,
    recommended: string,
    tagsNav: string
}

export default function useSiteNavigation(): Props {
    const { site } = useStaticQuery(
        graphql`
            query SITE_NAVIGATION_QUERY {
                site {
                    siteMetadata {
                        navigation {
                            about
                            blog
                            contact
                            home
                            joeplaa
                            portfolio
                            recommended
                            tagsNav
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.navigation;
}
