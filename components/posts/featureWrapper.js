
import { Container, SplitLayout } from '@components/layouts';
import { SearchBtn, Category } from '@components/ui'
import { FeatureCard } from '@components/posts';


const FeatureWrapper = ({
  featurePosts,
  categoryGroup
}) => {

  const leftChild = (
    <div className='grid grid-cols-1 gap-10'>
      <FeatureCard posts={ featurePosts }/>
    </div>
  )

  const rightChild = (
    <>
      <SearchBtn showText={true}/>
      <Category groupList={categoryGroup}/>
    </>
  )

  return (
    <Container>
      <SplitLayout
        mode='left'
        leftTitle='Featured Topics'
        leftChild={leftChild}
        rightChild={rightChild}
      />
    </Container>
  )
}

export default  FeatureWrapper