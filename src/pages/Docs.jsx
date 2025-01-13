import React from 'react';
import { ChevronRight } from 'lucide-react';

// Docs Function Component with improved design
function Docs() {
  return (
    <section id="docs" className="bg-green-50 py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Documentation
            </h2>
            <p className="text-xl text-gray-600">
              Learn how to use the Route Optimization Platform effectively and unlock its full potential.
            </p>
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            {/* Getting Started */}
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 border-l-4 border-green-500">
              <h3 className="text-3xl font-semibold text-gray-900">Getting Started</h3>
              <p className="text-gray-600">
                To get started with our platform, simply sign up, log in, and you'll be able to begin optimizing your routes
                by entering your destinations, vehicle data, and preferences.
              </p>
              <p className="text-gray-600">
                Once you've entered the necessary information, our powerful algorithm will optimize the routes for you, saving
                time and reducing costs.
              </p>
            </div>

            {/* Features */}
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 border-l-4 border-green-500">
              <h3 className="text-3xl font-semibold text-gray-900">Key Features</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Real-time traffic integration to avoid congestion and delays.</li>
                <li>Multi-vehicle optimization for better fleet management.</li>
                <li>Custom time window settings for delivery scheduling.</li>
                <li>Support for up to 100 stops per route (unlimited stops on enterprise plans).</li>
                <li>Automatic route recalculation every 5 minutes based on real-time conditions.</li>
              </ul>
            </div>

            {/* Advanced Features */}
            <div className="bg-white shadow-lg rounded-lg p-8 space-y-6 border-l-4 border-green-500">
              <h3 className="text-3xl font-semibold text-gray-900">Advanced Features</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Set vehicle types, capacities, and constraints for accurate route optimization.</li>
                <li>Configure specific time windows for each stop to ensure punctual deliveries.</li>
                <li>Support for custom route optimization parameters tailored to your business needs.</li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Ready to start optimizing your routes and improving efficiency? Get started now!
              </p>
              <button
                onClick={() => toast.info("Let's get started with your optimization!")}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                Start Optimizing
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Docs;
