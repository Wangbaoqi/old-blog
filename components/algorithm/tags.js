import { memo, useState, useEffect } from 'react';
import { tagTheme } from "@utils/tagtheme";
import { Check } from 'react-feather';

const Tags = ({
  tagsList = [],
  setTagChange
}) => {

  const [tags, setTags] = useState(tagsList);

  console.log(tags);
  const checkTags = (idx) => {
    tags[idx].check = !tags[idx].check;
    setTags([...tags])
  }
  useEffect(() => {
    const checkList = tags.filter(e => e.check).map(e => e.key)
    setTagChange(checkList)
  }, [tags])

  return (
    <div className="py-4 flex items-center ">
      <h3 className='text-second-color font-Sriracha text-base mr-2 md:mr-4'>Tags: </h3>
      <div className='flex flex-wrap gap-2 flex-1'>
        {
          tags.map((tag, idx) => {
            const typeCls = tagTheme[tag.key]
            const tagCls = tag.check ? ' text-code' : 'bg-second-bg';
            return (
              <span
                className={`rounded flex items-center gap-3 text-sm cursor-pointer px-4 py-1 ${typeCls} ${tagCls}`}
                key={tag.key}
                onClick={() => checkTags(idx)}
              >
                {tag.key} {tag.value}
                {
                  tag.check ? <Check size={15}  className=' '/> : ''
                }
              </span>
            )
          })
        }
      </div>
      
    </div>
  )
}

export default memo(Tags)