import React, { useState } from 'react';
import Link from "next/link";
import { headNav } from '@data/headNav';
import cn from 'classnames';


import { AlignJustify, X} from 'react-feather';

const MobileNav = () => {
  const [status, setToogle] = useState(false)
  const hanldeToogle = () => {
    setToogle(!status)
  }
  const navCls = cn('fixed top-0 bottom-0 w-3/4 bg-second-bg text-second-color text-xl p-6  z-50 transition-all scroll-smooth', {
    'left-0': status,
    '-left-80': !status
  })
  const overlayCls = cn('fixed left-0 w-full top-0 h-full bg-second-bg z-40  transition-all ', {
    'opacity-30': status,
    'invisible': !status,
    'opacity-0': !status,
    'visible': status
  })

  return (
    <div className="">
      <div className='-mt-1' onClick={() => setToogle(!status)}>
        <AlignJustify size={20} className='mr-2'/>
      </div>
      <div className={navCls}>
        <X onClick={() => setToogle(!status)}/>
        <nav className='visible p-4'>
          <ul>
            {
              headNav.map((head, idx) => {
                return (
                  <li key={idx} className='py-3 text-pre'>
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