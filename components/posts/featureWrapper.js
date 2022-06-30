
import { Container, SplitLayout } from '@components/layouts';
import { Category } from '@components/ui'
import { FeatureCard } from '@components/posts';
import SearchDoc from '@components/search/docsearch';

const FeatureWrapper = ({
  featurePosts,
  categoryGroup
}) => {

  const leftChild = (
    <div className=' grid grid-cols-1 gap-14'>
      <FeatureCard posts={ featurePosts }/>
    </div>
  )

  const rightChild = (
    <>
      <SearchDoc />
      <Category groupList={categoryGroup}/>
    </>
  )

  return (
    <SplitLayout
      mode='left'
      leftTitle='Featured Topics'
      leftChild={leftChild}
      rightChild={rightChild}
    />
  )
}

export default  FeatureWrapper