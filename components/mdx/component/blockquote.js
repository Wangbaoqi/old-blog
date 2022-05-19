

const BlockQuote = props => {


  return (
    <blockquote
      className='
        mb-1 leading-relaxed bg-blockquote-bg border-l-4 border-blockquote-l rounded text-md p-5 before:content-[open-quote] before:text-2xl '
      {...props} />
  )
}


export default BlockQuote