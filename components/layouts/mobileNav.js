import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { headNav } from '@data/headNav';
import cn from 'classnames';
import { InPortal } from '@components/layouts'

import { AlignJustify, X} from 'react-feather';

const MobileNav = () => {
  const [status, setToogle] = useState(false)
  const hanldeToogle = () => {
    setToogle(!status)
  }


  useEffect(() => {
    if (status) {
      window.document.body.classList.add('overflow-hidden')
    } else {
      window.document.body.classList.remove('overflow-hidden')
    }
    
  }, [status])

  const navCls = cn('fixed top-0 bottom-0 w-3/4 text-xl p-6 dark:text-white z-50 transition-all scroll-smooth', {
    'left-0': status,
  })



  const boxCls = !status ? 'pointer-events-none' : 'pointer-events-auto';
  const overlayCls = status ? 'opacity-1' : 'opacity-0'

  return (
    <InPortal id=''>
      <div className='fixed  top-5 right-5 z-50' onClick={() => setToogle(!status)}>
        {
          status ? <X size={28}/> : <AlignJustify size={26} className='mr-2'/>
        }
      </div>
      <div className={`fixed overflow-hidden inset-0 z-40 ${boxCls}`} onClick={hanldeToogle}>
        
        <div className={`fixed inset-0 bottom-0 left-0 h-screen w-screen bg-mask-bg backdrop-blur  transition-all ${overlayCls}`}>
          <nav className={navCls}>
            <ul>
              {
                headNav.map((head, idx) => {
                  return (
                    <li key={idx} className='py-3'>
                      <Link href={head.href}>{ head.title }</Link>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
        
      </div>
    </InPortal>
  )
}

export default MobileNav