import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';

const Product = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript"); // Default language

  const handleEditorChange = (value) => {
    setCode(value);
    console.log("Code updated:", value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header Section */}
      <div className="mt-28 w-10/12 max-w-6xl flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <h1 className="text-lg font-semibold">Product Page</h1>
        <div>
          <label htmlFor="language-select" className="mr-2">Select Language:</label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="csharp">C#</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="json">JSON</option>
            <option value="typescript">TypeScript</option>
          </select>
        </div>
      </div>

      {/* Monaco Editor */}
      <div className="mt-6 w-10/12 max-w-6xl flex-grow p-4 bg-white rounded-lg shadow-lg">
        <Editor
          height="calc(100vh - 180px)" // Adjust height to fit inside the container
          defaultLanguage="javascript" // Initial default language
          language={language} // Dynamically set the language
          value={code} // Initial value
          onChange={handleEditorChange} // Handle changes in the editor
          theme="vs-dark" // Choose between `vs-light`, `vs-dark`, etc.
          options={{
            padding: { top: 10, bottom: 10 },
          }}
        />
      </div>
    </div>
  );
};

export default Product;
