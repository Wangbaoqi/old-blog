import Container from './container'
import dayjs from 'dayjs'
import { Logo } from '@components/ui';

export default function Footer() {

  const date = dayjs().format('YYYY')
  return (
    <footer className="bg-header-cover">
      <div className="max-w-screen-xl mx-auto py-8 flex mt-20 flex-col md:flex-row lg:px-10 items-center ">
        <div className='flex flex-col justify-between min-h-48'>
          <div className='flex flex-col'>
            <Logo />
            <span className='mt-1 text-sm '>Thanks for reading!</span>
          </div>
          <div className='text-xs'>
            © { date }-present Nate Wang. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
