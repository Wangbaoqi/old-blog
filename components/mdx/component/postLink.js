import Link from "next/link";

import { Link as LinkIcon } from 'react-feather';

const PostLink = ({
  href = '',
  ...rest
}) => {
  const inter = href.startsWith('http');
  const anchor = href.startsWith('#');
  const acls = 'text-code-color hover:underline hover:underline-offset-4 px-1 font-medium font-mono'

  if (anchor) {
    return (
      <a className="absolute bottom-3 -left-8 top-32 opacity-0 transition-opacity group-hover:text-hover-color group-hover:opacity-100" href={href} {...rest}>
        <LinkIcon size={20} className='text-hover-color opacity-100'/>
      </a>
    )
  }

  if (inter) {
    return (
      <a className={acls} target='_blank' href={href} {...rest} />
    )
  }

  return (
    href ? 
    <Link href={href}>
      <a className={acls} {...rest}/>
      </Link> : <a {...rest} className={acls} />
  )
}

export default PostLink