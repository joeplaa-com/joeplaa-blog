import { ReactElement, ReactNode } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { GatsbyLinkProps } from 'gatsby-link';
import CSS from 'csstype';

export type AuthorProps = {
    name: string
}

export type AvatarImageProps = {
    node: {
        relativePath: string
        extension: string
        publicURL: string
        childImageSharp: ChildImageSharp
    }
}

export type BannerProps = {
    alt: string
    src: string
    subtitle: string
    title: string
}

// === Begin Gatsby images ===
interface ChildImageSharp {
    publicURL: string
    gatsbyImageData: IGatsbyImageData
}

export interface ImageNodeProps {
    node: {
        extension?: 'jpg' | 'jpeg' | 'png' | 'webp' | 'svg'
        publicURL: string
        relativePath?: string
        childImageSharp: ChildImageSharp
    }
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
    tags: LabelProps[]
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
            edges: { node: PostBasicProps }[]
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
        childImageSharp: ChildImageSharp
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
    tags: string[]
    title: string
}

type PostBasicProps = {
    className?: string
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
            nodes: PostQueryNode[]
        },
        bookLatest: {
            nodes: PostQueryNode[]
        },
        videoLatest: {
            nodes: PostQueryNode[]
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
            nodes: PostQueryNode[]
        },
        site: {
            siteMetadata: {
                title: string
            },
        }
    },
    location?: Location
    pageContext?: {
        currentPage: number
        numPages: number
        slug: string
        tag: string
        tagRaw: {
            fieldValue: string
        }
        tags: ITagProps[]
    }
}

export type PostImageProps = {
    height?: number
    onClick?: () => void
    path: boolean
    picture: ChildImageSharp
    rounded?: boolean
    slug?: string
    title: string
}

export type PostSubtitleProps = {
    className?: string
    date: string
    pathname: string
    readingTime?: string
    tags: string[]
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

export interface ITagProps {
    fieldValue: string,
    totalCount: number
}
