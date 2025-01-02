import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Layout from './Layout';
import Manager from './pages/Manager';
import 'react-toastify/dist/ReactToastify.css';
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Main layout component
    errorElement: <Error />,
    children: [
      {
        path: "", // The root path, which points to the Home component
        element: <Home />,  // This component will contain all the sections
      },
      {
        path : "/product",
        element: <Manager />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY} 
      frontendApi="your-clerk-frontend-api"
      afterSignOutUrl="/" >
      <RouterProvider router={router} />
    </ClerkProvider>

  </React.StrictMode>,
);
