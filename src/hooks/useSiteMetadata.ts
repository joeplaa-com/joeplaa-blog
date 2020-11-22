import { graphql, useStaticQuery } from 'gatsby';

export default function useSiteMetadata () {
    const { site } = useStaticQuery(
        graphql`
            query SITE_METADATA_QUERY {
                site {
                    siteMetadata {
                        metadata {
                            authorName
                            authorFirstName
                            authorLastName
                            businessName
                            pageAboutDescription
                            pageAboutImage
                            pageAboutTitle
                            pageBlogDescription
                            pageBlogImage
                            pageBlogTitle
                            pageBlogSubtitle
                            pageRecommendedDescription
                            pageRecommendedImage
                            pageRecommendedTitle
                            siteDescription
                            siteImage
                            siteLanguage
                            siteLocale
                            siteName
                            siteUrl
                            siteTitle
                            titleSeparator
                            titleTemplate
                            twitterUsername
                        }
                    }
                }
            }
        `
    );
    return site.siteMetadata.metadata;
}