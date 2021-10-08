import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    breakpoint: string,
    designedBy: string,
    designerName: string,
    designerUrl: string,
    umamiID: string
}

export default function useSiteSettings(): Props {
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
