import { Layout } from '@components/layouts';
import Link from 'next/link';

export default function BlogList({ featurePosts, categoryGroup, recentPost, everyList }) {
  return (
    <>
      <Layout type='page' title='Nate Wang blog Home Not Found page' showFooter={false}>
        <h1 className="absolute overflow-hidden w-px h-px -m-px">Not Found Page</h1>

        <h2 className='text-4xl'>Not Found</h2>
        <p className='text-3xl mb-24'>Sorry, there is nothing at the url</p>

        <Link href='/'>
          <p className=' text-xl text-anchor-color cursor-pointer'>Go Back Home</p>
        </Link>
      </Layout>
    </>
  );
}
