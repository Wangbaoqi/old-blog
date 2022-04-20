

import { SkipBack } from 'react-feather';

const ResetBtn = ({
  handleReset
}) => {


  return (
    <button
      className="text-xs text-third-color  h-8 flex justify-center items-center"
      onClick={handleReset}
    >
      <SkipBack size={13} color={'var(--fg-third)'} className='mr-1'/> Reset
    </button>
  )
}

export default ResetBtn