import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const tabs = ["LiveAction", "Animated", "Motion Graphics"];

const workflows = {
  LiveAction: [
    {
      title: "Onboarding",
      description:
        "We present a detailed overview of the steps and timelines for your project, and welcome you to Burnwe community",
      img: "/onboarding.webp",
      toColor: "#ffe3d4",
      fromColor: "#fff5ed",
    },
    {
      title: "Scripting",
      description:
        "Based on a questionnaire you fill out, we craft a personalized video script, tailored to your branding, goals and video type",
      img: "/scripting.png",
    },
    {
      title: "Storyboard",
      description:
        "We create a visual storyboard to illustrate the video’s storyline and the outcome",
      img: "/storyboard.png",
    },
    {
      title: "Organizational Activities",
      description:
        "We meticulously organize every aspect, from selecting location, actors to coordinating wardrobe, makeup, set design, and all necessary props",
      img: "/organization.png",
    },
    {
      title: "Video Shooting",
      description:
        "Our professional team handles the initial setup, ensuring technical equipment is ready, and then begins the video shooting process",
      img: "/shooting.png",
    },
    {
      title: "VO & Music",
      description:
        "We organize the voice-over recording from 200+ professionals in our database and then we combine it with the perfect music",
      img: "/vo-music.png",
    },
    {
      title: "Video Creation",
      description:
        "Finally, time for the video creation magic! We put all the elements together and bring your final video to life",
      img: "/video-creation.png",
    },
  ],
  Animated: [
    {
      title: "Onboarding",
      description:
        "We walk you through our animation pipeline and timeline, and introduce you to the team",
      img: "/onboarding.png",
    },
    {
      title: "Scripting",
      description:
        "Based on your brief, we write a compelling animation script tailored to your message",
      img: "/scripting.png",
    },
    {
      title: "Storyboard",
      description:
        "We sketch the keyframes and flow of the animation to align on visual storytelling",
      img: "/storyboard.png",
    },
    {
      title: "Illustration",
      description:
        "Our illustrators design custom characters and scenes that match your brand identity",
      img: "/illustration.png",
    },
    {
      title: "Animation",
      description:
        "We animate the illustrations with smooth transitions and visual effects",
      img: "/animation.png",
    },
    {
      title: "VO & Music",
      description:
        "We record professional voice-over and add fitting music and sound design",
      img: "/vo-music.png",
    },
    {
      title: "Video Creation",
      description:
        "We finalize the video by combining all visual and audio elements",
      img: "/video-creation.png",
    },
  ],
  "Motion Graphics": [
    {
      title: "Onboarding",
      description:
        "We present a detailed overview of the steps and timelines for your project, and welcome you to Burnwe community",
      img: "/onboarding.png",
    },
    {
      title: "Scripting",
      description:
        "Based on a questionnaire you fill out, we craft a personalized video script, tailored to your branding, goals and video type",
      img: "/scripting.png",
    },
    {
      title: "Storyboard",
      description:
        "We create a visual storyboard to illustrate the video’s storyline and the outcome",
      img: "/storyboard.png",
    },
    {
      title: "VO & Music",
      description:
        "We organize the voice-over recording from 200+ professionals in our database and then we combine it with the perfect music",
      img: "/vo-music.png",
    },
    {
      title: "Video Creation",
      description: "Finally, time for the video",
      img: "/video-creation.png",
    },
  ],
};

const VideoWorkflow = () => {
  const [activeTab, setActiveTab] = useState("Motion Graphics");
  const steps = workflows[activeTab];

  return (
    <div className="bg-[#f9f7f6] px-6 py-12 text-center">
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
            <div
              className={`
    relative overflow-visible border-2 border-white rounded-xl 
    group pt-12
  `}
            >
              {/* Gradient background */}
              <div
                className={`
      absolute inset-0 
      bg-gradient-to-b from-[${step.fromColor}] to-[${step.toColor}] 
      grayscale opacity-40 
      group-hover:grayscale-0 group-hover:opacity-100 
      transition-all duration-300 
      z-0 rounded-xl
    `}
              ></div>

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
              <div className="mt-6 text-gray-300 text-xl hidden lg:block">
                <FaArrowRight />
              </div>
            ) : (
              <div className="mt-6 text-pink-500 text-xl">
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
