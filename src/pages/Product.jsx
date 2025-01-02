import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';
import { useUser } from '@clerk/clerk-react';

const Product = () => {
  const [code, setCode] = useState("// Write your code here");
  const [language, setLanguage] = useState("javascript"); // Default language
  const [name, setName] = useState(""); // User entered name
  const [showNameInput, setShowNameInput] = useState(false); // Show name input modal
  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const { user } = useUser(); // Get the user info from Clerk

  const handleEditorChange = (value) => {
    setCode(value);
    console.log("Code updated:", value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Function to check if the code name already exists in the user's saved codes
  const checkCodeNameExists = async (name) => {
    if (!user) {
      alert("Please log in first.");
      return false;
    }

    const email = user.emailAddresses[0].emailAddress;
    try {
      const response = await fetch(`http://localhost:8000/api/getCodeNamesAndLanguages?email=${email}`);
      const result = await response.json();

      if (response.ok) {
        // Check if the name already exists in the user's saved code snippets
        const nameExists = result.some(code => code.name === name);
        return nameExists;
      } else {
        alert(result.message || "Error checking code names.");
        return false;
      }
    } catch (error) {
      console.error("Error checking code names:", error);
      alert("An error occurred while checking code names.");
      return false;
    }
  };

  // Function to add extension based on the selected language
  const getFileExtension = (language) => {
    switch (language) {
      case 'javascript':
        return '.js';
      case 'python':
        return '.py';
      case 'java':
        return '.java';
      case 'csharp':
        return '.cs';
      case 'html':
        return '.html';
      case 'css':
        return '.css';
      case 'json':
        return '.json';
      case 'typescript':
        return '.ts';
      default:
        return '';
    }
  };

  const handleNameInputSubmit = async () => {
    // Ensure the name includes the correct file extension
    let finalName = name.trim();
    const extension = getFileExtension(language);
    
    if (finalName && !finalName.endsWith(extension)) {
      finalName += extension; // Append the correct extension if not present
    }

    // Validate if the entered name already exists in the user's saved codes
    const nameExists = await checkCodeNameExists(finalName);

    if (nameExists) {
      setErrorMessage("This name already exists. Please choose a different name.");
      return;
    }

    // Proceed with saving the code if the name is unique
    const userData = {
      email: user ? user.emailAddresses[0].emailAddress : 'Not logged in', // Get user email from Clerk
      language: language,
      code: code,
      name: finalName
    };

    try {
      // Send the userData to the backend using a POST request
      const response = await fetch('http://localhost:8000/api/submitCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (response.ok) {
        // If the request is successful, display success message
        alert(result.message || "Code saved successfully!");
      } else {
        // If the request fails, display error message
        alert(result.message || "Error saving code. Please try again.");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error sending data to backend:", error);
      alert("An error occurred. Please try again.");
    }

    // Clear the code editor after saving
    setCode("// Write your code here"); // Clear the editor's content
    setName(""); // Clear the name input
    setShowNameInput(false); // Close the name input modal
    setErrorMessage(""); // Reset error message
  };

  const handleSaveCode = () => {
    // Show name input modal
    setShowNameInput(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Header Section */}
      <div className="mt-28 w-10/12 max-w-6xl flex justify-between items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        {/* Language Dropdown */}
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

        {/* Save Code Button */}
        <button
          onClick={handleSaveCode} // Trigger handleSaveCode on button click
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save Code
        </button>
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

      {/* Modal for Name Input */}
      {showNameInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Enter a Name for Your Code</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter code name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <div className="flex justify-between">
              <button
                onClick={handleNameInputSubmit}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Done
              </button>
              <button
                onClick={() => setShowNameInput(false)} // Close the modal without saving
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
