

const Link = ({
  href = '',
  val = ''
}) => {

  return <a href={href} className="text-code-color hover:underline hover:underline-offset-4 px-1 font-medium font-mono">
    {val}
  </a>
}


export default Link