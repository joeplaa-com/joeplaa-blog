import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { Container } from 'reactstrap'
import HeroPost from '../src/components/hero-post'
import Layout from '../src/components/layout'
import Filter from '../src/components/filter'
import MoreStories from '../src/components/more-stories'
import { AllPostsProps, PostTypeProps } from '../src/types'
import { getAllPosts } from '../src/lib/api'
import { mdFields } from '../src/lib/constants'
import { siteInfo, navigation } from '../src/lib/data'
import filterTag from '../src/lib/filterTag'
import getTags from '../src/lib/getTags'
import { filterActionCreators } from '../src/store/actions/filter'

const currentPage = navigation.blog;

export default function Blog({ allPosts, tags }: AllPostsProps) {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    const heroPost = allPosts[0]
    const morePosts = allPosts.slice(1)
    
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
                            url: process.env.NEXT_PUBLIC_URL + '/white-banner-blog.png',
                            width: 300,
                            height: 300,
                            alt: 'joeplaa blog banner',
                        }
                    ]
                }}
            />
            <Layout siteDescription={siteInfo.BlogDescription} siteTitle={siteInfo.BlogTitle + siteInfo.PageTitle} >
                <Container>
                    <Filter page={currentPage} tags={tags} />
                    {heroPost && filterTag(heroPost, filter.userFilter[currentPage]) && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            author={heroPost.author}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                            tags={heroPost.tags}
                            page={currentPage}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} page={currentPage} />}
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
