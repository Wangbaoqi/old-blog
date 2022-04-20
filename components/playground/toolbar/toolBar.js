

import FormatBtn from './formatBtn';
import ResetBtn from './resetBtn';

const ToolBar = ({
  title = '',
  handleFormat,
  handleReset
}) => {


  return (
    <header className="flex relative justify-between items-center h-10 px-4 rounded-t-lg border-b border-border-color bg-code-bg  text-third-color">
      <h3 className=" text-sm font-medium ">{title || 'Code Playground'}</h3>
      <div className="flex gap-2 -mr-3 text-white">
        <FormatBtn handleFormat={handleFormat} />
        <ResetBtn handleReset={handleReset} />
      </div>
  </header>
  )

  
}

export default ToolBar