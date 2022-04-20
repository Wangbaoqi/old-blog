

import { RefreshCw } from 'react-feather';

const RefreshBtn = ({
  handleRefresh
}) => {


  return (
    <button
      className="w-6 h-6 flex justify-center items-center"
      onClick={handleRefresh}
    >
      <RefreshCw size={14} color={'var(--fg-third)'}/>
    </button>
  )
}

export default RefreshBtn