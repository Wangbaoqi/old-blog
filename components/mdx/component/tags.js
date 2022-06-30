import { Tag } from 'react-feather';
import { tagTheme } from "@utils/tagtheme";

const Tags = ({
  tags = [],
  showIcon = true
}) => {

  return (
    <span className="flex items-center gap-2">
      {
        showIcon ? <Tag size={20} /> : ''
      }
      {
        tags.map((t, id) => {
          const typeCls = tagTheme[t]
          return (
            <strong className={` rounded-md py-0.5 px-2 text-pre tag-${typeCls}`} key={id}>{t}</strong>
          )
        })
      }
    </span>
  )
}

export default Tags