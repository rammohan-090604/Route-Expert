import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Layout from './Layout';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import FAQ from './pages/FAQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contactus",
        element: <Contact />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "faq",
        element: <FAQ />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
