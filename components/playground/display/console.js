import { useState, useCallback } from "react";

import { ExcuterBtn } from "../toolbar";


const Console = ({ codeMap, options }) => {

  const { param = '', rightResult, mainEntry } = options;

  const jsStr = `${codeMap.javascript}; return ${mainEntry}`;


  // const fn = new Function(jsStr);
  const [test, setTest] = useState(param);
  const [result, setResult] = useState(rightResult)
  const [error, setError] = useState(null)
 
  const addStringJs = (stringOfJs) => {
    return new Function(stringOfJs)();
  }

  const handleTestCase = useCallback(
    () => {
      try {
        const mainFn = addStringJs(jsStr)
        const result = mainFn(test);
        setResult(result)
        setError(null)
      } catch (error) {
        setError(error.toString())
      }
    },
    [test],
  )
  


  return (

    <section className=" font-Sriracha">
      <p className="flex justify-end text-primary-color">
        <ExcuterBtn handleExcuter={handleTestCase}/>
      </p>
      <div className="flex flex-col min-h-f-card gap-5 text-sm">
        <section className="min-h-60 flex gap-5">
          <div className="">
            <p>test case</p>
            <textarea className="outline-none rounded-lg p-2 min-h-40 bg-black text-white" value={test} onChange={(e) => setTest(e.target.value)} id="" cols="25" rows="4"></textarea>
          </div>
          <div className=" ">
            <p>right result</p>
            <div className="flex items-center min-h-12 text-second-color">{ result }</div>
          </div>
          
        </section>

        <section className="bg-black text-white rounded-lg flex-1 p-3 h-12">
          {
            !error ? 
              <>
                <p>input parameters: {test}</p>
                <p>run result: {result}</p>
              </> :
              <p className=" text-red-400">
                {error}
              </p>
          }
          
        </section>
      </div>
    </section>
    
  )
}


export default Console