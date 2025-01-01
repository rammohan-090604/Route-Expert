import React, { useRef, useEffect } from "react";
import * as monaco from "monaco-editor";

const CodeEditor = ({ language, value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = monaco.editor.create(editorRef.current, {
      value: value || '',
      language: language || "javascript",
      theme: "vs-dark",
      automaticLayout: true,
      wordWrap: "on",
      fontSize: 14,
      minimap: { enabled: false },
    });

    editor.onDidChangeModelContent((event) => {
      onChange(editor.getValue());
    });

    return () => {
      editor.dispose();
    };
  }, [language, value, onChange]);

  return <div ref={editorRef} style={{ height: "500px", width: "100%" }}></div>;
};

export default CodeEditor;
