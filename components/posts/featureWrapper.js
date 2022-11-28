
import { Container, SplitLayout } from '@components/layouts';
import { Category } from '@components/ui'
import { FeatureCard, RecentCard } from '@components/posts';
import SearchDoc from '@components/search/docsearch';

const FeatureWrapper = ({
  featurePosts,
  recentPosts,
  categoryGroup
}) => {

  const leftChild = (
    <div className='grid grid-cols-1 gap-14'>
      <FeatureCard posts={ recentPosts }/>
    </div>
  )

  const rightChild = (
    <div className='sticky top-24'>
      <SearchDoc />
      <Category groupList={categoryGroup} />
      <RecentCard posts={featurePosts} />
    </div>
  )

  return (
    <SplitLayout
      mode='left'
      leftTitle='Recented Posts'
      leftChild={leftChild}
      rightChild={rightChild}
    />
  )
}

export default FeatureWrapper