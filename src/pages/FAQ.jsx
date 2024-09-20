import React, { useState } from 'react';
import '../styles/faq.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What courses do you offer?",
      answer: "We offer a variety of courses in software development, data science, and more."
    },
    {
      question: "How can I enroll?",
      answer: "You can enroll directly through our website or contact us for assistance."
    },
    {
      question: "What is the duration of the courses?",
      answer: "The duration varies by course, typically ranging from a few weeks to several months."
    },
    {
      question: "Do you offer certifications?",
      answer: "Yes, upon completion of the course, you will receive a certificate."
    },
    {
      question: "Is there any financial aid available?",
      answer: "Yes, we offer various financial aid options. Please contact us for more details."
    }
  ];

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section bg-white py-16">
      <div className="pt-40 container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-600 text-center mb-8">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item mb-4">
              <div className="faq-question bg-blue-200 p-4 rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
                <h3 className="text-lg font-semibold text-blue-800">{faq.question}</h3>
              </div>
              {activeIndex === index && (
                <div className="faq-answer bg-blue-100 p-4 rounded-lg mt-2">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
