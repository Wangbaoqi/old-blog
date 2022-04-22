


import Logo from './logo';

import { GitHub } from 'react-feather';

const PersonCard = () => {

  return (
    <section className="flex flex-col justify-start items-center bg-second-bg border border-border-color rounded-2xl h-p-card py-5 px-4">
      <div className=' rounded-md overflow-hidden '>
        <img src='./assets/authors/logo.png' alt="" className='w-20 h-20'/>
      </div>
      <Logo />
      <div className='flex gap-3'>

      </div>

    </section>
  )
}

export default PersonCard