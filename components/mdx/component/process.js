

import cn from 'classnames';

const Processon = ({
  diagramId = '',
  className = 'w-full h-200'
}) => {

  return (
    <iframe
      title={`processon-${diagramId}`}
      src={`https://www.processon.com/embed/${diagramId}`}
      frameBorder="0"
      allowFullScreen
      className={className}
    ></iframe>
  )

}

export default Processon;