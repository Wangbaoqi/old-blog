import { useRouter } from 'next/router'

import { useMemo } from 'react'
import PostHeader from './post-header'
import PostTitle from './post-title'
import PostBody from './post-body'
import Head from 'next/head'
import { CMS_NAME } from '@lib/constants'
import ErrorPage from 'next/error'



export const MDXLayoutRenderer = ({ post }) => {
  

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  // console.log(props.content, 'mdx content');

  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32 max-w-4xl mx-auto">
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content}/>
          </article>
        </>
      )}
    </>

  )
}
