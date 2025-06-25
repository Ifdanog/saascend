import { useState } from "react";
import HeadingText from "../headingtext";
import FAQItem from "./../FAQItem";

const faqs = [
  {
    question: "How much time does video creation usually take?",
    answer:
      "Creating video usually takes between 4 to 8 weeks, from scripting to final delivery. The exact duration depends on the type of video and the steps involved. You’ll have unlimited opportunities to review and approve each stage of the process.",
  },
  {
    question: "How long should my marketing video be?",
    answer:
      "Marketing videos typically range between 30 seconds to 2 minutes depending on the platform and purpose. Shorter is often better for engagement.",
  },
  {
    question: "Is there a limit to revisions during the process?",
    answer:
      "We provide unlimited revisions at every stage to ensure you’re completely satisfied before moving on.",
  },
  {
    question: "Can I get a discount for larger projects?",
    answer:
      "Yes! We offer discounts for bulk or long-term projects. Reach out to us with your requirements.",
  },
  {
    question: "Why should I choose Burnwe?",
    answer:
      "Burnwe delivers high-quality, branded videos with a simple and collaborative process. Our clients love our creativity and communication.",
  },
  {
    question: "What kinds of videos do you specialize in?",
    answer:
      "We specialize in explainer videos, product demos, social media ads, and brand videos.",
  },
  {
    question: "Can you create videos in multiple languages?",
    answer:
      "Yes, we offer localization and multi-language voiceovers and subtitles.",
  },
  {
    question: "Can you make vertical videos for social media?",
    answer:
      "Absolutely! We tailor video formats to fit platforms like Instagram, TikTok, and more.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const leftFaqs = faqs.slice(0, Math.ceil(faqs.length / 2));
  const rightFaqs = faqs.slice(Math.ceil(faqs.length / 2));

  return (
    <div className="py-20 px-6 md:px-10 lg:px-40 bg-gray-100">
      <HeadingText title="FAQs" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div>
          {leftFaqs.map((faq, i) => {
            const globalIndex = i;
            return (
              <FAQItem
                key={globalIndex}
                {...faq}
                isOpen={activeIndex === globalIndex}
                onToggle={() => handleToggle(globalIndex)}
              />
            );
          })}
        </div>
        <div>
          {rightFaqs.map((faq, i) => {
            const globalIndex = i + leftFaqs.length;
            return (
              <FAQItem
                key={globalIndex}
                {...faq}
                isOpen={activeIndex === globalIndex}
                onToggle={() => handleToggle(globalIndex)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
