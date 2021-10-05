import React, { useState } from "react";
import Editor from "./Editor";
import CompilerApi from "./CompilerApi";
import "./JavaScriptEditor.css";

function JavaScriptEditor() {
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(js);

    CompilerApi(63, js, setSrcDoc);
  };

  return (
    <>
      <div className="run_button">
        <button className="run" onClick={submit}>
          Run
        </button>
      </div>

      <div className="pane top-pane">
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          setValue={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default JavaScriptEditor;
