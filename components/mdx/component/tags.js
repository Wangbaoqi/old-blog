

import { Tag } from 'react-feather';
import { algoTheme } from "@utils/tagtheme";

const Tags = ({
  tags = []
}) => {

  return (

    <span className="flex items-center gap-2 my-5">
      <Tag size={20} />
      {
        tags.map((t, id) => {
          const typeCls = algoTheme[t]

          return (
            <strong className={` rounded-md py-0.5 px-2 text-pre ${typeCls}`} key={id}>{t}</strong>
          )
        })
        
      }
    </span>
  )
}

export default Tags