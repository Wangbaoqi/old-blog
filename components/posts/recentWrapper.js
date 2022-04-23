
import { Container, SplitLayout } from '@components/layouts';
import { RecentCard, FeatureCard } from '@components/posts';

const RecentWrapper = ({
  recentPosts = []
}) => {

  console.log(recentPosts);

  const leftPosts = recentPosts.slice(0,2)
  const rightPosts = recentPosts.slice(2,6)

  const leftChild = (
    <div className=''>
      <RecentCard posts={leftPosts} />
    </div>
  )

  const rightChild = (
    <div className='md:grid md:grid-cols-2 md:gap-10'>
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