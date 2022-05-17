

import { ZapOff } from 'react-feather';

const ResetBtn = ({
  handleReset
}) => {


  return (
    <button
      className="text-sm text-third-color  h-8 flex justify-center items-center"
      onClick={handleReset}
    >
      <ZapOff size={14} color={'var(--fg-third)'} className='mr-1'/> Reset
    </button>
  )
}

export default ResetBtn