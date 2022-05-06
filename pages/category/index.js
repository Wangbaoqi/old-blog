
import { getGroupByCategory } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { RecentCard } from '@components/posts';
import Link from 'next/link';
import { categoryTheme } from "@config/tagtheme";



const Category = ({
  groupCategory
}) => {
  console.log(Object.entries(groupCategory), 'groupCategory');
  const allCategory = Object.entries(groupCategory);



  return (
    <>
      <Layout type='page'>
        <section className="flex gap-5 flex-wrap mt-4">
          {
            allCategory.map((cate, idx) => {

              const tagCls = categoryTheme[cate[0]]
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
                  <h3 className=" text-2xl font-Sriracha">{cate[0]}</h3>
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