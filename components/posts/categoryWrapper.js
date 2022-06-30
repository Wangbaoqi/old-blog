
import { SplitLayout } from "@components/layouts";
import { FeatureCard } from "@components/posts";
import { Category } from "@components/ui";

const CategoryWrapper = ({
  title,
  categoryPost = [],
  groupCategory
}) => {

  const leftChild = (
    <div className="grid md:grid-cols-2 gap-16">
      <FeatureCard
        mode='col'
        lineNum='2'
        posts={categoryPost}
      />
    </div>
  )

  const rightChild = (
    <>
      <Category
        groupList={groupCategory}
      />
    </>
  )

  return (
    <SplitLayout
      leftTitle={title}
      leftChild={leftChild}
      rightChild={rightChild}
    />
  )
}


export default CategoryWrapper