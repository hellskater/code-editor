import React, { useEffect, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
  const { language, displayName, value, setValue } = props;
  const [open, setOpen] = useState(true);

  const initialCode =
    language == "javascript"
      ? "console.log('Hello, JavaScript')"
      : "print('Hello, Python')";

  useEffect(() => {
    setValue(initialCode);
  }, []);

  function handleChange(value) {
    setValue(value);
  }

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <CodeMirror
        //onBeforeChange={(editor, data, value) => setLocalValue(localValue)}
        defaultValue={initialCode}
        onChange={handleChange}
        onKeyPress={() => CodeMirror.showHint()}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          smartIndent: true,
          indentUnit: 4,
          indentWithTabs: true,
          lineWrapping: true,
          closeBrackets: true,
          gutters: [
            "CodeMirror-linenumbers",
            "CodeMirror-foldgutter",
            "CodeMirror-lint-markers",
          ],
          foldGutter: true, // Enable code folding in slots
          autofocus: true, // Autofocus
          matchBrackets: true, // Match end symbols, such as "],}"
          autoCloseBrackets: true, // Auto close symbol
          styleActiveLine: true,
        }}
      />
    </div>
  );
}
