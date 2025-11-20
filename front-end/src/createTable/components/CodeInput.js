import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";
import { EditorView, lineNumbers } from "@codemirror/view";
import { useState } from "react";

function CodeInput() {
  const customTheme = EditorView.theme({
    "&": {
      color: "#E3CFAA",
      fontSize: "14px",
      borderRadius: "1px",
    },
    ".cm-content": {
      padding: "12px",
      backgroundColor: "#22211D",
    },
    ".cm-scroller": {
      fontFamily: "Fira Code, monospace",
    },
    "&.cm-editor.cm-focused": {
      outline: "2px solid #E3CFAA",
    },
    ".cm-gutters": {
      backgroundColor: "#22211D",
      color: "#888",
      border: "none",
    },
    ".cm-activeLineGutter": {
    backgroundColor: "transparent !important",
    color: "#888 !important",
    },
  });

  const [value, setValue] = useState("");

  return (
    <CodeMirror
        basicSetup={{
            foldGutter: false,
        }}
        className="w-10/12 mx-auto mt-10 border-2 border-black dark:border-[#E3CFAA] bg-transparent"
        value={value}
        height="300px"
        extensions={[
            sql(),
            customTheme,
            lineNumbers(),
        ]}
        onChange={(val) => setValue(val)}
    />
  );
}

export default CodeInput;
