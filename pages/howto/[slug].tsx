import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { Container } from 'reactstrap'
import PostBody from '../../src/components/post-body'
import PostHeader from '../../src/components/post-header'
import Layout from '../../src/components/layout'
import { getPostBySlug, getAllPosts } from '../../src/lib/api'
import { navigation, siteInfo } from '../../src/lib/data'
import markdownToHtml from '../../src/lib/markdownToHtml'
import { PostTypeProps } from '../../src/types'

type Props = {
    post: PostTypeProps
    morePosts: PostTypeProps[]
    preview?: string
}

const currentPage = navigation.howto;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Post = ({ post, morePosts, preview }: Props) => {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <Container className='post-container shadow'>
                {router.isFallback
                    ? (
                        <h1>Loading…</h1>
                    )
                    : (
                        <article>
                            <Head>
                                <title>
                                    {post.title}{' '}{siteInfo.PageTitle}
                                </title>
                                <meta property='og:image' content={post.ogImage.url} />
                            </Head>
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                                page={currentPage}
                            />
                            <PostBody content={post.content} />
                        </article>
                    )}
            </Container>
        </Layout>
    )
}

export default Post

type Params = {
    params: {
        slug: string
    }
}

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'tags',
        'author',
        'content',
        'ogImage',
        'coverImage',
    ], currentPage) as PostTypeProps
    const content = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPosts(['slug'], currentPage)

    return {
        paths: posts.map((posts: PostTypeProps) => {
            return {
                params: {
                    slug: posts.slug,
                },
            }
        }),
        fallback: false,
    }
}