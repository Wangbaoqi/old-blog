

const SplitPane = ({

  leftChild,
  leftTitle,
  rightChild,
  rightTitle,

}) => {



  return (
    <div className=" max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch h-full bg-code-bg">
        <div className="flex-1 py-2 px-5">{ leftChild }</div>
        <button
          className="
            relative md:w-4 md:cursor-col-resize md:p-0 block m-0 border-0 outline-none
            md:before:w-px md:before:h-auto md:before:absolute md:beformd:before:absolute md:before:contentse:contents md:before:inset-0 md:before:m-auto md:before:bg-border-color
            md:after:w-3 md:after:h-full md:after:absolute md:after:contents 
            md:hover:bg-border-color-5
          ">
        </button>
        <div className="flex-1">{ rightChild }</div>

      </div>

    </div>
  )
}


export default SplitPane