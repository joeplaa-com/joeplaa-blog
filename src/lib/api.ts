import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { navigation } from './data'

function getPostsDirectory(page) {
    switch (page) {
    case '/blog':
        return join(process.cwd(), '_posts' + navigation.blog);
    case '/howto':
        return join(process.cwd(), '_posts' + navigation.howto);
    case '/portfolio':
        return join(process.cwd(), '_posts' + navigation.portfolio);
    case '/recommended':
        return join(process.cwd(), '_posts' + navigation.recommended);
    }
}

export function getPostSlugs(page) {
    return fs.readdirSync(getPostsDirectory(page))
}

export function getPostBySlug(slug, fields = [], page) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(getPostsDirectory(page), `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    // Ensure only the minimal needed data is exposed
    fields.forEach(field => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (data[field]) {
            items[field] = data[field]
        }
    })

    return items
}

export function getAllPosts(fields = [], page) {
    const slugs = getPostSlugs(page)
    return slugs.map(slug => getPostBySlug(slug, fields, page))
}
