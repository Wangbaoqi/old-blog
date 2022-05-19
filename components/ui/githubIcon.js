
import { GitHub } from "react-feather";
import { PostLink } from '@components/mdx'

const GithubIcon = () => {



  return (
    <>
      <PostLink href='https://github.com/Wangbaoqi'>
        <GitHub className="dark:hover:text-white text-primary-color" size={20}/>
      </PostLink>
    </>
  )
}

export default GithubIcon