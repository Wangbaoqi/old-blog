
const Pane = ({
  title,
  children
}) => {

  return (
    <>
      <header className="text-base uppercase mb-1">{title}</header>
      {children}
    </>
  )
}

export default Pane