import { Editor } from "./Editor";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navbar } from "./Navbar";

function App() {
  const [htmlCode, sethtml] = useLocalStorage("html", "");
  const [cssCode, setcss] = useLocalStorage("css", "");
  const [jsCode, setjs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-clip">
        <Navbar />
        <div className="flex h-ful w-full flex-grow">
          <div className="flex flex-col min-w-[400px] w-[400px]">
            <Editor
              language={html}
              displayName={"HTML"}
              value={htmlCode}
              onChange={sethtml}
            />
            <Editor
              language={css}
              displayName={"CSS"}
              value={cssCode}
              onChange={setcss}
            />
            <Editor
              language={javascript}
              displayName={"JS"}
              value={jsCode}
              onChange={setjs}
            />
          </div>
          <iframe
            id="output"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
}

export default App;
