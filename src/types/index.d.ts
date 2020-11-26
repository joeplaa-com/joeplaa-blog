import { ReactElement, ReactNode } from 'react'
import { FixedObject, FluidObject } from 'gatsby-image'
import { GatsbyLinkProps } from 'gatsby-link'
import CSS from 'csstype'

export type AuthorProps = {
    name: string
}

export type AvatarImageProps = {
    node: {
        relativePath: string
        extension: string
        publicURL: string
        childImageSharp: ChildImageSharpFixed
    }
}

export type BannerProps = {
    alt: string
    src: string
    subtitle: string
    title: string
}

// === Begin Gatsby images ===
type ChildImageSharp = {
    publicURL: string
}

interface ChildImageSharpFixed extends ChildImageSharp {
    fixed: FixedObject
}

interface ChildImageSharpFluid extends ChildImageSharp {
    fluid: FluidObject
}

type ImageNode = {
    extension?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg'
    publicURL: string
    relativePath?: string
}

interface ImageFixedNode extends ImageNode {
    childImageSharp: ChildImageSharpFixed
}

export type ImageFixedNodeProps = {
    node: ImageFixedNode
}

interface ImageFluidNode extends ImageNode {
    childImageSharp: ChildImageSharpFluid
}

export type ImageFluidNodeProps = {
    node: ImageFluidNode
}
// === End Gatsby images ===

export type CustomNavLinkProps = {
    children: ReactNode
    href?: string
    title?: string
    to: string
}

export type FilterProps = {
    buttonType?: 'back' | 'more'
    className?: string
    page: string
    quantity?: boolean
    tags: Array<LabelProps>
}

export type FooterLinkProps = {
    className?: string
    color: 'dark' | 'light' | 'navbar'
}

export type ImageProps = {
    alt: string
    className?: string
    to?: string
    src: string
    style?: CSS.Properties
}

export type LabelProps = {
    value: string
    label: string
    count: number
}

export type LayoutProps = {
    children?: string | ReactNode
}

// https://github.com/gatsbyjs/gatsby/issues/16682#issuecomment-718155902
export interface LinkProps extends Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> {
    state?: PageState
}

export type NavbarProps = {
    navbarLightText?: boolean
}

export type NavigationProps = {
    className: string
}

export type NewTabProps = {
    children?: string | ReactNode
    className?: string
    href: string
    text?: string
}

type PageState = {
    key?: string
    prevPathname?: string
}

export type PageTemplateProps = {
    data: {
        mdx: {
            author: string
            body: string
            edges: Array<{ node: PostBasicProps }>
            excerpt: string
            fields: {
                slug: string
                readingTime?: {
                    text: string
                }
            }
            frontmatter: FrontMatterProps
            totalCount: number
        }
    },
    location: PostLocation
    pageContext: {
        next: PostBasicProps,
        previous: PostBasicProps
        tag: string
    }
}

export type PaginationProps = {
    currentPage: number
    numPages: number
    path: string
}

// === Begin Posts ===
type FrontMatterProps = {
    author: string
    cover: {
        childImageSharp: ChildImageSharpFluid
        publicURL: string
    }
    date: string
    excerpt: string
    id?: {
        asin: string
        isbn: string
    }
    links?: {
        amazon?: string
        goodreads?: string
        kobo?: string
        youtube?: string
    }
    subtitle?: string
    tags: Array<string>
    title: string
}

type PostBasicProps = {
    fields: {
        slug: string
        readingTime?: {
            text: string
        }
    }
    frontmatter: FrontMatterProps
    pathname: string
}

export type PostButtonProps = {
    page: string
    title: string
    to: string
    type: string
}

export type PostIndexProps = {
    data: {
        blogLatest: {
            nodes: Array<PostQueryNode>
        },
        bookLatest: {
            nodes: Array<PostQueryNode>
        },
        videoLatest: {
            nodes: Array<PostQueryNode>
        },
        site: {
            siteMetadata: {
                title: string
            },
        }
    },
    location: PostLocation
}

interface PostLocation extends Location {
    state: PageState
}

interface PostQueryNode extends PostBasicProps {
    body: string
    id: string
}

export type PostQueryProps = {
    data: {
        allMdx: {
            nodes: Array<PostQueryNode>
        },
        site: {
            siteMetadata: {
                title: string
            },
        }
    },
    location: Location
    pageContext?: {
        currentPage: number
        numPages: number
        slug: string
        tag: string
        tagRaw: {
            fieldValue: string
        }
        tags: Array<{
            fieldValue: string
            totalCount: number
        }>
    }
}

export type PostImageProps = {
    height?: number
    onClick?: () => void
    path: boolean
    picture: ChildImageSharpFluid
    rounded?: boolean
    slug?: string
    title: string
}

export type PostSubtitleProps = {
    className?: string
    date: string
    pathname: string
    readingTime?: string
    tags: Array<string>
}

export type PostTitleProps = {
    onClick?: () => void
    path: boolean
    slug: string
    title: string
}
// === End Posts ===

export type QuoteProps = {
    quote: string
    source?: string
    href?: string
    name?: string
}

export type SectionProps = {
    className: string
}

export type SocialLinkProps = {
    color: 'dark' | 'light' | 'navbar'
    key: string | number
    size: string
}

export type TagProps = {
    icon?: ReactElement
    quantity?: boolean
    tag: LabelProps
}