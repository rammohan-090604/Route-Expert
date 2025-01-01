import React from 'react';

const CodeCard = () => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 relative left-[-10px]"></div>
        </div>
        <span className="text-gray-400 text-sm">hello-world.js</span>
      </div>
      <pre className="text-sm">
        <code className="text-blue-400">function</code>{' '}
        <code className="text-yellow-400">helloWorld</code>
        <code className="text-white">()</code>{' '}
        <code className="text-white">{'{'}</code>
        <br />
        <code className="text-white ml-4">console</code>
        <code className="text-white">.</code>
        <code className="text-yellow-400">log</code>
        <code className="text-white">(</code>
        <code className="text-green-400">'Hello World!'</code>
        <code className="text-white">);</code>
        <br />
        <code className="text-white">{'}'}</code>
      </pre>
    </div>
  );
};

export default CodeCard;