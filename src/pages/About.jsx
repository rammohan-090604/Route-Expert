import React from 'react';
import Reviews from '../pages/Reviews';

function About() {
  return (
    <div className='pt-28 relative min-h-screen overflow-hidden bg-gray-50 flex flex-col items-center justify-center'>
      <div className="text-blue-900 py-10 mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="https://www.madhutechskills.com/assets/images/m1.jpg"
              alt="Classroom"
              className="rounded-lg shadow-lg"
            />
            <div className="mt-4 flex items-center space-x-2">
              <span className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                20K+
              </span>
              <span className="text-gray-700 text-lg">Enrolled Learners</span>
            </div>
          </div>

        {/* Text Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Over <span className="text-red-500">20+</span> Years in{' '}
              <span className="text-red-500">Distant Learning</span> for Skill
              Development
            </h2>
            <p className="text-gray-700 mb-6">
              Madhu Tech Skills was established in June 2008 by Madhu.K (19+ years
              of industry experience) & Priya.K (M.C.A Gold medalist and 17+ years
              of industry expertise). Both are corporate trainers cum developers.
            </p>
            <ul className="space-y-2 text-lg">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>Expert Trainers
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>Online & Offline Sessions
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>Resume Building
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>LinkedIn Optimization
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">✔️</span>Mock Interviews
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      <Reviews />
    </div>
  );
}

export default About;
