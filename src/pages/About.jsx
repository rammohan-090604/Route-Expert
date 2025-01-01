import React from 'react';
import { Code, Save, Share, Palette } from 'lucide-react';  // Importing icons

// Component for the About section hero
const AboutHero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Code Snippet Library
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save, organize, and share your code snippets with ease. Built by developers, for developers.
          </p>
        </div>
      </div>
    </div>
  );
};

// Component for displaying features
const FeatureGrid = () => {
  const features = [
    {
      icon: <Save className="w-8 h-8 text-blue-500" />,
      title: 'Save Snippets',
      description: 'Store your frequently used code snippets in one secure place. Access them anytime, anywhere.'
    },
    {
      icon: <Palette className="w-8 h-8 text-green-500" />,
      title: 'Syntax Highlighting',
      description: 'Beautiful syntax highlighting for over 100+ programming languages and frameworks.'
    },
    {
      icon: <Share className="w-8 h-8 text-purple-500" />,
      title: 'Easy Sharing',
      description: 'Share your snippets with teammates or the community with a single click.'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'Version Control',
      description: 'Keep track of changes with built-in versioning for your code snippets.'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-gray-50 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for displaying stats
const Stats = () => {
  const stats = [
    { number: '100K+', label: 'Snippets Saved' },
    { number: '50K+', label: 'Active Users' },
    { number: '100+', label: 'Languages Supported' },
    { number: '99.9%', label: 'Uptime' }
  ];

  return (
    <div className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-black-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main About component combining everything
const About = () => {
  return (
    <div className="pt-16">
      <AboutHero />
      <FeatureGrid />
      <Stats />
    </div>
  );
};

export default About;
