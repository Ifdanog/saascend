import React from "react";

const TestimonialCard = ({
  image,
  name,
  role,
  companyLogo,
  companyName,
  testimonial,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto p-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
        />
        <div className="absolute bottom-0 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-2 shadow-md cursor-pointer hover:scale-105 transition">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8.54l-5.396 3.122A.5.5 0 015 11.222V4.778a.5.5 0 01.408-.494l5.396 3.122a.5.5 0 010 .873z" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
        <div className="flex items-center justify-center mt-1 space-x-1">
          {companyLogo && (
            <img src={companyLogo} alt={companyName} className="h-5" />
          )}
          {/* <p className="font-medium text-sm">{companyName}</p> */}
        </div>
        <p className="mt-3 text-sm text-gray-700">{testimonial}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
