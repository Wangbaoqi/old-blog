import { useState ,useEffect } from "react"


const useDebounceValue = (time, props) => {

  const [propInState, setPropInState] = useState(props);

  useEffect(() => {
    const timeId = window.setTimeout(() => {
      setPropInState(props);
    }, time)

    return () => {
      window.clearTimeout(timeId)
    }
  }, [time, props])
  
  return propInState

}


export default useDebounceValue

// export { useDebounceValue as default }