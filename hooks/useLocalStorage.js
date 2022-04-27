import { useState } from "react";


const useLocalStorage = (key, initVal) => {

  const [storeVal, setStoreVal] = useState(() => {

    if (typeof window === 'undefined') {
      return initVal
    }
    try {
      const val = window.localStorage.getItem(key);
      return val ? JSON.parse(val) : initVal;
    } catch (error) {
      console.log(error);
      return initVal
    }
  })

  const setVal = (val) => {
    try {
      const valToStore = typeof val === 'function' ? val(storeVal) : val;
      setStoreVal(valToStore);
      if (typeof window != 'undefined') {
        window.localStorage.setItem(key, valToStore)
      }
    } catch (error) {
      console.log(error);
    }
  }

  return [storeVal, setVal]
}

export default useLocalStorage