

import cn from 'classnames';

const Whimsical = ({
  diagramId = '',
  className = 'w-full h-200'
}) => {

  return (
    <iframe
      title={`whimsical-${diagramId}`}
      src={`https://whimsical.com/embed/${diagramId}`}
      frameBorder="0"
      allowFullScreen
      className={className}
    ></iframe>
  )

}

export default Whimsical;