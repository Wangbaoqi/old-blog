import { useState, useCallback } from "react";

import { ExcuterBtn } from "../toolbar";


const Console = ({ codeMap, options }) => {

  const { param = '', rightResult, mainEntry } = options;
  const jsStr = `${codeMap.javascript}; return ${mainEntry}`;

  const [test, setTest] = useState(param);
  const [result, setResult] = useState(rightResult)
  const [error, setError] = useState(null)
 
  const addStringJs = (stringOfJs) => {
    return new Function(stringOfJs)();
  }

  const handleTestCase = useCallback(
    () => {
      try {

        if (!test) {
          setError('please input params');
          return;
        }
        const mainFn = addStringJs(jsStr);
        const params = test.split('\n').map(p => JSON.parse(p));
        const result = mainFn.apply(null, params);
        setResult(JSON.stringify(result))
        setError(null)
      } catch (error) {
        console.log(error);
        setError(error.toString())
      }
    },
    [test],
  )
  


  return (

    <section className="font-Sriracha h-full relative">
      <p className="flex justify-end text-primary-color">
        <ExcuterBtn handleExcuter={handleTestCase}/>
      </p>
      <div className="flex flex-col min-h-f-card text-sm">
        <section className="min-h-60 flex flex-col gap-5  mb-5">
          <div className="">
            <p>test case</p>
            <textarea
              className="outline-none w-full rounded-lg mt-3 p-2 min-h-12 bg-black text-white"
              value={test}
              onChange={(e) => setTest(e.target.value)}
              placeholder="multiple params need newline"
              cols="25"
              rows="2"></textarea>
          </div>
        </section>

        <p>test result</p>
        <section className="bg-black text-white rounded-lg flex-1 p-3 min-h-60">
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