
import { getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { RecentCard } from '@components/posts';
import Link from 'next/link';
import { tagTheme } from "@utils/tagtheme";



const Category = ({
  groupCategory
}) => {
  const allCategory = Object.entries(groupCategory);
  return (
    <>
      <Layout type='page' title='Nate Wang blog Category'>
        <section className="relative flex gap-5 flex-wrap mt-4">
          {
            allCategory.map((cate, idx) => {

              const tagCls = tagTheme[cate[0]]
              return (
                <Link href={`/category/${cate[0]}`} key={idx}>
                  <div className={`font-Sriracha cursor-pointer rounded py-1 px-3 ${tagCls}`}>
                    {cate[0]}
                  </div>
                </Link>
              )
            })
          }
        </section>
        <>
          {
            allCategory.map((cate, idx) => (
              <div key={idx} className='my-4 px-4 md:px-0'>
                <header className="flex justify-between items-center py-10" > 
                  <h1 className=" text-2xl font-Sriracha">{cate[0]}</h1>
                  <span>{ cate[1].length } Articles</span>
                </header>
                <div className="grid md:grid-cols-3 gap-16">
                  <RecentCard posts={ cate[1]}/>
                </div>
              </div>
            ))
          }
        </>
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  // const posts = await getAllPosts();
  const groupCategory = await getGroupByCategory();
  return {
    props: { groupCategory },
  };
};


export default Category