
export default function HeaderWrapper({
  type = ''
}) {

  const waveBox = (
    <svg className=' absolute left-0 right-0 bottom-0 w-full max-w-full   ' preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" >
      <path fill='var(--bg-primary)' d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
    </svg>
  )

  const slashBox = (
    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
      <polygon className="fill-primary-bg" points="2560 0 2560 100 0 100"></polygon>
    </svg>
  )

  const hCls = type == 'page' ? 'min-h-screen-40' : 'min-h-screen-30';

  return (
    <div className='bg-header-cover '>
      <div className={ `relative min-h-screen-35 overflow-hidden md:block translate-y-1` }>
        { type == 'page' ? waveBox : '' }
      </div>
    </div>
  )
}