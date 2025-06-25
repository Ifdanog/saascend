import React from "react";
import Button from "../button";

const BookCall = () => {
  return (
    <div className="py-20 px-6 md:px-10 lg:px-40 text-center">
      <h2 className="text-4xl font-bold text-black mb-8">
        Let's Bring Your Video Idea to Life
      </h2>
      <p className="w-full lg:w-1/2 mx-auto text-center my-10">
        Share your needs and goals, and leave the heavy lifting to us - from
        scripting to final videos. Let's connect and discuss how we can help
        with your next video.
      </p>
      <Button text="Book a call" />
    </div>
  );
};

export default BookCall;
