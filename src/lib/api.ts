import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { navigation } from './data'

function getPostsDirectory(folder) {
    switch (folder) {
    case '/posts':
        return join(process.cwd(), '_posts' + navigation.posts);
    }
}

export function getPostSlugs(folder) {
    return fs.readdirSync(getPostsDirectory(folder))
}

export function getPostBySlug(slug, fields = [], folder) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(getPostsDirectory(folder), `${realSlug}.md`)
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

export function getAllPosts(fields = [], folder) {
    const slugs = getPostSlugs(folder)
    return slugs.map(slug => getPostBySlug(slug, fields, folder))
}
