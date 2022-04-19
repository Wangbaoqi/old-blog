import { useRouter } from 'next/router';
import { useMemo } from 'react';
import Head from 'next/head'
import { getMDXComponent } from 'mdx-bundler/client';
import { CodePre } from '@components/mdx'


const MDXRenderer = ({ code, frontmatter, prev, next, toc }) => {
  const router = useRouter();

  
  const components = {
    h2: props => <h2 className='my-6 text-3xl font-bold leading-10' {...props} />,
    h3: props => <h3 className='my-6 text-2xl font-bold leading-10' {...props} />,

    em: props => <i {...props} />,
    pre: props => <CodePre {...props} />,
    strong: props => <strong className='mx-2 font-extrabold  font-sans' {...props} />,
    code: props => <code className='p-1 mx-1 rounded-sm text-code bg-cyan/20 font-bold text-sm' {...props} />,
    p: props => <p className='my-4 leading-8' {...props} />,
    ul: props => <ul className='ml-6 my-3 list-disc' {...props} />,
    ol: props => <ol className='ml-6 my-3 list-decimal' {...props} />,
    li: props => <li className='mb-1 leading-relaxed' {...props} />,
    blockquote: props => <blockquote className='mb-1 leading-relaxed' {...props} />,
  }
  const MDXLayout = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className="mb-32 max-w-4xl mx-auto">
            
            {/* <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={post.content}/> */}
            <MDXLayout  components={components}/>
          </article>
        </>
      )}
    </>

  )
}


export default MDXRenderer