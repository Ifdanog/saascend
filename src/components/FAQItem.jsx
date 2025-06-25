import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className={`bg-white rounded-xl border px-6 py-4 mb-3 transition-shadow ${
        isOpen ? "shadow-md" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between w-full items-center text-left"
      >
        <span className={`font-medium ${isOpen ? "font-semibold" : ""}`}>
          {question}
        </span>
        {isOpen ? (
          <FiChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <FiChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

export default FAQItem;
