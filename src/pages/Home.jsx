// import React from 'react';
// import { useClerk, useUser } from '@clerk/clerk-react';
// import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
// import CodeCard from './CodeCard';
// import About from './About';
// import Docs from './Docs';
// import FAQ from './FAQ';


// function Hero() {
//   const { isSignedIn } = useUser();
//   const { openSignUp } = useClerk()
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 pt-16 overflow-hidden"> {/* Adjusted here */}
//       <section id="home" className="Home-section">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
//           <div className="text-center">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
//               <span className="block mb-2">We enable developers</span>
//               <span className="block">to create </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
//                 stunning Development
//               </span>
//             </h1>
            
//             <div className="inline-block bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-6 sm:mb-8">
//               New! - Experimental Code Accessibility 🎥
//             </div>

//             <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
//               Take your Code Presentations to the next level with our powerful animation features.
//             </p>

//             <button
//               onClick={() => {
//                 if (!isSignedIn) {
//                   openSignUp(); // Open Sign-In modal if not signed in
//                 } else {
//                   toast.info("You are already logged in! Try in Product tab.");
//                   // Optionally, navigate to the product page
//                   // navigate('/product'); 
//                 }
//               }}
//               className="inline-block bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-blue-600 transition-colors">
//               Get started - It's free
//             </button>

//             <p className="text-sm sm:text-base text-gray-600 mt-4">
//               Join a community of 37k+ developers spicing up their content
//             </p>
//           </div>

//           <div className="mt-12 sm:mt-16 flex justify-center">
//             <div className="relative w-full max-w-2xl">
//               <div className="absolute top-0 right-0 -mr-4 sm:-mr-10 -mt-4 sm:-mt-10 w-24 sm:w-32 h-24 sm:h-32 bg-green-400 rounded-lg opacity-20 animate-pulse"></div>
//               <div className="absolute bottom-0 left-0 -ml-4 sm:-ml-10 -mb-4 sm:-mb-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
//               <div className="px-4 sm:px-0">
//                 <CodeCard />
//               </div>
//             </div>
//           </div>

//           <div className="mt-24 sm:mt-32 text-center">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600">
//               Trusted by industry leaders around the globe
//             </h2>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="about-section">
//         <About />
//       </section>

//       {/* Courses Section */}
//       <section id="docs" className="docs-section">
//         <Docs />
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="faq-section">
//         <FAQ />
//       </section>
//     </div>

//   );
// }

// export default Hero;


import React from 'react';
import { useClerk, useUser } from '@clerk/clerk-react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import CodeCard from './CodeCard';
import About from './About';
import Docs from './Docs';
import FAQ from './FAQ';

function Hero() {
  const { isSignedIn } = useUser();
  const { openSignUp } = useClerk();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-pink-50 pt-16 overflow-hidden">
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
      
      <section id="home" className="Home-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              <span className="block mb-2">We enable developers</span>
              <span className="block">to create </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                stunning Development
              </span>
            </h1>

            <div className="inline-block bg-green-100 text-green-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-6 sm:mb-8">
              New! - Experimental Code Accessibility 🎥
            </div>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Take your Code Presentations to the next level with our powerful animation features.
            </p>

            <button
              onClick={() => {
                if (!isSignedIn) {
                  openSignUp(); // Open Sign-In modal if not signed in
                } else {
                  toast.info("You are already logged in! Try in Product tab.");
                  // Optionally, navigate to the product page
                  // navigate('/product'); 
                }
              }}
              className="inline-block bg-blue-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-medium hover:bg-blue-600 transition-colors">
              Get started - It's free
            </button>

            <p className="text-sm sm:text-base text-gray-600 mt-4">
              Join a community of 37k+ developers spicing up their content
            </p>
          </div>

          <div className="mt-12 sm:mt-16 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div className="absolute top-0 right-0 -mr-4 sm:-mr-10 -mt-4 sm:-mt-10 w-24 sm:w-32 h-24 sm:h-32 bg-green-400 rounded-lg opacity-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 -ml-4 sm:-ml-10 -mb-4 sm:-mb-10 w-24 sm:w-32 h-24 sm:h-32 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="px-4 sm:px-0">
                <CodeCard />
              </div>
            </div>
          </div>

          <div className="mt-24 sm:mt-32 text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-600">
              Trusted by industry leaders around the globe
            </h2>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <About />
      </section>

      {/* Courses Section */}
      <section id="docs" className="docs-section">
        <Docs />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <FAQ />
      </section>
    </div>
  );
}

export default Hero;
