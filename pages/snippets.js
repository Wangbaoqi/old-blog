
import { getGroupBySnippets, getallSnippets } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { SnippetWrapper } from '@components/posts';
import Link from 'next/link';
import { tagTheme } from "@utils/tagtheme";



const Snippets = ({
  allSnippets,
  groupSnippets
}) => {
  const snippetsGroup = Object.entries(groupSnippets);
  return (
    <>
      <Layout type='page' title='Nate Wang blog Snippets'>
        <SnippetWrapper snippetPosts={allSnippets} snippetGroup={snippetsGroup} />
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  const allSnippets = await getallSnippets();
  const groupSnippets = await getGroupBySnippets()
  return {
    props: { allSnippets, groupSnippets },
  };
};


export default Snippets