import { memo, useState, useEffect } from 'react';
import { tagTheme } from "@utils/tagtheme";
import { Check } from 'react-feather';
import Link from 'next/link';
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
    <div className="py-4 flex items-start">
      <h3 className='text-second-color font-Sriracha text-base mr-2 md:mr-4'>Tags: </h3>
      <div className='flex flex-wrap gap-3 flex-1'>
        {
          tags.map((tag, idx) => {
            const typeTag = tagTheme[tag.key]
            const tagCls = tag.check ? ' text-code' : 'bg-second-bg';
            return (
              <Link href={`/algorithm/${typeTag}/page/1`} key={tag.key}>
                <span
                  className={`rounded flex items-center gap-3 text-sm cursor-pointer px-4 py-1 tag-${typeTag} ${tagCls}`}
                  onClick={() => checkTags(idx)}
                >
                  {tag.key} {tag.value}
                  {
                    tag.check ? <Check size={15}  className=' '/> : ''
                  }
                </span>
              </Link>
              
            )
          })
        }
      </div>
      
    </div>
  )
}

export default memo(Tags)