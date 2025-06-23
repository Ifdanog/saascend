import React, { useState } from "react";
import Button from "../button";
import TypingHeading from "./typingheading";

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  const handleBackdropClick = (e) => {
    if (e.target.id === "video-backdrop") {
      setShowVideo(false);
    }
  };

  return (
    <div className="relative h-auto 3xl:h-[50vh] xl:h-[90vh] flex flex-col justify-center px-6 md:px-10 lg:px-40 py-16 overflow-hidden">
      {/* Purple Blur */}
      <div className="absolute top-[-100px] left-[50%] translate-x-[-50%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-purple-500 rounded-full blur-3xl opacity-20 z-0"></div>

      {/* Pink Blur */}
      <div className="absolute bottom-[-50px] left-[-50px] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] bg-pink-400 rounded-full blur-2xl opacity-20 z-0"></div>

      {/* Background Image */}
      <div
        className="
          absolute bottom-0 right-0 
          bg-[url('/cover-optim.webp')] 
          bg-no-repeat 
          bg-[length:600px] sm:bg-[length:800px] lg:bg-[length:1000px] 
          bg-bottom-right 
          w-[600px] sm:w-[800px] lg:w-[2000px] 
          h-[300px] sm:h-[400px] lg:h-[1000px] 
          z-0
        "
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center md:text-left">
        <TypingHeading />

        <p className="w-full sm:w-4/5 lg:w-1/3 my-6 text-base sm:text-lg text-gray-700">
          We transform your vision into world-class marketing videos that
          capture attention, engage, educate, and turn viewers into customers.
        </p>

        <div className="flex flex-row gap-6 justify-center md:justify-start sm:items-center">
          <Button text="Book a Call" />

          <p
            className="font-medium cursor-pointer hover:underline transition flex gap-2 items-center"
            onClick={handleClick}
          >
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-3 flex items-center justify-center">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                className="w-4 h-4"
              >
                <path
                  d="M12.5427 6.04065L5.55203 1.58087C3.62707 0.35698 1.11264 1.74776 1.11264 4.04255V12.9575C1.11264 15.2523 3.62707 16.643 5.55203 15.4145L12.5473 10.9547C14.3387 9.8143 14.3387 7.18109 12.5473 6.03601L12.5427 6.04065Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </span>
            Watch Video
          </p>
        </div>

        {showVideo && (
          <div
            id="video-backdrop"
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-gray-200 bg-opacity-30 flex items-center justify-center z-50"
          >
            <div className="relative w-[90%] max-w-4xl aspect-video">
              {/* Close button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute -top-4 -right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow"
              >
                ✕
              </button>

              {/* Iframe */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Tt4iGs4GPoU?autoplay=1"
                title="Best SaaS Explainer Videos Showreel 2025 | Burnwe - Video Marketing Agency"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        )}

        <div className="justify-center md:justify-start flex gap-2 items-center my-6 text-sm sm:text-base">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
          >
            <path
              d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
              fill="#FDB82C"
            />
          </svg>
          <p>Trusted by best tech companies</p>
        </div>

        {/* Logos Grid */}
        <div className="opacity-0 md:opacity-100 sm:w-[80%] md:w-[40%] grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["wacom", "pollfish", "fibocom", "krisp", "smartcom", "ramp"].map(
            (logo) => (
              <div
                key={logo}
                className="flex items-center justify-center h-16 sm:h-20"
              >
                <img
                  src={`/${logo}.svg`}
                  alt={logo}
                  className="max-h-full object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
