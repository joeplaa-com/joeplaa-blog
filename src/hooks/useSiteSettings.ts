import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteSettings() {
    const { site } = useStaticQuery(
        graphql`
            query SITE_SETTINGS_QUERY {
                site {
                    siteMetadata {
                        settings {
                            breakpoint
                            designedBy
                            designerName
                            designerUrl
                            umamiID
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.settings;
}