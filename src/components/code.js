import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import rangeParser from "parse-numeric-range"
// import theme from "prism-react-renderer/themes/synthwave84"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import LiveEdit from './live'

import theme from '../utils/codeTheme'

const calculateLinesToHighlight = raw => {
  const lineNumbers = rangeParser(raw)
  if (lineNumbers) {
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const copyToClipboard = str => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Copying to clipboard was successful!")
      },
      function (err) {
        console.error("Could not copy text: ", err)
      }
    )
  } else if (window.clipboardData) {
    // Internet Explorer
    window.clipboardData.setData("Text", str)
  }
}

const Code = props => {
  const [isCopied, setIsCopied] = React.useState(false)
  const className = props.children.props.className || ""
  const code = props.children.props.children.trim()
  const language = className.replace(/language-/, "")
  const file = props.children.props.file
  const highlights = calculateLinesToHighlight(
    props.children.props.highlights || ""
  )

  if (props.children.props["react-live"]) {
    return (
      <LiveEdit code={code} noInline={true} file={file}/>
    );
  }

  return (
    <div
      className="rounded-lg mt-8 pl-1 shadow-3xl"
      style={{
        background: "var(--sp-colors-bg-default)",
      }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <div
          className="text-primary"
          style={{
            background: "var(--sp-colors-fg-inactive)",
            margin: "0 1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            textTransform: "uppercase",
            borderBottomLeftRadius: "0.5rem",
            borderBottomRightRadius: "0.5rem",
            fontWeight: "bold",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >{`${language}`}</div>
        <div
          style={{
            color: "var(--sp-colors-fg-active)",
            fontStyle: "italic",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {file && `${file}`}
        </div>
        <div style={{ flexGrow: "1" }}></div>
        <button
          onClick={() => {
            copyToClipboard(code)
            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 1000)
          }}
          style={{
            marginRight: "1.5rem",
            marginTop: "0.5rem",
            padding: "8px 12px",
            background: "var(--sp-colors-fg-inactive)",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            color: "var(--sp-colors-fg-active)",
            fontSize: "14px",
            fontFamily: "sans-serif",
            lineHeight: "1",
          }}
        >
          {isCopied ? "🎉 Copied!" : "Copy"}
        </button>
      </div>
      <div
      className="bg-primary-content"
        style={{
          overflow: "auto",
          background: "var(--sp-colors-bg-default)",
          borderRadius: "0.5rem",
        }}
      >
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={className}
              style={{
                ...style,
                backgroundColor: "transparent",
                float: "left",
                minWidth: "100%",
                margin: '0 0'
              }}
            >
              {tokens.map((line, i) => (
                <div
                  {...getLineProps({ line, key: i })}
                  style={{
                    background: highlights(i) ? "#00f5c426" : "transparent",
                    display: "block",

                  }}
                >
                  <span className="mr-4">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}

export default Code
