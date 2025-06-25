import React from "react";

const Why = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-40 bg-gray-100">
      <h2 className="text-center text-5xl font-bold leading-tight">
        Why Choose Saascend?
      </h2>
      <div className="w-[80%] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
        <div className="rounded-2xl bg-white border-1 border-gray-200 py-6 px-4">
          <img
            src="/high-quality-8c6cbffefa34764fb952439ec18fd09b.svg"
            alt=""
          />
          <h3 className="text-xl py-4 font-bold">High-Quality Content</h3>
          <p className="text-sm">
            High-quality video content and production, delivering the highest
            ROI for your videos
          </p>
        </div>
        <div className="rounded-2xl bg-white border-1 border-gray-200 py-6 px-4">
          <img src="/expertise-18433ca1c098686335e6ffedd989b63e.svg" alt="" />
          <h3 className="text-xl py-2 font-bold">Tech Expertise</h3>
          <p className="text-sm">
            I understand even the most complicated tech products and how to
            explain them
          </p>
        </div>
        <div className="rounded-2xl bg-white border-1 border-gray-200 py-6 px-4">
          <img src="/download.svg" alt="" />
          <h3 className="text-xl py-2 font-bold">Personalized Approach</h3>
          <p className="text-sm">
            No templates, every video is uniquely crafted for each client
          </p>
        </div>
        <div className="rounded-2xl bg-white border-1 border-gray-200 py-6 px-4">
          <img src="/community-77b2bb4647717cfb6726254d695a4997.svg" alt="" />
          <h3 className="text-xl py-2 font-bold">Exclusive Community</h3>
          <p className="text-sm">
            Be part of the largest Tech Video Marketing Community. Connect,
            collaborate and grow together
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
