import { useState, useMemo } from "react";

import { ToolBar, RefreshBtn } from "./toolbar";
import { Editer, Result, TabEditer, Console } from "./display";
import { Pane, SplitPane } from "./layout";

import { usePrettier, usePaneData } from './hooks/index'

const PlayGround = ({
  id=1,
  html,
  js,
  css,
  mode = "",
  title = "",
  options,
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


  const layoutMode = paneData.length == 1 ? mode == 'algo' ? 'algo' : 'side'  : 'tab';

  const handleReset = () => {
    setHtmlCode(html?.trim());
    setCssCode(css?.trim());
    setJsCode(js?.trim());
  };

  const resultPane = (
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
        boxSizing={boxSizing}
      />
    </Pane>
  )

  const ConsolePane = (
    <Pane>
      <Console
        codeMap={codeMap}
        options={options}
        mode={mode}
      />
    </Pane>
  )



  const getSideBySide = () => {
    const [ data ] = paneData;
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
          rightChild={resultPane}
        />
      </>
    );
  };

  const getTabPane = () => {
    return (
      <>
        <SplitPane
          leftChild={
            <TabEditer
              paneData={paneData}
              handleFormat={handleFormat}
            />
          }
          rightChild={resultPane}
        />
      </>
    )
  }

  const getTerminalPanel = () => {
    return (
      <>
        <SplitPane
          leftChild={
            <TabEditer
              paneData={paneData}
              handleFormat={handleFormat}
            />
          }
          rightChild={ConsolePane}
        />
      </>
    )

  }

  const content = (layoutMode = 'side') => {
    switch (layoutMode) {
      case "side":
        return getSideBySide();
      case "tab":
        return getTabPane();
      case "algo":
        return getTerminalPanel();
      default:
        return getSideBySide();
    }
  };

  return (
    <div className="overflow-hidden shadow-3xl rounded-lg md:-mx-10 md:my-10">
      <div className="">
        <ToolBar
          title={title}
          handleReset={handleReset}
          handleFormat={handleFormat}
        />
        {content(layoutMode)}
      </div>
    </div>
  );
};

export default PlayGround;
