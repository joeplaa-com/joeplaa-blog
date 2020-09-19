export type AllPostsProps = {
    allPosts: Array<PostTypeProps>
    tags: Array<LabelProps>
}

export type AuthorProps = {
    name: string
    picture: string
}

export type DateFormatterProps = {
    dateString: string
}

export type FilterProps = {
    page: string
    tags: Array<LabelProps>
}

export type LabelProps = {
    value: string
    label: string
}

export type LandingImageProps = {
    link: string
    picture: string
    title: string
}

export type LayoutProps = {
    children: React.ReactNode
    preview?: string
    siteDescription?: string
    siteTitle?: string
}

export type LinkProps = {
    classString?: string
    color: 'dark' | 'light' | 'navbar'
}

export type MetaProps = {
    siteDescription: string
    siteTitle: string
}

export type PortfolioImageProps = {
    onClick: () => void
    picture: string
    rounded?: boolean
    slug?: string
    title: string
}

export type PostBodyProps = {
    content: string
}

export type PostHeaderProps = {
    author?: AuthorProps
    postImage: string
    date: string
    path: string
    slug?: string
    title: string
}

export type PostImageProps = {
    className?: string
    onClick?: () => void
    path?: string
    picture: string
    rounded?: boolean
    slug?: string
    title: string
}

export type PostSubtitleProps = {
    className?: string
    date: string
    page: string
    tags: string
}

export type PostTitleProps = {
    onClick?: () => void
    path?: string
    slug: string
    title: string
}

export type PostTypeProps = {
    author?: AuthorProps
    content?: string
    postImage: string
    date: string
    excerpt: string
    ogImage?: {
        url: string
    }
    page?: string
    path?: string
    slug: string
    tags: string
    title: string
}

export type TagProps = {
    page: string
    tag?: LabelProps
}