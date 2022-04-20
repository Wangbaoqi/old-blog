


const ErrorDisplay = ({
  msg
}) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-2 rounded-md p-3 border-red-400 text-black text-base w-2/3 h-2/3">
        {msg}
      </div>
    </div>
  )
}


export default ErrorDisplay