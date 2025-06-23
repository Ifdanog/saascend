import React from "react";

const renderMedia = (media, className = "") => {
  const isVideoExtension = (url) => {
    return /\.(mp4|webm|ogg)$/i.test(url);
  };

  let src = typeof media === "string" ? media : media?.src;
  if (!src) return null;

  if (typeof media === "string") {
    // Heuristic based on file extension or known embed
    if (isVideoExtension(media)) {
      return (
        <video
          src={media}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`${className} object-cover w-full h-full rounded-2xl`}
        />
      );
    } else {
      // Default to image
      return (
        <img
          src={media}
          alt=""
          className={`${className} object-cover w-full h-full rounded-2xl`}
        />
      );
    }
  }
  return null;
};

const Row = ({
  mainImage,
  sideImage1,
  sideImage2,
  heading,
  body,
  type = "primary",
}) => {
  const isPrimary = type === "primary";

  return (
    <div className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {isPrimary ? (
          <>
            {/* Image Grid */}
            <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full">
              <div className="col-span-2 row-span-2">
                {renderMedia(mainImage)}
              </div>
              <div className="col-span-2 row-span-1">
                {renderMedia(sideImage1)}
              </div>
              <div className="col-span-2 row-span-1">
                {renderMedia(sideImage2)}
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{heading}</h2>
              <p className="text-gray-600">{body}</p>
            </div>
          </>
        ) : (
          <>
            {/* Text Content First */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{heading}</h2>
              <p className="text-gray-600">{body}</p>
            </div>

            {/* Secondary Image Layout */}
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              <div className="col-span-2 row-span-1">
                {renderMedia(mainImage)}
              </div>
              {renderMedia(sideImage1)}
              {renderMedia(sideImage2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Row;
