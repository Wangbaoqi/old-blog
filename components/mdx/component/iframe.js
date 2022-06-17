
import cn from 'classnames';

const Iframe = ({
  url = '',
  className = 'w-full h-200'
}) => {

  return (
    <iframe
      src={url}
      frameBorder="0"
      className={className}
    ></iframe>
  )

}

export default Iframe;