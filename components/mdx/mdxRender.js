import { useRouter } from "next/router";
import { useMemo } from "react";
import Head from "next/head";
import { getMDXComponent } from "mdx-bundler/client";
import { CodePre, PostLink, BlockQuote, PostHeader } from "@components/mdx";
import { NextPost } from "@components/posts";
import PlayGround from "@components/playground/playground";

const MDXRenderer = ({ code, frontmatter, prev, next, toc }) => {
  const router = useRouter();

  const components = {
    h2: (props) => (
      <h2
        className="relative pt-36 -mt-28 cursor-pointer my-6 text-3xl font-bold leading-10 group"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="relative pt-36 -mt-28 cursor-pointer my-6 text-2xl font-bold leading-10 group"
        {...props}
      />
    ),

    a: (props) => <PostLink {...props} />,
    em: (props) => <i {...props} />,
    pre: (props) => <CodePre {...props} />,
    strong: (props) => (
      <strong className="mx-2 font-extrabold font-Sriracha" {...props} />
    ),
    code: (props) => (
      <code
        className="p-1 mx-1 rounded-sm text-code-color bg-code-bg font-bold text-sm"
        {...props}
      />
    ),
    p: (props) => <p className="my-4 leading-8" {...props} />,
    ul: (props) => <ul className="ml-6 my-3 list-disc" {...props} />,
    ol: (props) => <ol className="ml-6 my-3 list-decimal" {...props} />,
    li: (props) => <li className="mb-1 leading-relaxed" {...props} />,
    blockquote: (props) => <BlockQuote {...props} />,
    PlayGround,
  };
  const MDXLayout = useMemo(() => getMDXComponent(code), [code]);
  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className="relative mb-32 max-w-4xl mx-auto">
            <PostHeader {...frontmatter} />
            <MDXLayout components={components} />
            <NextPost prev={prev} next={next} />
          </article>
        </>
      )}
    </>
  );
};

export default MDXRenderer;
