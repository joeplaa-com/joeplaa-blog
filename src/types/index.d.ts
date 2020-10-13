import { ReactElement, ReactNode } from 'react'
import { FixedObject, FluidObject } from 'gatsby-image'

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
    page: string
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
}

export type LabelProps = {
    value: string
    label: string
    count: number
}

export type LayoutProps = {
    children?: string | ReactNode
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

export type PageProps = {
    location: {
        pathname: string
    }
}

// === Begin Posts ===
type FrontMatterProps = {
    author: string
    cover?: {
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

export interface PostProps extends PostBasicProps {
    excerpt?: string
}

export type PostBasicProps = {
    fields: {
        slug: string
    }
    fileAbsolutePath: string
    frontmatter: FrontMatterProps
}

export type PostBodyProps = {
    content: string
}

export type PostButtonProps = {
    page: string
    title: string
    to: string
    type: string
}

interface PostQueryNode extends PostProps {
    body: string
    id: string
}

export type PostQueryProps = {
    data: {
        allMdx: {
            nodes: Array<PostQueryNode>
            group: Array<{
                fieldValue: string
                totalCount: number
            }>
        },
        site: {
            siteMetadata: {
                title: string
            },
        }
    }
}

export type PostTagsProps = {
    data: {
        mdx: {
            totalCount: number
            edges: {
                node: {
                    fields: {
                        slug: string
                    }
                    frontmatter: {
                        title: string
                    }
                }
            }
        }
    }
    pageContext: {
        tag: string
    }

}

export type PostTemplateProps = {
    data: {
        mdx: {
            author: string
            body: string
            edges: Array<{ node: PostBasicProps }>
            excerpt: string
            fields: {
                slug: string
            }
            frontmatter: FrontMatterProps
            totalCount: number
        }
    }
    pageContext: {
        next: PostBasicProps,
        previous: PostBasicProps
        tag: string
    }
}

export type PostHeaderProps = {
    author?: string
    cover: string
    date: string
    path: string
    slug?: string
    title: string
}

export type PostImageProps = {
    className?: string
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
    page: string
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
    size: string
}

export type TagProps = {
    icon?: ReactElement
    page: string
    tag: LabelProps
}