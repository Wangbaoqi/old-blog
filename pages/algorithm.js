import { getAlgorithmPost } from "@lib/mdx";
import { Layout } from '@components/layouts';
import { AlgorithmWrapper } from '@components/posts';

const AlgorithmPost = ({
  structureList = [],
  breakList = [],
  everyDay = [],
}) => {

  return (
    <>
      <Layout type='page' title={'Nate Wang blog data structure algorithm and leetCode topics'}>
        <AlgorithmWrapper
          structureList={structureList}
          breakList={breakList}
          dayData={everyDay}
        />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const algoProps = await getAlgorithmPost();
  return {
    props: { ...algoProps },
  };
};


export default AlgorithmPost