
import { DayTablePost, } from '@components/algorithm';
import { RecomendWrapper, FeatureCard } from '@components/posts';
import { Title } from '@components/ui';

const AlgorithmWrapper = ({
  structureList = [],
  breakList = [],
  dayData = []
}) => {

  return (
    <>
      <section className='mb-20'>
        <Title title='Data Structure' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16 mt-10'>
          <FeatureCard posts={structureList} mode='col'/>
        </div>
      </section>
      <RecomendWrapper recomendPosts={breakList} title='breakThrough' />
      <DayTablePost dayList={dayData}/>
    </>
  )
}


export default AlgorithmWrapper