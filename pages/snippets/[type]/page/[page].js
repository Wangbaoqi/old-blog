import { getGroupBySnippets } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { SnippetWrapper } from '@components/posts';
import { objCountBy } from '@lib/tool/data';


const SnippetTypeWrapper = ({
  type,
  posts,
  groupSnippets,
  pagination
}) => {

  const snippetsGroup = Object.entries(groupSnippets);

  return (
    <Layout type='page' title={`Nate Wang blog Snippets of ${type}`}>
      <SnippetWrapper snippetPosts={posts} snippetGroup={snippetsGroup} />
    </Layout>
  )
}

export default SnippetTypeWrapper


export async function getStaticPaths(ctx) {
  const tagLists = objCountBy(await getGroupBySnippets());
  const path = tagLists.map((tag) => {
    return Array.from({ length: tag.value }, (_, i) => {
      return {
        params: {
          type: tag.key,
          page: (i + 1).toString()
        }
      }
    })
  })
  return {
    paths: path.flat(),
    fallback: false,
  };
}


export const getStaticProps = async (ctx) => {
  const {
    params: { page, type }
  } = ctx;

  const groupSnippets = await getGroupBySnippets()
  const snippetList = groupSnippets[type];

  const perPage = 10;
  const pageNumber = parseInt(page);
  const posts = snippetList.slice(
    perPage * (pageNumber - 1),
    perPage * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(snippetList.length / perPage),
  }

  return {
    props: {
      type,
      posts,
      pagination,
      groupSnippets
    },
  }
}
