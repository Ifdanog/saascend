import HeadingText from "../headingtext";
import TestimonialCard from "./../testimonialcard";

const Feedback = () => {
  const testimonials = [
    {
      name: "Albert Stepanyan",
      role: "President & CEO",
      image: "/scylla-ceo.png",
      companyName: "SCYLLA",
      companyLogo: "/scylla.svg",
      testimonial: `We love Burnwe, they really helped us to explain our product to the customers. They do all our videos and they were the only company open to go with us to the business trips. They try to build a relationship and try to understand you, but at the same time take the freedom to show creativity. I definitely recommend anyone to work with this beautiful team!`,
    },
    {
      name: "Maria Hernandez",
      role: "Marketing Manager",
      image: "/collato-manager.jpg",
      companyName: "collato",
      companyLogo: "/collato.svg",
      testimonial: `We have managed to explain very complex product in the 60 second with Burnwe’s Animated Explainer Video. I’ll also say that one of the biggest highlight of our collaboration with Burnwe is the communication. I really appreciate that, being open in the communication, being very straight forward with ideas and very fast.`,
    },
    {
      name: "Nick Telson",
      role: "Co-Founder",
      image: "/trumpet-founder.jpg",
      companyName: "trumpet",
      companyLogo: "/trumpet.svg",
      testimonial: `We wanted a brand video to use on social media and our website. Reactions that we got was brilliant. It really cleared up the messaging. The process was very easy, Burnwe brought really good visual identity to the video.`,
    },
  ];
  return (
    <div className="py-20 px-6 md:px-10 lg:px-40 bg-gray-100">
      <HeadingText title="Clients Feedback Corner" />

      <p className="w-full lg:w-1/2 mx-auto text-center my-10">
        Our clients love sharing their 5-star success stories with us. Be the
        next one to share yours!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
