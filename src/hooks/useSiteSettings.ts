import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    breakpoint: string,
    designedBy: string,
    designerName: string,
    designerUrl: string,
    plausibleID: string
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
                            plausibleID
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.settings;
}
