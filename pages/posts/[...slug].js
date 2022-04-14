import { useRouter } from 'next/router'
import Container from '@components/container'
import Layout from '@components/layout'
import { getPostBySlug, getFileBySlug, getAllPosts, formatSlug } from '@lib/api'
import { serialize } from 'next-mdx-remote/serialize'
import { remarkMdxCodeMeta } from 'remark-mdx-code-meta';
import remarkCodeTitles from '@lib/rehype-meta-as-attributes'
import { MDXLayoutRenderer } from '@components/mdxRender';

export default function Post({ post }) {

  return (
    <Layout>
      <section className='flex flex-col md-flex-row flex-wrap mt-10 px-3 md:px-0'>
        <div className='w-full md:w-9/12 md:pr-5'>
          <MDXLayoutRenderer post={ post }/>
        </div>
        <div className='w-full md:w-3/12'></div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts(['slug']);
  const postIndex = posts.findIndex((post) => formatSlug(post.slug) === params.slug.join('/'));

  const prev = posts[postIndex + 1] || null
  const next = posts[postIndex - 1] || null

  const post = getPostBySlug(params.slug.join('/'), [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  })
  
  return {
    props: {
      post: {
        ...post,
        content: content,
        prev,
        next
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug.split('/'),
        },
      }
    }),
    fallback: false,
  }
}
