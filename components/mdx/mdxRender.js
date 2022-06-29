import { useRouter } from "next/router";
import { useMemo } from "react";
import Head from "next/head";
import { getMDXComponent, getMDXExport } from "mdx-bundler/client";
import {
  CodePre,
  PostLink,
  BlockQuote,
  SideNote,
  PostHeader,
  Img,
  Strong,
  InlineCode,
  Para,
  Tags,
  Iframe,
  Whimsical,
  CodePen,
  Processon
} from "@components/mdx";
import { NextPost } from "@components/posts";
import PlayGround from "@components/playground/playground";

const MDXRenderer = ({ code, frontmatter, prev, next, views }) => {
  const router = useRouter();

  const components = {
    h2: (props) => (
      <h2
        className="relative pt-20 -mt-4 cursor-pointer my-6 text-anchor-color text-2xl font-bold leading-10 group"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="relative pt-20 -mt-4 cursor-pointer my-6 text-anchor-color text-xl font-bold leading-10 group"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="relative pt-20 -mt-4 cursor-pointer my-6 text-xl font-bold leading-10 group"
        {...props}
      />
    ),
    a: (props) => <PostLink {...props} />,
    em: (props) => <i {...props} />,
    pre: (props) => <CodePre {...props} />,
    strong: (props) => (
      <strong
        className="mx-1 font-extrabold text-anchor-color font-Sriracha"
        {...props}
      />
    ),
    code: (props) => <InlineCode {...props} />,
    table: (props) => <table className="table" {...props} />,
    img: (props) => <Img {...props} />,
    p: (props) => <Para {...props} />,
    ul: (props) => <ul className="ml-6 my-3 list-disc" {...props} />,
    ol: (props) => <ol className="ml-6 my-3 list-decimal" {...props} />,
    li: (props) => <li className="my-3  leading-loose marker:mr-4 marker:text-hover-color" {...props} />,
    blockquote: (props) => <BlockQuote {...props} />,
    PlayGround,
    Strong,
    SideNote,
    Iframe,
    Whimsical,
    CodePen,
    Processon
  };

  const mdxExport = getMDXExport(code);
  const MDXLayout = useMemo(() => mdxExport.default, [code]);
  return (
    <>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <article className="relative mb-32 max-w-4xl mx-auto">
            <PostHeader {...frontmatter} views={views} />
            <MDXLayout components={components} />
            <NextPost prev={prev} next={next} />
            <Tags tags={frontmatter.tags} />
          </article>
        </>
      )}
    </>
  );
};

export default MDXRenderer;
