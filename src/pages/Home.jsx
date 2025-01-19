import React from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { MapPin, ChevronRight, Zap, Clock, Target, TrendingUp, Users } from 'lucide-react'; 
import Docs from './Docs';
import FAQ from './FAQ';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
      <div className="mb-6 inline-block p-4 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-green-600 group-hover:text-green-700">
        <span className="text-sm font-medium">Learn more</span>
        <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

function Hero() {
  const { isSignedIn } = useUser();
  const { openSignUp } = useClerk();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 pt-16 overflow-hidden flex flex-col justify-center">
      {/* ToastContainer for global toast notifications */}
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
      
      <section id="home" className="container mx-auto px-6 py-16 md:py-24 flex items-center justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-screen-lg">
          <div>
            <div className="inline-block bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              New! - Smart Route Optimization 🎯
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block mb-2">Find the Perfect Route</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                for All Your Destinations
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join 37k+ users optimizing their journeys with our intelligent route planning algorithm. Save time, reduce costs, and travel efficiently.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => toast.info("Try our route planner soon!")}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                Start Planning <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative bg-white rounded-lg shadow-2xl p-8">
            <div className="relative h-[400px] bg-gray-50 rounded-lg overflow-hidden">
              {/* Simulated Map with Route */}
              <div className="absolute inset-0 bg-gray-100">
                <div className="absolute top-1/4 left-1/4 animate-pulse">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div className="absolute top-1/2 left-1/2 animate-pulse">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <div className="absolute bottom-1/4 right-1/4 animate-pulse">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                {/* Connecting Lines */}
                <div className="absolute top-1/4 left-1/4 w-[150px] h-[2px] bg-green-500 transform rotate-[30deg] origin-left"></div>
                <div className="absolute top-1/2 left-1/2 w-[150px] h-[2px] bg-green-500 transform rotate-[30deg] origin-left"></div>
                {/* Route Optimization Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with centered content */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Route Planning Experience
            </h2>
            <p className="text-lg text-gray-600">
              RouteOptimal combines advanced algorithms with user-friendly design to revolutionize how you plan and optimize your routes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 inline-block p-4 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Optimization</h3>
              <p className="text-gray-600 mb-4">
                Our AI-powered algorithm analyzes multiple factors to find the most efficient route, saving you up to 30% in travel time.
              </p>
              <div className="flex items-center text-green-600 group-hover:text-green-700">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 inline-block p-4 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Reduce fuel consumption and vehicle wear by optimizing routes, leading to significant cost savings over time.
              </p>
              <div className="flex items-center text-green-600 group-hover:text-green-700">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div className="group p-8 bg-white rounded-xl border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 inline-block p-4 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User-Friendly</h3>
              <p className="text-gray-600 mb-4">
                Intuitive interface designed for everyone. No technical expertise required - just input your stops and get optimized routes instantly.
              </p>
              <div className="flex items-center text-green-600 group-hover:text-green-700">
                <span className="text-sm font-medium">Learn more</span>
                <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-8 md:p-12 pt-12 pb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Real Results, Real Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">30% Time Savings</h4>
                      <p className="text-gray-600">Complete more deliveries in less time with optimized routes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">25% Cost Reduction</h4>
                      <p className="text-gray-600">Lower fuel consumption and reduced vehicle maintenance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                      <span className="text-green-700 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">100% Satisfaction</h4>
                      <p className="text-gray-600">Join thousands of satisfied users optimizing their routes daily</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-green-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-50"></div>
                <div className="relative bg-white rounded-xl shadow-lg p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2">37k+</div>
                  <div className="text-xl font-semibold text-gray-900 mb-4">Active Users</div>
                  <p className="text-gray-600 mb-6">
                    Join our growing community of businesses and individuals optimizing their routes every day.
                  </p>
                  <button
                    onClick={() => toast.success("Join our community!")}
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Get Started Today</span>
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section with centered content */}
      <section id="features" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Why Choose RouteOptimal?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-green-600" />}
              title="Smart Optimization"
              description="Our advanced algorithm finds the most efficient route between multiple destinations."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-green-600" />}
              title="Save Time"
              description="Reduce travel time by up to 30% with optimized route planning."
            />
            <FeatureCard
              icon={<MapPin className="h-8 w-8 text-green-600" />}
              title="Multiple Stops"
              description="Easily plan routes with unlimited stops and destinations."
            />
          </div>
        </div>
      </section>

      <section id="docs" className="bg-green-50 py-16">
        <Docs />
      </section>

      <section id="faq" className="bg-gray-50 py-16">
        <FAQ />
      </section>

      
    </div>

  );
}


export default Hero;
