

const Tags = ({
  tagsList = []
}) => {


  return (
    <div className="">
      {
        tagsList.map(tag => (
          <span key={tag.key}>{tag.key} { tag.value}</span>
        ))
      }
    </div>
  )
}


export default Tags