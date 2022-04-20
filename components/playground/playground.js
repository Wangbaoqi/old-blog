import { useState, useMemo } from "react";

import { ToolBar, RefreshBtn } from "./toolbar";
import Editer from "./display/editer";
import Result from "./display/result";

import SplitPane from "./layout/splitPane";
import { Pane } from "./layout";

import { usePrettier, usePaneData } from './hooks/index'

const PlayGround = ({
  id=1,
  html,
  js,
  css,
  mode = "react",
  title = "",
  code = '',
  language,
  boxSizing = 'border-box'
}) => {

  const [htmlCode, setHtmlCode] = useState(html?.trim());
  const [cssCode, setCssCode] = useState(css?.trim());
  const [jsCode, setJsCode] = useState(js?.trim());

  const [randomId, setRandomId] = useState('init');

  // 格式化字符串code
  const handleFormat = usePrettier({
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode
  });

  const paneData = usePaneData({
    mode,
    htmlCode,
    setHtmlCode,
    cssCode,
    setCssCode,
    jsCode,
    setJsCode,
  });

  const codeMap = useMemo(
    () => ({
      markup: htmlCode,
      css: cssCode,
      javascript: jsCode,
    }),
    [htmlCode, cssCode, jsCode]
  );

  const handleReset = () => {};

  
  const handleUpdate = () => { 

  };

  const getSideBySide = () => {
    const [data] = paneData;
    console.log(paneData);
    const { label, ...editData } = data;
    return (
      <>
        <SplitPane
          leftChild={
            <Pane title={label}>
              <Editer
                {...editData}
              />
            </Pane>
          }
          rightChild={
            <Pane
              title='Result'
              actions={
                <RefreshBtn handleRefresh={() => setRandomId(Math.random().toString()) }/>
              }
            >
              <Result
                key={randomId}
                id={id}
                codeMap={codeMap}
                mode={mode}
                // centered={centered}
                // stretched={stretchResults}
                // layoutMode={layoutMode}
                // isFullscreened={isFullscreened}
                boxSizing={boxSizing}
              />
            </Pane>
          }
        />
      </>
    );
  };

  const content = (mode = "side-by-side") => {
    switch (mode) {
      case "side-by-side":
        return getSideBySide();
      default:
        return <p>pp</p>
    }
  };

  return (
    <div className="overflow-hidden shadow-3xl rounded-lg md:-mx-12 md:my-10">
      <div className="">
        <ToolBar
          title={title}
          handleReset={handleReset}
          handleFormat={handleFormat}
        />
        {content()}
      </div>
    </div>
  );
};

export default PlayGround;
