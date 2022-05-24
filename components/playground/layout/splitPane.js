import { useRef } from "react";
import { useDrag } from '@hooks/index';

const SplitPane = ({
  layout = 'row',
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

  const sCls = layout === 'row' ? 'flex-row' : 'flex-col';
  const bW = layout === 'col' ? 'md:w-full' : 'md:w-4 md:after:w-3 md:after:h-full';
  const bh = layout === 'col' ? 'md:before:h-px' : 'md:before:w-px md:before:h-auto';
  return (
    <>
      <div ref={rulerRef}></div>
      <div className="max-w-full overflow-hidden ">
        <div className={`flex flex-col md:${sCls} items-stretch h-full bg-playground-bg`} ref={containerRef}>
          <div className="p-5 pt-0 -mr-2" style={{flex: leftWidth}}>{ leftChild }</div>
          <button
            ref={dividerRef}
            className={`relative ${bW} ${bh} md:cursor-col-resize md:p-0 block m-0 border-0 outline-none
             md:before:absolute md:beformd:before:absolute md:before:contentse:contents md:before:inset-0 md:before:m-auto md:before:bg-border-color
             md:after:absolute md:after:contents 
            md:hover:bg-border-color-5 md:visited:bg-border-color-5`}>
          </button>
          <div className="flex flex-col -ml-2 bg-gray-100 dark:bg-transparent p-5 pt-0" style={{flex: rightWidth}}>{ rightChild }</div>

        </div>

      </div>
    </>
    
  )
}


export default SplitPane