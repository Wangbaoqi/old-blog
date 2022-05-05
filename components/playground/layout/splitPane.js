import { useRef } from "react";
import { useDrag } from '@hooks/index';

const SplitPane = ({

  leftChild,
  leftTitle,
  rightChild,
  rightTitle,

}) => {

  const rulerRef = useRef(null);
  const containerRef = useRef(null);
  const dividerRef = useRef(null);

  let { leftWidth, rightWidth, reset } = useDrag({
    defaultRatio: 0.5,
    rulerRef: rulerRef,
    containerRef,
    dividerRef,
    dividerWidth: 16,
  });

  console.log(leftWidth, 'leftWidth');
  console.log(rightWidth, 'rightWidth');

  return (
    <>
      <div ref={rulerRef}></div>
      <div className="max-w-full overflow-hidden ">
        <div className="flex flex-col md:flex-row items-stretch h-full bg-playground-bg" ref={containerRef}>
          <div className="p-5 pt-0 -mr-2" style={{flex: leftWidth}}>{ leftChild }</div>
          <button
            ref={dividerRef}
            className="
              relative md:w-4 md:cursor-col-resize md:p-0 block m-0 border-0 outline-none
              md:before:w-px md:before:h-auto md:before:absolute md:beformd:before:absolute md:before:contentse:contents md:before:inset-0 md:before:m-auto md:before:bg-border-color
              md:after:w-3 md:after:h-full md:after:absolute md:after:contents 
              md:hover:bg-border-color-5 md:visited:bg-border-color-5 
            ">
          </button>
          <div className="flex flex-col -ml-2 bg-gray-100 dark:bg-transparent p-5 pt-0" style={{flex: rightWidth}}>{ rightChild }</div>

        </div>

      </div>
    </>
    
  )
}


export default SplitPane