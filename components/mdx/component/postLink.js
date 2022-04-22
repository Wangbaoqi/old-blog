import Link from "next/link";

import { Link as LinkIcon } from 'react-feather';

const PostLink = ({
  href = '',
  ...rest
}) => {
  const inter = href.startsWith('http');
  const anchor = href.startsWith('#');
  const acls = 'text-code-color hover:underline hover:underline-offset-4 font-medium font-mono'

  if (anchor) {
    return (
      <a className="absolute -left-8 top-2 opacity-0 transition-opacity group-hover:opacity-100" href={href} {...rest}>
        <LinkIcon size={20}/>
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