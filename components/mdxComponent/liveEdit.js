import React from "react";
// import theme from "../utils/codeTheme";
import codeTheme from '../../utils/codeTheme'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import {mdx} from '@mdx-js/react'
const LiveEdit = ({ noInline, code, file }) => (
  <div style={{ marginTop: "40px", backgroundColor: "black" }}>
    <LiveProvider
      code={code}
      transformCode={(code) => "/** @jsx mdx */" + code}
      scope={{ mdx }}
      noInline={noInline}
      theme={codeTheme}
    >
      <LivePreview />
      <LiveEditor />
      <LiveError />
    </LiveProvider>
  </div>
);

export default LiveEdit;
