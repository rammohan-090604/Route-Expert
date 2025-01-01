import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Importing icons

// FAQData (the data you provided)
const faqData = [
  {
    question: "How do I save a code snippet?",
    answer: "Simply paste your code into the editor, add a title and optional description, select the programming language, and click 'Save'. Your snippet will be automatically formatted and syntax-highlighted."
  },
  {
    question: "What programming languages are supported?",
    answer: "We support over 100 programming languages including JavaScript, Python, Java, C++, Ruby, Go, and many more. Each language comes with proper syntax highlighting and formatting."
  },
  {
    question: "Can I organize my snippets into collections?",
    answer: "Yes! You can create custom collections to organize your snippets by project, language, or any other category. You can also tag snippets for easier searching and filtering."
  },
  {
    question: "How do I share my snippets with others?",
    answer: "Each snippet has a unique shareable link. You can also set visibility options: public (anyone with the link), private (only you), or share with specific team members."
  },
  {
    question: "Is version control available for snippets?",
    answer: "Yes, we automatically maintain a version history of your snippets. You can view previous versions, compare changes, and restore older versions if needed."
  }
];

// FAQItem component
const FAQItem = ({ question, answer, isActive, onClick }) => {
  return (
    <div className="mb-4">
      <button
        className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${
          isActive ? 'bg-black-100' : 'bg-gray-50 hover:bg-gray-100'
        }`}
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-gray-900">{question}</h3>
        {isActive ? (
          <ChevronUp className="w-5 h-5 text-grey-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isActive && (
        <div className="mt-2 p-4 bg-white rounded-lg border border-gray-100">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

// FAQ component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Everything you need to know about saving and managing your code snippets
        </p>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
