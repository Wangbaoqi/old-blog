import { useState } from "react";
import Editer from "./editer";
import cn from "classnames";

import syntaxTheme from '@config/syntaxTheme'

const TabEditer = ({
  paneData,
  splitRatio,
  maxHeight,
  handleFormat,
}) => {

  const [firstPane, secondPane] = paneData;
  const [activeLan, setActiveLan] = useState(firstPane.language);

  const activePane = firstPane.language == activeLan ? firstPane : secondPane;

  return (
    <div>
      <div className="flex items-center h-11 gap-3  ">
        {
          paneData.map((pane, idx) => {
            const btnCls = cn(['py-2', 'px-1', ' text-base'], {
              'font-semibold': activeLan === pane.language,
              'text-blockquote-l': activeLan === pane.language,
            })
            return (
              <button
                className={btnCls}
                key={idx}
                onClick={() => setActiveLan(pane.language)}>
                {pane.label}
              </button>
            )
          })
        }
      </div>
      <Editer
        code={activePane.code}
        handleFormat={handleFormat}
        handleUpdate={activePane.handleUpdate}
        language={activePane.language}
        themeSyntax={syntaxTheme}
      />
    </div>
  )
}


export default TabEditer