
import { Container, SplitLayout } from '@components/layouts';
import { RecentCard, FeatureCard } from '@components/posts';

const RecentWrapper = ({
  recentPosts = []
}) => {


  const leftPosts = recentPosts.slice(0,3)
  const rightPosts = recentPosts.slice(3,7)


  const leftChild = (
    <div className='w-full'>
      <RecentCard posts={leftPosts} />
    </div>
  )

  const rightChild = (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <FeatureCard posts={rightPosts} mode='col'/>
    </div>
  )

  return (
    <Container>
      <SplitLayout
        mode='right'
        leftTitle='Recented Posts'
        leftChild={leftChild}
        rightChild={rightChild}
      />
    </Container>
  )
}


export default RecentWrapper