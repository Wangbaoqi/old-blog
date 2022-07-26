import { memo, useState, useEffect } from 'react';
import { tagTheme } from "@utils/tagtheme";
import { Check } from 'react-feather';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Tags = ({
  tagsList = [],
  setTagChange
}) => {
  const { query = {} } = useRouter();
  const { type = '' } = query;

  const [tags, setTags] = useState(tagsList);
  const checkTags = (idx) => {
    tags.forEach(e => e.check = false);
    tags[idx].check = !tags[idx].check;
    setTags([...tags])
  }

  return (
    <div className="py-4 flex items-start">
      <h3 className='text-base mr-2 md:mr-4 text-anchor-color'>Tags: </h3>
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
                    tag.check || typeTag == type ? <Check size={15}  className=''/> : ''
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