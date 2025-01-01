import React from 'react';
import { Code2 } from 'lucide-react';

// Define the EditorWindow component
function EditorWindow({ fileName, children }) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-xl h-full flex flex-col border border-[#2d2d2d]">
      <div className="flex items-center justify-between px-3 py-2 bg-[#2d2d2d]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#3178c6] rounded-sm flex items-center justify-center text-[8px] text-white font-bold">
              TS
            </div>
          </div>
          <span className="text-sm text-gray-300 font-medium">{fileName}</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-400 hover:text-gray-200">−</button>
          <button className="text-gray-400 hover:text-gray-200">□</button>
          <button className="text-gray-400 hover:text-gray-200">×</button>
        </div>
      </div>
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}

// Define the CodeImage component
function CodeImage({ gradient }) {
  return (
    <div className={`rounded-lg p-6 h-full ${gradient}`}>
      <EditorWindow fileName="hello.ts">
        <div className="font-mono text-sm leading-6">
          <span className="text-[#c586c0]">function</span>{" "}
          <span className="text-[#dcdcaa]">hello</span>
          <span className="text-gray-300">(</span>
          <span className="text-[#9cdcfe]">name</span>
          <span className="text-gray-300">:</span>{" "}
          <span className="text-[#4ec9b0]">string</span>
          <span className="text-gray-300">) {`{`}</span>
          <br />
          <span className="text-gray-300 ml-4">console.</span>
          <span className="text-[#dcdcaa]">log</span>
          <span className="text-gray-300">(</span>
          <span className="text-[#ce9178]">'Hi '</span>
          <span className="text-gray-300"> + </span>
          <span className="text-[#9cdcfe]">name</span>
          <span className="text-gray-300">);</span>
          <br />
          <span className="text-gray-300">{`}`}</span>
        </div>
      </EditorWindow>
    </div>
  );
}

// Define the ScrollingRow component
function ScrollingRow({ direction, gradients }) {
  return (
    <div className="relative h-[300px] overflow-hidden py-8">
      <div
        className={`flex gap-4 absolute h-full ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{
          width: '100%',
        }}
      >
        {/* Duplicate the gradients for seamless scrolling */}
        {[...gradients, ...gradients].map((gradient, index) => (
          <div key={index} className="w-[300px] h-full flex-shrink-0">
            <CodeImage gradient={gradient} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Docs component
function Docs() {
  const row1Gradients = [
    'bg-gradient-to-br from-pink-300 to-orange-300',
    'bg-gradient-to-br from-teal-300 to-emerald-300',
    'bg-gradient-to-br from-purple-300 to-red-300',
    'bg-gradient-to-br from-blue-300 to-indigo-300',
  ];

  const row2Gradients = [
    'bg-gradient-to-br from-violet-300 to-fuchsia-300',
    'bg-gradient-to-br from-yellow-300 to-amber-300',
    'bg-gradient-to-br from-sky-300 to-blue-300',
    'bg-gradient-to-br from-rose-300 to-pink-300',
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center mb-12 px-4 mt-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-8 h-8 text-teal-400" />
          <h1 className="text-6xl font-bold text-white">Code Showcase</h1>
        </div>
        <h2 className="text-4xl font-bold text-white mb-2">
          Because your code deserves
        </h2>
        <p className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 text-transparent bg-clip-text">
          a stunning presentation
        </p>
      </div>

      <div className="w-full h-full">
        <ScrollingRow direction="left" gradients={row1Gradients} />
        <ScrollingRow direction="right" gradients={row2Gradients} />
      </div>
    </div>
  );
}

export default Docs;
