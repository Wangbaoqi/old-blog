
import { Container, SplitLayout } from '@components/layouts';
import { RecentCard, FeatureCard } from '@components/posts';

const RecentWrapper = ({
  recentPosts = []
}) => {


  const leftPosts = recentPosts.slice(0,10)
  const rightPosts = recentPosts.slice(0,4)


  const leftChild = (
    <div className='w-full'>
      <RecentCard posts={leftPosts} />
    </div>
  )

  const rightChild = (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
      <FeatureCard posts={rightPosts} lineNum={2} />
    </div>
  )

  return (
    <SplitLayout
      mode='right'
      leftTitle='Recented Posts'
      leftChild={leftChild}
      rightChild={rightChild}
    />
  )
}


export default RecentWrapper