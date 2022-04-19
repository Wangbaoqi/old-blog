import { useState } from "react";

import ToolBar from "./toolbar/toolBar";
import Editer from "./display/editer";

import SplitPane from "./layout/splitPane";
import { Pane } from "./layout";

import { usePrettier, usePaneData } from './hooks/index'

const PlayGround = ({
  html,
  js,
  css,
  mode = "react",
  title = "",
  code = '',
  language
}) => {

  const [htmlCode, setHtmlCode] = useState(html?.trim());
  const [cssCode, setCssCode] = useState(css?.trim());
  const [jsCode, setJsCode] = useState(js?.trim());

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
          rightChild={<p>rightChild</p>} />
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
    <div className=" shadow-3xl">
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
