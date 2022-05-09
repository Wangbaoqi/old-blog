import SimpleEditor from "react-simple-code-editor";
import { useRef } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "@config/codeTheme";
import rangeParser from "parse-numeric-range";

import moveCursorWithinInput from '../tool/index'

const calculateLinesToHighlight = (raw) => {
  const lineNumbers = rangeParser(raw);
  if (lineNumbers) {
    return (index) => lineNumbers.includes(index + 1);
  } else {
    return () => false;
  }
};

const Editer = ({ code, handleUpdate, handleFormat, language, light = "", themeSyntax = null }) => {
  const textareaRef = useRef(null);
  function handleKeyDown(ev) {
    if (ev.metaKey && ev.key === "s") {
      const input = textareaRef.current._input;
      const cursorAt = input.selectionStart;
      ev.preventDefault();
      handleFormat();
      window.requestAnimationFrame(() => {
        moveCursorWithinInput(input, cursorAt);
      });
    }
  }

  const highlights = calculateLinesToHighlight(light || "");

  return (
    <div className="max-h-screen-50 flex-1 overflow-auto font-SourceCode text-pre">
      <div className="">
        <SimpleEditor
          ref={textareaRef}
          textareaClassName='outline-none bg-transparent '
          value={code}
          onValueChange={handleUpdate}
          ignoreTabKey={false}
          onKeyDown={handleKeyDown}
          highlight={(code) => (
            <Highlight
              {...defaultProps}
              code={code}
              language={language}
              theme={theme}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <>
                  {tokens.map((line, i) => (
                    <div
                      {...getLineProps({ line, key: i })}
                      key={i}
                      style={{
                        background: highlights(i) ? "#00f5c426" : "transparent",
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </>
              )}
            </Highlight>
          )}
        />
      </div>
    </div>
  );
};

export default Editer;
