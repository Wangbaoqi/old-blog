import fs from 'fs';
import path from 'path';
import { join } from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';
import { compileSync } from 'xdm';
import remarkCodeTitles from './rehype-meta-as-attributes'


import readingTime from 'reading-time'

import getAllFilesRecursively from './utils/files'


const root =  process.cwd()

const postsDirectory = join(process.cwd(), 'blog')


export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function getFiles() {
  // const prefixPaths = path.join(root, 'data', type)
  const files = getAllFilesRecursively(postsDirectory)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file) => file.slice(postsDirectory.length + 1).replace(/\\/g, '/'))
}


export async function getAllFilesFrontMatter() {

  const files = getAllFilesRecursively(postsDirectory)

  const allFrontMatter = []

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(postsDirectory.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      })
    }
  })

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
}




////////////* ///////////

export function getPostSlugs() {
  // return fs.readdirSync(postsDirectory)

  return getFiles()
}


export function getFileBySlug(slug) {
  const realSlug = slug.replace(/\.(mdx|md)/, '');

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const source = compileSync(fileContents, {
    jsx: true,
    remarkPlugins: [remarkMdxCodeMeta],
  });

  console.log(source, 'source');
}



export function getPostBySlug(slug, fields = []) {
  // console.log(slug, 'slug');
  const realSlug = slug.replace(/\.(mdx|md)/, '');

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  // console.log(items, 'postItem');

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  // console.log(slugs);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}



