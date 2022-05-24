import SideNote from "./sideNote"


const BlockQuote = props => {

  return (
    <blockquote
      className=''
       >
        <SideNote {...props}/>
      </blockquote>
  )
}


export default BlockQuote