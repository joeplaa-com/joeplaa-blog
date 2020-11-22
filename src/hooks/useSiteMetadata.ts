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
                            businessAddress1
                            businessAddress2
                            businessCountry
                            businessCoC
                            businessIBAN
                            businessName
                            businessVAT
                            componentAboutTitle
                            componentContactTitle
                            componentPricingDescription
                            componentPricingTitle
                            componentServicesDescription
                            componentServicesTitle
                            componentWikiFaq
                            componentWikiPricing
                            componentWikiProcedure
                            pageHomeDescription
                            pageHomeImage
                            pageHomeSubtitle
                            pageHomeTitle
                            pageHowtoTitle
                            pageLandingDescription
                            pageLandingTitle
                            pagePortfolioDescription
                            pagePortfolioTitle
                            pageRecommendedDescription
                            pageRecommendedTitle
                            pageWikiDescription
                            pageWikiImage
                            pageWikiTitle
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