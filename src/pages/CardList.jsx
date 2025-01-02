import { useEffect, useState } from 'react';
import { useClerk } from '@clerk/clerk-react';

const BACKEND_URL = import.meta.env.REACT_APP_BACKEND_URL;

function CardList() {
  const [snippets, setSnippets] = useState([]); // State to store snippets data
  const [loading, setLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to store error messages
  const { user } = useClerk(); // Get the user object from the Clerk context
  const email = user.emailAddresses[0].emailAddress;

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(`${BACKEND_URL}/api/getCodeNamesAndLanguages?email=${email}`);

        if (!response.ok) {
          throw new Error('Failed to fetch snippets');
        }

        const data = await response.json();

        // Log the fetched data to the console for inspection
        // console.log("Fetched Snippets:", data);

        setSnippets(data); // Set the snippets data
      } catch (err) {
        setError(err.message); // Set error message if any
        console.error("Error fetching snippets:", err);
      } finally {
        setLoading(false); // Stop loading after fetching data
      }
    };

    fetchSnippets(); // Fetch snippets when the component is mounted
  }, []); // Empty dependency array to ensure it runs only once when the component is mounted

  const handleEdit = (snippet) => {
    console.log("Edit snippet:", snippet);
    // Add your edit logic here
  };

  const handleDownload = (snippet) => {
    console.log("Download snippet:", snippet);
    // Add your download logic here
    // For example: download a file based on snippet data
  };

  if (loading) {
    return <p className="text-center text-gray-600 dark:text-gray-300">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 dark:text-red-400">{error}</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Card list</h1>
      {snippets.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">No snippets found.</p>
      ) : (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Creating the grid layout */}
          {snippets.map((snippet, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg h-48 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{snippet.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">Language: {snippet.language}</p>
              </div>
              <div className="flex justify-end gap-4">
                {/* Edit Icon */}
                <button
                  onClick={() => handleEdit(snippet)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800"
                  aria-label="Edit Snippet"
                >
                  ✏️
                </button>
                {/* Download Icon */}
                <button
                  onClick={() => handleDownload(snippet)}
                  className="text-green-600 dark:text-green-400 hover:text-green-800"
                  aria-label="Download Snippet"
                >
                  ⬇️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardList;
