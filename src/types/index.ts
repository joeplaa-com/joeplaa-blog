export type AllPostsProps = {
    allPosts: Array<PostTypeProps>
    tags: Array<LabelProps>
}

export type AuthorProps = {
    name: string
    picture: string
}

export type CoverImageProps = {
    slug?: string
    page: string
    picture: string
    rounded?: boolean
    title: string
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

export type PostBodyProps = {
    content: string
}

export type PostHeaderProps = {
    author?: AuthorProps
    coverImage: string
    date: string
    page: string
    slug?: string
    title: string
}

export type PostTypeProps = {
    author?: AuthorProps
    content?: string
    coverImage: string
    date: string
    excerpt: string
    ogImage?: {
        url: string
    }
    page: string
    slug: string
    tags: string
    title: string
}

export type TagProps = {
    page: string
    tag?: LabelProps
}