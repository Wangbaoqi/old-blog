
import { RecomendWrapper, FeatureCard } from '@components/posts';
import { Title } from '@components/ui';

const AlgorithmWrapper = ({
  structureList = [],
  breakList = [],
}) => {
  return (
    <>
      <section className='container mx-auto mb-20 px-1'>
        <Title title='Data Structure'/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 px-3 md:px-0'>
          <FeatureCard posts={structureList} mode='col'/>
        </div>
      </section>
      <RecomendWrapper recomendPosts={breakList} title='breakThrough' />
    </>
  )
}


export default AlgorithmWrapper