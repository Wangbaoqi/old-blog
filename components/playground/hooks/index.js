import { useState, useEffect, useCallback, useMemo } from "react";

export const usePrettier = ({
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode
}) => {
  const [prettier, setPrettier] = useState(null);
  const [babelParser, setBabelParser] = useState(null);
  const [cssParser, setCssParser] = useState(null);
  const [htmlParser, setHtmlParser] = useState(null);

  useEffect(() => {
    Promise.all([
      import("prettier/standalone"),
      import("prettier/parser-html"),
      import("prettier/parser-postcss"),
      import("prettier/parser-babel")
    ])
      .then(([prettier, html, css, babel]) => {
        setPrettier(prettier);
        setHtmlParser(html);
        setCssParser(css);
        setBabelParser(babel);
      })
      .catch((err) => {
        console.error("Could not load Prettier and its parsers:", err);
      });
  }, []);

  const hasLoaded = !!prettier && !!htmlParser && !!cssParser && !!babelParser;

  const handleFormat = useCallback(() => {
    if (!hasLoaded) {
      return;
    }

    const prettierOptions = {
      // TODO: Be smart about this, somehow?
      printWidth: 40
    };

    if (jsCode) {
      setJsCode(
        prettier.format(jsCode, {
          parser: "babel",
          plugins: [babelParser],
          ...prettierOptions
        })
      );
    }

    if (cssCode) {
      setCssCode(
        prettier.format(cssCode, {
          parser: "css",
          plugins: [cssParser],
          ...prettierOptions
        })
      );
    }

    if (htmlCode) {
      setHtmlCode(
        prettier.format(htmlCode, {
          parser: "html",
          plugins: [htmlParser],
          ...prettierOptions
        })
      );
    }
  }, [hasLoaded, jsCode, cssCode, htmlCode]);

  return handleFormat;
};



export const usePaneData = ({ 
  mode,
  htmlCode,
  setHtmlCode,
  cssCode,
  setCssCode,
  jsCode,
  setJsCode,
}) => {
  
  const panes = useMemo(() => {
    const paneData = [
      {
        language: 'markup',
        label: 'HTML',
        code: htmlCode,
        handleUpdate: setHtmlCode,
      },
      {
        language: 'css',
        label: 'CSS',
        code: cssCode,
        handleUpdate: setCssCode,
      },
    ];

    if (mode === 'react') {
      paneData.unshift({
        language: 'jsx',
        label: 'JSX',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    } else {
      paneData.push({
        language: 'javascript',
        label: 'JS',
        code: jsCode,
        handleUpdate: setJsCode,
      });
    }

    return paneData.filter(({ code }) => typeof code === 'string');
  }, [mode, htmlCode, cssCode, jsCode]);

  if (panes.length === 0 || panes.length === 3) {
    console.error(
      'Passed too many code snippets! I only understand 1 or 2 code snippets at once'
    );
  }

  return panes;
}

