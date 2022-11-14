
import { Container, SplitLayout } from '@components/layouts';
import { CategoryInner } from '@components/ui'
import { SnippetCard } from '@components/posts';

const SnippetWrapper = ({
  snippetPosts,
  snippetGroup
}) => {
  const leftChild = (
    <div className='grid grid-cols-1 gap-10'>
      <SnippetCard posts={ snippetPosts }/>
    </div>
  )
  const rightChild = (
    <>
      <CategoryInner groupList={snippetGroup}/>
    </>
  )

  return (
    <Container>
      <SplitLayout
        mode='left'
        leftTitle='Snippets Recenetly Topics'
        leftChild={leftChild}
        rightChild={rightChild}
      />
    </Container>
  )
}

export default SnippetWrapper