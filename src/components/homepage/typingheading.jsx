import { useState, useEffect } from "react";

const TypingHeading = () => {
  const words = ["Startups", "Crypto/NFT", "AI & SaaS", "Telco", "Tech"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.slice(0, displayedText.length - 1)
        : currentWord.slice(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // wait before deleting
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index]);

  return (
    <h1 className="w-full md:w-[60%] text-6xl font-bold leading-tight">
      Video Marketing <br /> Freelancer For{" "}
      <span className="text-blue-500">{displayedText}</span>
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default TypingHeading;
