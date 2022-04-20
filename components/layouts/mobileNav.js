import React, { useState } from 'react';
import Link from "next/link";
import headList from '@data/headNav';
import cn from 'classnames';


import { AlignCenter, X} from 'react-feather';

const MobileNav = () => {
  const [status, setToogle] = useState(false)
  const hanldeToogle = () => {
    setToogle(!status)
  }
  const navCls = cn('fixed top-0  bottom-0 w-80 bg-black-2 dark:bg-white text-white dark:text-black text-xl p-6 z-1000 transition-all scroll-smooth', {
    'left-0': status,
    '-left-80': !status
  })
  const overlayCls = cn('fixed left-0 w-full top-0 h-full bg-black dark:bg-white transition-all ', {
    'opacity-30': status,
    'invisible': !status,
    'opacity-0': !status,
    'visible': status
  })

  return (
    <div className="sm:hidden">
      <div className='' onClick={() => setToogle(!status)}>
        <AlignCenter className='text-xl'/>
      </div>
      <div className={navCls}>
        <X onClick={() => setToogle(!status)}/>
        <nav className=' visible'>
          <ul>
            {
              headList.map((head, idx) => {
                return (
                  <li key={idx}>
                    <Link href={head.href}>{ head.title }</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      <div className={overlayCls} onClick={hanldeToogle}></div>
    </div>
  )
}

export default MobileNav