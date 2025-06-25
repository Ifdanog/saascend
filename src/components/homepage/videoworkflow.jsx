import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const tabs = ["LiveAction", "Animated", "Motion Graphics"];
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const workflows = {
  LiveAction: [
    {
      title: "Onboarding",
      description:
        "We present a detailed overview of the steps and timelines for your project, and welcome you to Burnwe community",
      img: "/onboarding.webp",
      toColor: "pink",
    },
    {
      title: "Scripting",
      description:
        "Based on a questionnaire you fill out, we craft a personalized video script, tailored to your branding, goals and video type",
      img: "/scripting.webp",
      toColor: "blue",
    },
    {
      title: "Storyboard",
      description:
        "We create a visual storyboard to illustrate the video's storyline and the outcome",
      img: "/storyboard.webp",
      toColor: "orange",
    },
    {
      title: "Organizational Activities",
      description:
        "We meticulously organize every aspect, from selecting location, actors to coordinating wardrobe, makeup, set design, and all necessary props",
      img: "/elgarreta.webp",
      toColor: "pink",
    },
    {
      title: "Video Shooting",
      description:
        "Our professional team handles the initial setup, ensuring technical equipment is ready, and then begins the video shooting process",
      img: "/photo.webp",
      toColor: "pink",
    },
    {
      title: "VO & Music",
      description:
        "We organize the voice-over recording from 200+ professionals in our database and then we combine it with the perfect music",
      img: "/music.webp",
      toColor: "orange",
    },
    {
      title: "Video Creation",
      description:
        "Finally, time for the video creation magic! We put all the elements together and bring your final video to life",
      img: "/videocreation.webp",
      toColor: "blue",
    },
  ],
  Animated: [
    {
      title: "Onboarding",
      description:
        "We present a detailed overview of the steps and timelines for your project, and welcome you to Burnwe community",
      img: "/onboarding.webp",
    },
    {
      title: "Scripting",
      description:
        "Based on a questionnaire you fill out, we craft a personalized video script, tailored to your branding, goals and video type",
      img: "/scripting.webp",
    },
    {
      title: "Storyboard",
      description:
        "We create a visual storyboard to illustrate the video's storyline and the outcome",
      img: "/storyboard.webp",
    },
    {
      title: "Sketches",
      description:
        "For each scene in the video, we create detailed sketch drawings to showcase the initial picture",
      img: "/sketch.webp",
      toColor: "purple",
    },
    {
      title: "Illustration",
      description:
        "We create custom illustrations that align with your branding and visualize each scene of the video in a static format",
      img: "/illustration.webp",
      toColor: "purple",
    },
    {
      title: "VO & Music",
      description:
        "We organize the voice-over recording from 200+ professionals in our database and then we combine it with the perfect  music",
      img: "/music.webp",
    },
    {
      title: "Video Creation",
      description:
        "Finally, time for the video creation magic! We put all the elements together and bring your final video to life",
      img: "/videocreation.webp",
    },
  ],
  "Motion Graphics": [
    {
      title: "Onboarding",
      description:
        "We present a detailed overview of the steps and timelines for your project, and welcome you to Burnwe community",
      img: "/onboarding.webp",
    },
    {
      title: "Scripting",
      description:
        "Based on a questionnaire you fill out, we craft a personalized video script, tailored to your branding, goals and video type",
      img: "/scripting.webp",
    },
    {
      title: "Storyboard",
      description:
        "We create a visual storyboard to illustrate the video's storyline and the outcome",
      img: "/storyboard.webp",
    },
    {
      title: "VO & Music",
      description:
        "We organize the voice-over recording from 200+ professionals in our database and then we combine it with the perfect music",
      img: "/music.webp",
    },
    {
      title: "Video Creation",
      description:
        "Finally, time for the video creation magic! We put all the elements together and bring your final video to life",
      img: "/videocreation.webp",
    },
  ],
};

const VideoWorkflow = () => {
  const [activeTab, setActiveTab] = useState("Motion Graphics");
  const steps = workflows[activeTab];

  return (
    <div className="bg-gray-100 px-6 py-12 text-center">
      <h2 className="text-4xl font-bold text-black mb-8">
        Our Video Creation Workflow
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Steps */}
      <div className="flex flex-wrap justify-center gap-12 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative text-center max-w-xs flex flex-col items-center p-6 rounded-2xl transition-all duration-300"
          >
            <div className="relative overflow-visible border-2 border-white rounded-xl pt-12">
              {/* Gradient background with opacity overlay */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(to bottom, #fff5ed, ${step.toColor})`,
                  opacity: 0.4,
                  zIndex: 0,
                }}
              />

              {/* Protruding Image */}
              <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 z-10 w-30 h-30">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="relative z-10 px-4 pb-6 text-center">
                <h4 className="text-lg font-bold mt-10">{step.title}</h4>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-2">{step.description}</p>

            {/* Arrow or Checkmark */}
            {index < steps.length - 1 ? (
              <div className="mt-6 text-black text-xl hidden lg:block">
                <FaArrowRight />
              </div>
            ) : (
              <div className="mt-6 text-blue-500 text-xl">
                <FaCheckCircle />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoWorkflow;
