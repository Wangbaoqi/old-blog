


import { Info, CheckCircle, AlertTriangle, ChevronDown } from 'react-feather';

const SideNote = ({
  type = 'info',
  title = '',
  children
}) => {

  let Icon = Info;
  let themeCls = 'bg-info-bg border-info-color';
  let iconCls = 'text-info-color'
  if (type == 'success') {
    Icon = CheckCircle;
    themeCls = 'bg-success-bg border-success-color';
    iconCls = 'text-success-color'
  } else if (type == 'warning') {
    Icon = AlertTriangle;
    themeCls = 'bg-warning-bg border-warning-color';
    iconCls = 'text-warning-color'
  }




  return (

    <aside className={`relative px-8 py-6 my-8 rounded-md border-l-4  ${themeCls}`}>
      <span className={`absolute top-0 -left-0.5 p-2 rounded-full  bg-primary-bg -translate-x-1/2 -translate-y-1/2 ${iconCls}`}>
        <Icon size={24} />
      </span>
      <h3 className=' text-base font-Sriracha mb-4'>{title}</h3>
      <div className=' text-sm' >
        {children}
      </div>
    </aside>
  )
}


export default SideNote