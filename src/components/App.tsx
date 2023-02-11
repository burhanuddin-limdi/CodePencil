import { Editor } from "./Editor";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Navbar } from "./Navbar";
import "../index.css";
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

  const [outputVisible, setOutputVisible] = useState(false);
  const showOutput = () => {
    const output = document.querySelector("#output");
    output?.classList.add("show-output");
    setOutputVisible(true);
  };
  const hideOutput = () => {
    const output = document.querySelector("#output");
    output?.classList.remove("show-output");
    setOutputVisible(false);
  };

  return (
    <>
      <div className="flex flex-col h-screen w-screen overflow-clip">
        <Navbar
          outputVisible={outputVisible}
          hideOutput={hideOutput}
          showOutput={showOutput}
        />
        <div className="flex h-ful w-full flex-grow relative">
          <div className="flex flex-col md:min-w-[400px] md:w-[400px] w-screen">
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
          <div className="md:block hidden w-full h-full bg-white" id="output">
            <div className="md:hidden block">
              <Navbar
                outputVisible={outputVisible}
                hideOutput={hideOutput}
                showOutput={showOutput}
              />
            </div>
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
