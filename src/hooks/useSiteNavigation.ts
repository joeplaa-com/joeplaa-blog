import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteNavigation () {
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
                            howto
                            portfolio
                            pricing
                            ps
                            recommended
                            services
                            tagsNav
                            tos
                            wiki
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.navigation;
}