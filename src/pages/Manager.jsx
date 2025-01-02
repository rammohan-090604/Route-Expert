import { useState } from 'react';
import { CodeIcon, EyeIcon } from 'lucide-react';
import Product from './Product';
import CardList from './CardList'; 

// Card Component
function Card({ title, description, icon: Icon, onClick }) {
  return (
    <div
      className="relative group bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="absolute inset-0 border border-gray-200 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-lg transition-colors" />
    </div>
  );
}

// Manager Component
function Manager() {
  const [isProductPage, setIsProductPage] = useState(false); // To track if we're in the Product page
  const [isViewSnippetsPage, setIsViewSnippetsPage] = useState(false); // To track if we're in the View Snippets page

  // Show Product page (for creating snippets)
  const handleCreateClick = () => {
    setIsProductPage(true);
  };

  // Show CardList page (for viewing snippets)
  const handleViewSnippetsClick = () => {
    setIsViewSnippetsPage(true);
  };

  // Go back to the Manager page
  const handleBackClick = () => {
    setIsProductPage(false);
    setIsViewSnippetsPage(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4"> {/* Light gray background */}
      <div className="mt-28 max-w-5xl w-full mx-auto">
        {/* Conditionally render either the Manager view, Product page, or CardList view */}
        {isProductPage ? (
          <div className="relative">
            {/* Back Button at Top-Left */}
            <button
              onClick={handleBackClick}
              className="absolute top-2 left-8 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Back
            </button>

            <Product />

            {/* Product page content */}
            <div className="text-center mt-12">
              <p className="text-xl text-gray-900 dark:text-white">Product Page for Snippets</p>
              {/* This could be a form or other elements for creating a snippet */}
            </div>
          </div>
        ) : isViewSnippetsPage ? (
          <div className="relative">
            {/* Back Button at Top-Left */}
            <button
              onClick={handleBackClick}
              className="absolute top-2 left-8 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Back
            </button>

            {/* CardList Component to View Snippets */}
            <CardList />

            {/* View Snippets content */}
            <div className="text-center mt-12">
              <p className="text-xl text-gray-900 dark:text-white">View Your Code Snippets</p>
              {/* This could be a list of code snippets displayed inside CardList */}
            </div>
          </div>
        ) : (
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Code Snippets Manager
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Create and manage your code snippets with ease
            </p>
            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card
                title="Create Snippets"
                description="Write and save your code snippets with syntax highlighting and organization tools"
                icon={CodeIcon}
                onClick={handleCreateClick} // Open Product page when clicked
              />
              <Card
                title="View Snippets"
                description="Browse, search, and manage your collection of code snippets"
                icon={EyeIcon}
                onClick={handleViewSnippetsClick} // Open View Snippets page when clicked
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Manager;
