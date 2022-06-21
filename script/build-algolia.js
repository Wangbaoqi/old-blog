const dotenv = require("dotenv");
const algoliasearch = require("algoliasearch/lite");
const path = require('path');
const fs = require('fs');

const matter = require("gray-matter");

const ROOT = process.cwd();
const POSTS_PATH = path.join(ROOT, "posts");


const formatSlug = slug => {
  return slug.replace(/\.(mdx|md)/, '')
}

const getSourceOfFile = (fileName) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName), 'utf-8');
};

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((v, f) => f(v), x)

const flattenArray = (input) =>
  input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], [])

const map = (fn) => (input) => input.map(fn)

const walkDir = (fullPath) => {
  return fs.statSync(fullPath).isFile() ? fullPath : getAllFiles(fullPath)
}

const pathJoinPrefix = (prefix) => (extraPath) => path.join(prefix, extraPath)

const getAllFiles = (folder) =>
  pipe(fs.readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder)


async function getAllPosts() {
  const allFiles = getAllFiles(POSTS_PATH);
  const allPosts = [];
  for (const file of allFiles) {
    const fileName = file.slice(POSTS_PATH.length + 1).replace(/\\/g, '/');
    if (fileName.includes('DS_Store')) {
      continue
    }
    const source = getSourceOfFile(fileName);
    const slug = formatSlug(fileName);
    const { content, data } = matter(source);
    const post = {
      // content,
      data,
      slug
    }
    allPosts.push(post)
  }
  return allPosts
}

function transformPostsToSearchObjects(articles) {
  return articles.map(({data, slug}) => {
    return {
      objectID: data.title,
      title: data.title,
      description: data.excerpt,
      slug: slug,
      tags: data.tags, // we can nest objects in Algolia!
      date: data.date,
      category: data.category,
      subCategory: data.subCategory
    };
});
}


(async function () { 

  try {
    dotenv.config();
  
    if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
        throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
    }
  
    if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
        throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
    }
    
    const allPosts = await getAllPosts();
    const transformed = transformPostsToSearchObjects(allPosts)
    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    );

    // initialize the index with your index name
    const index = client.initIndex("wangbaoqi");

    // add the data to the index
    const algoliaResponse = await index.saveObjects(transformed);

    console.log(
      `Successfully added ${algoliaResponse.objectIDs.length} records to Algolia search! Object IDs:\n${algoliaResponse.objectIDs.join(
          "\n",
      )}`,
    );
    // console.log(algoliaObject);
    
    
  } catch (error) {
      console.error(error);
      process.exit(1);
  }

})()



console.log("It works!")