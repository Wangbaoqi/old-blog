
import { Title } from '@components/ui';

const SplitLayout = ({
  mode='left',
  leftTitle,
  leftChild,
  rightChild,
}) => {

  const leftCls = `w-full ${mode === 'left' ? 'lg:w-9/12 md:' : 'lg:w-3/12'}`
  const rightCls = `w-full ${mode === 'left' ? 'lg:w-3/12' : 'lg:w-9/12'}`


  return (
    <section className="container py-10">
      <Title title={leftTitle} showAll={ true }/>
      <section className="flex flex-col lg:flex-row gap-16 mt-10 px-3 md:px-0">
        <div className={leftCls}>
          {leftChild}
        </div>
        <div className={rightCls}>
          {rightChild}            
        </div>
      </section>
    </section>
  )
}


export default SplitLayout