import React, { useState } from "react";
import Editor from "./Editor";
import CompilerApi from "./CompilerApi";

function PythonEditor() {
  const [py, setPy] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(py);

    CompilerApi(71, py, setSrcDoc);
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
          language="python"
          displayName="PY"
          value={py}
          setValue={setPy}
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

export default PythonEditor;
