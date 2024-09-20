import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";
import "../styles/common.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    phone: "",
    name: "",
    email: "",
    courses: "",
    query: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://mts-backend-4hmu.onrender.com/api/submit', formData);

      // Show success toast with custom class
      toast.success(<p>Form submitted successfully!</p>, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "toast-custom", // Apply custom class
      });

      // Clear the form after successful submission
      setFormData({
        phone: "",
        name: "",
        email: "",
        courses: "",
        query: ""
      });

      // Redirect to /courses after 3 seconds
      setTimeout(() => {
        navigate("/courses");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast with custom class
      toast.error(<p>Failed to submit the form.</p>, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        className: "toast-custom", // Apply custom class
      });
    }

    // Re-enable the button after 3 seconds
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="pt-20">
      <div className="padding-class relative flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full opacity-30 filter blur-xl animate-move"></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white rounded-full opacity-20 filter blur-2xl animate-move"></div>
        <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white rounded-full opacity-10 filter blur-xl animate-move"></div>

        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-md md:p-10 border border-white border-opacity-30"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="courses">
              Interested Courses
            </label>
            <input
              type="text"
              name="courses"
              id="courses"
              value={formData.courses}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              placeholder="Enter interested courses"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="query">
              Query
            </label>
            <textarea
              name="query"
              id="query"
              value={formData.query}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 bg-white bg-opacity-20 text-white placeholder-white"
              rows="4"
              placeholder="Enter your query"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300 ${
              isSubmitting ? "bg-blue-400 cursor-not-allowed" : "hover:bg-blue-800"
            }`}
            disabled={isSubmitting} // Disable the button when submitting
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Toast container for showing notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
