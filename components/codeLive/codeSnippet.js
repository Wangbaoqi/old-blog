

import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const CodeSnippet = ({
  code = '',
  language = '',
  file = '',
  light = '',
  theme = {}
}) => {




  return (
    <div >

      <LiveProvider
        code={code}
        // transformCode={(code) => code}
        theme={theme}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
  </div>
  )

}


export default CodeSnippet