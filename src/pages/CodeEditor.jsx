// import React, { useRef, useEffect } from "react";
// import * as monaco from "monaco-editor";

// const CodeEditor = ({ language, value, onChange }) => {
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const editor = monaco.editor.create(editorRef.current, {
//       value: value || '',
//       language: language || "javascript",
//       theme: "vs-dark",
//       automaticLayout: true,
//       wordWrap: "on",
//       fontSize: 14,
//       minimap: { enabled: false },
//     });

//     editor.onDidChangeModelContent((event) => {
//       onChange(editor.getValue());
//     });

//     return () => {
//       editor.dispose();
//     };
//   }, [language, value, onChange]);

//   return <div ref={editorRef} style={{ height: "350px", width: "100%" }}></div>;
// };

// export default CodeEditor;


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
      scrollbar: {
        vertical: "hidden",   // Hides vertical scrollbar
        horizontal: "hidden", // Hides horizontal scrollbar
      },
    });

    editor.onDidChangeModelContent((event) => {
      onChange(editor.getValue());
    });

    return () => {
      editor.dispose();
    };
  }, [language, value, onChange]);

  return (
    <div 
      ref={editorRef} 
      style={{
        height: "60vh",  // 60% of screen height
        width: "80vw",   // 80% of screen width
        margin: "0 auto", // Center the editor horizontally
        overflow: "hidden", // Hide overflow to ensure no scrollbars
      }} 
    />
  );
};

export default CodeEditor;
