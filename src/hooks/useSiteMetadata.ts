import { graphql, useStaticQuery } from 'gatsby';

interface Props {
    authorName: string,
    authorFirstName: string,
    authorLastName: string,
    businessName: string,
    pageAboutDescription: string,
    pageAboutImage: string,
    pageAboutTitle: string,
    pageBlogDescription: string,
    pageBlogImage: string,
    pageBlogTitle: string,
    pageBlogSubtitle: string,
    pageRecommendedDescription: string,
    pageRecommendedImage: string,
    pageRecommendedTitle: string,
    siteDescription: string,
    siteImage: string,
    siteLanguage: string,
    siteLocale: string,
    siteName: string,
    siteUrl: string,
    siteTitle: string,
    titleSeparator: string,
    titleTemplate: string,
    twitterUsername: string
}

export default function useSiteMetadata(): Props {
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
