import { colorMap, tagColor } from '@config/tagTheme'
import { memo, useState, useEffect } from 'react';

const Tags = ({
  tagsList = [],
  setTagChange
}) => {

  const [tags, setTags] = useState(tagsList);

  const checkTags = (idx) => {
    tags[idx].check = !tags[idx].check;
    setTags([...tags])
  }
  useEffect(() => {
  
    const checkList = tags.filter(e => e.check).map(e => e.key)
    setTagChange(checkList)
    
  }, [tags])
  

  return (
    <div className="py-8">
      {
        tags.map((tag, idx) => {
          // const tagStr = colorMap[tag.key];
          // const tagCls = tagColor[tagStr] || '';
          const tagCls = tag.check ? 'bg-post-cover text-code' : 'bg-second-bg';
          return (
            <span
              className={`rounded-lg hover:bg-post-cover text-sm cursor-pointer px-4 py-1 mr-4 ${tagCls}`}
              key={tag.key}
              onClick={() => checkTags(idx)}
            >
              {tag.key} {tag.value}
            </span>
          )
        })
      }
    </div>
  )
}

export default memo(Tags)