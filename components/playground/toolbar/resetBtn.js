

import { SkipBack } from 'react-feather';

const ResetBtn = ({
  handleReset
}) => {


  return (
    <button
      className="w-8 h-8 flex justify-center items-center"
      onClick={handleReset}
    >
      <SkipBack size={16} color={'var(--fg-third)'}/>
    </button>
  )
}

export default ResetBtn