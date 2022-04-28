import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import readingTime from "reading-time";
import { bundleMDX } from "mdx-bundler";
import { remarkTocHeadings, remarkCodeTitles } from '@lib/remark';
import { rehypeMetaAttribute } from '@lib/rehype'

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import getAllFiles from './tool/getAllFiles';
import { groupBy } from '@lib/tool/data';
import { Search } from "react-feather";

export const ROOT = process.cwd();
export const POSTS_PATH = path.join(ROOT, "posts");
export const POSTS_COMPONENTS = path.join(ROOT, "components");


export const formatSlug = slug => {
  return slug.replace(/\.(mdx|md)/, '')
}

export const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf-8');
};

// get [{key, value}] from [...]
export const getTagGroupList = (list, type) => {
  const map = new Map();
  const tagGroupList = [];
  const tags= list.map(e => e[type]).flat();
  for (const item of tags) {
    const itemCount = map.get(item);
    if (map.has(item)) {
      map.set(item, itemCount + 1);
      continue
    }
    map.set(item, 1)
  }

  for (const [key, value] of map.entries()) {
    tagGroupList.push({
      key,
      value
    })
  }
  return tagGroupList
}

export const filterEveryList = (sourceList, { searchVal, tags = '' }) => {

  const tagsList = tags.split(',');
  const searchKey = /^[1-9]*$/.test(searchVal) ? 'id' : 'title';


  const filterTagTopic = (tags) => {

    for (const tag of tagsList) {
      return tags.includes(tag)
    }

  }

  return sourceList.filter(e => {

    const searchFilter = (e['title']).includes(searchVal);
    const tagFilter = filterTagTopic(e.tags);
    console.log(tagFilter, 'tagFilter');


    return (searchFilter || tagFilter)
  })

}





export const getAllPosts = async () => {
  const files = getAllFiles(POSTS_PATH);
  const allPosts = [];
  for (const file of files) {
    const fileName = file.slice(POSTS_PATH.length + 1).replace(/\\/g, '/');
    if (fileName.includes('DS_Store')) {
      continue
    }
    const source = getSourceOfFile(fileName);
    const { data: frontmatter } = matter(source);
    const post = {
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date ? dayjs(frontmatter.date).format('YYYY-MM-DD') : null,
    }
    if (!frontmatter.draft) {
      allPosts.push(post)
    }
  }
  allPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
  return allPosts
};

export const getSinglePost = async (slug) => {

  const source = getSourceOfFile(slug + ".mdx")
  const toc = [];

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(ROOT, 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(ROOT, 'node_modules', 'esbuild', 'bin', 'esbuild')
  }

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: POSTS_COMPONENTS,
    mdxOptions: (options, frontmatter) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        [remarkTocHeadings, { exportRef: toc }],
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeMetaAttribute,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  });

  
  return {
    frontmatter: {
      ...frontmatter,
      readTime: readingTime(code),
      wordCount: code.split(/\s+/gu).length
    },
    toc,
    code,
  };
};

export const getFeaturePost = async () => {
  const allPosts = await getAllPosts();
  const featurePosts = allPosts.filter(post => post.feature && !post.postShow).sort((a, b) => a.date > b.date);
  return featurePosts.slice(0, 3);
}

export const getRecentPost = async () => {
  const allPosts = await getAllPosts();
  const recentPosts = allPosts.filter(post => !post.postShow).sort((a, b) => a.date > b.date);
  return recentPosts.slice(0, 10);
}

export const getGroupByCategory = async (type = 'category') => {
  const allPosts = await getAllPosts();
  const cateGoryList =  allPosts.filter(post => !post.postShow)
  const categoryGroup = groupBy(cateGoryList, type)
  return categoryGroup
}

export const getAlgorithmPost = async () => {
  const allPosts = await getAllPosts();
  const algorithmGroup = groupBy(allPosts, 'subCategory');
  const { breakThrough = [], dataStructure = [], everyDay = [] } = algorithmGroup || {};
  const tagGroup = getTagGroupList(everyDay, 'tags');
  

  return {
    structureList: dataStructure,
    breakList: breakThrough,
    everyDay,
    tagGroup
  }
}