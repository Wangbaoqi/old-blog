// import markdownStyles from './markdown-styles.module.css'

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote } from 'next-mdx-remote';

import { CodePre } from './mdxComponent'


export default function PostBody({ content }) {

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

  return (
    <MDXProvider components={components}>
      <MDXRemote  {...content}></MDXRemote>
    </MDXProvider>
  )
}
