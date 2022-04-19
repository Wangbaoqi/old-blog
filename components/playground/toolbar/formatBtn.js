

import { Zap } from 'react-feather';

const FormatBtn = ({ 
  handleFormat
}) => {


  return (
    <button
      className="w-8 h-8 flex justify-center items-center"
      onClick={handleFormat}
    >
      <Zap size={16} color={'var(--fg-third)'} />
    </button>
  )
}

export default FormatBtn