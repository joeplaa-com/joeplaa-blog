import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NextSeo } from 'next-seo'
import { Container } from 'reactstrap'
import Layout from '../src/components/layout'
import Filter from '../src/components/filter'
import PortfolioStories from '../src/components/portfolio-stories'
import { AllPostsProps, PostTypeProps } from '../src/types'
import { getAllPosts } from '../src/lib/api'
import { mdFields } from '../src/lib/constants'
import { siteInfo, navigation } from '../src/lib/data'
import getTags from '../src/lib/getTags'
import { filterActionCreators } from '../src/store/actions/filter'

const currentPage = navigation.recommended;

export default function Recommended({ allPosts, tags }: AllPostsProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterActionCreators.addTagsFilter(currentPage, tags));
    }, []);

    return (
        <>
            <NextSeo
                title={siteInfo.HomeTitle}
                titleTemplate={siteInfo.SiteTitle + ' | %s'}
                description={siteInfo.HomeDescription}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_URL + navigation.home,
                    title: siteInfo.HomeTitle,
                    description: siteInfo.HomeDescription,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-websites.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa website banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.RecommendedDescription} siteTitle={siteInfo.RecommendedTitle + siteInfo.PageTitle} >
                <Container>
                    <Filter page={currentPage} tags={tags} />
                    {allPosts.length > 0 && <PortfolioStories posts={allPosts} page={currentPage} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts(mdFields, currentPage);
    const tags = [];
    allPosts.forEach((post: PostTypeProps) => {
        getTags(post.tags).map(postTag => tags.filter(tag => tag.value === postTag.value).length > 0 ? null : tags.push(postTag));
    });

    return {
        props: { allPosts, tags },
    }
}
