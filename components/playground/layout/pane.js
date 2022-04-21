
const Pane = ({
  title,
  actions,
  children
}) => {

  return (
    <>
      <div className="flex justify-between items-center my-2">
        <p className="text-base uppercase">{title}</p>
        { actions }
      </div>
      {children}
    </>
  )
}

export default Pane