
import { useMemo, useState, useEffect } from "react";
import constructSnippet from "../tool/construtorSnippet";
import ErrorDisplay from "./error";
import {useDebounceValue} from "@hooks/index";

const Result = ({
  id,
  codeMap,
  mode,
  boxSizing,
  // centered = true,
}) => {

  const [loading, setLoading] = useState(null);
  const [codeDom, setCodeDom] = useState(null);
  const [error, setError] = useState(null);
  const [activeSlot, setActiveSlot] = useState(null);

  const targetedSlot = activeSlot === 'A' ? 'B' : 'A';

  useEffect(() => {
    try {
      const code = constructSnippet({
        id: `${id}-${targetedSlot}`,
        codeMap,
        mode,
        boxSizing,
        centered: true,
      })
      setCodeDom(code)
      setError(null)
    } catch (error) {
      setError(error)
    }
  }, [codeMap, mode])
  

  useEffect(() => {
    function waitForMessage() {
      if (typeof window !== 'undefined') {
        window.addEventListener('message', (data) => {
          const frameSlotIdA = `frame-${id}-A`;
          const frameSlotIdB = `frame-${id}-B`;
          const isForThisPlayground =
            data.data.source === frameSlotIdA ||
            data.data.source === frameSlotIdB;

          if (!isForThisPlayground) {
            return;
          }

          if (data.data.message.type === 'error') {
            setError(data.data.message.data);
          }

          if (
            data.data.source === frameSlotIdA &&
            data.data.message.type === 'loaded'
          ) {
            setActiveSlot('A');
            // setCodeSlotB(null);
          } else if (
            data.data.source === frameSlotIdB &&
            data.data.message.type === 'loaded'
          ) {
            setActiveSlot('B');
            // setCodeSlotA(null);
          }
          setLoading(false);
        });
      }
    }
    waitForMessage();
  }, [id])
  
  return (
    <div className="relative overflow-hidden h-full w-full min-h-f-card bg-white rounded-lg">
      {
        !error ? <iframe
        className=" absolute top-0 left-0 w-full h-full"
        srcDoc={codeDom}
        frameBorder="0"
        /> : <ErrorDisplay msg={error} />
      }
    </div>
  )
}

const ResultView = (props) => {
  const debounceProps = useDebounceValue(250, props);

  return <Result {...debounceProps}/>
}


export default ResultView