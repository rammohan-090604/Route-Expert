import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';

// App Component
function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "How does the route optimization algorithm work?",
      answer: "Our algorithm uses advanced genetic algorithms and machine learning to analyze multiple factors including distance, traffic patterns, time windows, and vehicle constraints to find the most efficient route between multiple destinations."
    },
    {
      question: "Can I optimize routes for multiple vehicles?",
      answer: "Yes! Our platform supports multi-vehicle route optimization. You can specify different vehicle types, capacities, and constraints for each vehicle in your fleet."
    },
    {
      question: "Is there a limit to the number of stops I can add?",
      answer: "Our standard plan supports up to 100 stops per route. Enterprise plans offer unlimited stops and custom optimization parameters."
    },
    {
      question: "Does the system consider real-time traffic?",
      answer: "Yes, our platform integrates real-time traffic data to provide the most accurate route optimization, helping you avoid delays and congestion."
    },
    {
      question: "Can I set specific time windows for deliveries?",
      answer: "Absolutely! You can set specific time windows for each stop, and our algorithm will optimize the route while respecting these time constraints."
    },
    {
      question: "How often is the route recalculated?",
      answer: "Routes are automatically recalculated every 5 minutes based on real-time conditions. You can also manually trigger a recalculation at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Other components like Hero, Features, and Documentation can be included here */}
      {/* Hero */}
      {/* Features */}
      {/* Documentation */}

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions about our route optimization platform
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-100"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform ${
                        openQuestion === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-4 text-gray-600 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help!
              </p>
              <button
                onClick={() => toast.info("Support team will contact you soon!")}
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Support
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
