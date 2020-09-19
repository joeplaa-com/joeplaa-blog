import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap'
import HeroPost from '../src/components/hero-post'
import Layout from '../src/components/layout'
import Filter from '../src/components/filter'
import MoreStories from '../src/components/more-stories'
import { getAllPosts } from '../src/lib/api'
import { postPageFields } from '../src/lib/constants'
import { data, siteInfo, navigation } from '../src/lib/data'
import filterTag from '../src/lib/filterTag'
import getTags from '../src/lib/getTags'
import { filterActionCreators } from '../src/store/actions/filter'
import { AllPostsProps, PostTypeProps } from '../src/types'

const currentPage = navigation.blog;
const postsPath = navigation.posts;

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
                    <Card className='mt-3'>
                        <CardBody>
                            <CardTitle><h5>{data.Blog}</h5></CardTitle>
                            <CardText>
                                The reason I started joeplaa.com: I wanted a blog. When starting the blog, the focus was on goals, mindset, nutrition and health. Figuring out what I have to do and eat to stay healthy, however, has proven to be a big challenge.
                                A challenge I don&apos;t have enough time for at the moment.
                            </CardText>
                            <CardText>
                                But there&apos;s a lot of stuff I&apos;m trying to understand about myself, humanity, the world and the universe and I learned that talking about them or writing them down really helps.
                                Giving words to my thought makes them more tangible, concrete and well better. They get more articulated and thought-through.
                            </CardText>
                            <CardText>
                                Subjects range from diet to mindset and psychology to sociology and politics.
                            </CardText>
                        </CardBody>
                    </Card>
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
                            path={postsPath}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} page={currentPage} path={postsPath} />}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts(postPageFields, postsPath);
    const tags = [];
    allPosts.forEach((post: PostTypeProps) => {
        getTags(post.tags).map(postTag => tags.filter(tag => tag.value === postTag.value).length > 0 ? null : tags.push(postTag));
    });

    return {
        props: { allPosts, tags },
    }
}
