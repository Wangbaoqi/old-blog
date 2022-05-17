

import { SkipBack } from 'react-feather';

const ExcuterBtn = ({
  handleExcuter
}) => {


  return (
    <button
      className="text-sm text-third-color  h-8 flex justify-center items-center hover:text-second-color"
      onClick={handleExcuter}
    >
      <SkipBack size={14} color={'var(--fg-third)'} className='mr-1'/> Excuter
    </button>
  )
}

export default ExcuterBtn